import * as S from "./style"
import Search from "../../components/Search";
import { Dots, Writer, Plus } from "../../assets";
import { Pagination } from "../../components/Pagination";
import { Color } from "../../styles";
import { useState, useRef, useEffect } from "react";
import { EditDeleteModal } from "../../components/Manager/EditDeleteModal";
import NoPage from "../../components/NoPage";
import { getContestList } from "../../apis/Contest";
import { Contest, CONTEST_STATE, UpdateContestStateRequest } from "../../apis/Contest/interface";
import { useNavigate } from "react-router-dom";
import { updateContestState } from "../../apis/Contest/index";

// 날짜를 'YYYY년 M월 D일' 형식으로 변환하는 함수
function formatDate(dateString: string) {
  const date = new Date(dateString);
  return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
}

const ContestManager = () => {
  const [keyword, setKeyword] = useState("");

  const handleSearch = () => {
    // 실제 검색 API 호출
    console.log("검색어:", keyword);
  };

  const [currentPage, setCurrentPage] = useState(1);

  const totalDataCount = 53; // 전체 대회회 수
  const pageSize = 10; // 한 페이지당 항목 수
  const totalPages = Math.ceil(totalDataCount / pageSize); // 총 페이지 수 계산

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const [openedModalId, setOpenedModalId] = useState<number | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const [selectedContest, setSelectedContest] = useState<Contest | null>(null);

  const handleDotsClick = (id: number, contest: Contest) => {
    setOpenedModalId(prev => (prev === id ? null : id));
    setSelectedContest(contest);
  };

  const handleDelete = () => {
    setOpenedModalId(null);
    console.log("삭제하기 클릭");
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setOpenedModalId(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const [contests, setContests] = useState<Contest[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const [stateModalOpen, setStateModalOpen] = useState(false);
  const [stateChangeLoading, setStateChangeLoading] = useState(false);
  const [selectedState, setSelectedState] = useState<CONTEST_STATE | "">("");
  const [stateChangeError, setStateChangeError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContests = async () => {
      setLoading(true);
      try {
        const data = await getContestList();
        setContests(data.contests);
      } catch (e) {
        setContests([]);
      }
      setLoading(false);
    };
    fetchContests();
  }, []);

  const handleStateChange = () => {
    setStateModalOpen(true);
    setSelectedState(selectedContest?.state ?? "");
    setOpenedModalId(null);
  };

  const handleStateChangeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedContest || !selectedState) return;
    setStateChangeLoading(true);
    setStateChangeError(null);
    try {
      await updateContestState(selectedContest.id, { state: selectedState as CONTEST_STATE });
      setStateModalOpen(false);
      setStateChangeLoading(false);
      // 새로고침
      setLoading(true);
      getContestList()
        .then((data) => {
          setContests(data.contests);
          setLoading(false);
        })
        .catch(() => {
          setContests([]);
          setLoading(false);
        });
    } catch (err) {
      setStateChangeError("상태 변경에 실패했습니다.");
      setStateChangeLoading(false);
    }
  };

  return (
    <S.ManagerContainer>
      <S.Content>
        <S.ManagerHeader>
          <S.ManagerTitle>대회를 관리해주세요.</S.ManagerTitle>
          <S.ManagerDescriptionBox>
            <S.ManagerText>이곳에서 대회를 관리할 수 있습니다. 필요한 대회를 개최하고 진행해주세요!!</S.ManagerText>
            <S.ManagerText>진행 상태를 변경하고 대회 세부 정보를 조회할 수 있습니다</S.ManagerText>
          </S.ManagerDescriptionBox>
        </S.ManagerHeader>

        <S.ContestTableSection>
          <S.TableTopBar>
            <S.TotalCountText>전체 {contests.length}건</S.TotalCountText>

            <S.ControlsWrapper>
              <Plus size={24} color={Color.gray500} />
              <Search
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                onSearch={handleSearch}
              />
            </S.ControlsWrapper>
          </S.TableTopBar>

          <S.ContestTable>
            <S.TableHeaderRow>
              <S.StatusHeaderCell>진행상황</S.StatusHeaderCell>
              <S.ScheduleHeaderCell>일정</S.ScheduleHeaderCell>
              <S.ContestHeaderCell>대회</S.ContestHeaderCell>
            </S.TableHeaderRow>
            {
              loading ? (
                <div>로딩중...</div>
              ) : contests.length > 0 ? (
                <S.TableBody>
                  {contests.map((contest) => (
                    <S.ContestRow key={contest.id} onClick={() => navigate(`/contestview?contestId=${contest.id}`)} style={{ cursor: 'pointer' }}>
                      <S.ContestDataGroup>
                        <S.HighlightedText>{contest.state}</S.HighlightedText>
                        <S.ScheduleText>
                          {formatDate(contest.startDate)} ~ {formatDate(contest.endDate)}
                        </S.ScheduleText>
                        <S.ContestNameText>{contest.name}</S.ContestNameText>
                      </S.ContestDataGroup>
                      <div style={{ position: "relative" }} ref={modalRef} onClick={e => e.stopPropagation()}>
                        <Dots size={20} color={Color.gray300} onClick={() => handleDotsClick(contest.id, contest)} />
                        {openedModalId === contest.id && (
                          <EditDeleteModal
                            onEdit={() => {
                              if (selectedContest) {
                                navigate(`/contestEdit?contestId=${selectedContest.id}`);
                                setOpenedModalId(null);
                              }
                            }}
                            onDelete={handleDelete}
                            onStateChange={handleStateChange}
                          />
                        )}
                      </div>
                    </S.ContestRow>
                  ))}
                </S.TableBody>
              ) : (
                <NoPage />
              )
            }
          </S.ContestTable>
        </S.ContestTableSection>
      </S.Content>

      {contests.length > pageSize && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}

      {/* 진행상태 변경 모달 */}
      {stateModalOpen && selectedContest && (
        <div style={{
          position: 'fixed', zIndex: 9999, top: 0, left: 0, width: '100vw', height: '100vh',
          background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <div style={{ background: '#fff', borderRadius: 12, padding: 32, minWidth: 320, maxWidth: 400 }}>
            <h3 style={{ margin: 0, marginBottom: 8 }}>진행상태 변경</h3>
            <div style={{ marginBottom: 16, color: '#888' }}>{selectedContest.name}의 상태를 변경합니다.</div>
            <form onSubmit={handleStateChangeSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <select
                value={selectedState}
                onChange={e => setSelectedState(e.target.value as CONTEST_STATE)}
                style={{ padding: 12, borderRadius: 8, border: '1px solid #eee', fontSize: 16 }}
                required
              >
                <option value="" disabled>상태를 선택하세요</option>
                {Object.values(CONTEST_STATE).map(state => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
              <button
                type="submit"
                style={{
                  width: '100%', padding: '14px 0', background: '#222', color: '#fff', border: 'none', borderRadius: 12,
                  fontSize: 16, fontWeight: 500, cursor: stateChangeLoading ? 'not-allowed' : 'pointer', opacity: stateChangeLoading ? 0.7 : 1
                }}
                disabled={stateChangeLoading}
              >
                {stateChangeLoading ? '변경 중...' : '변경하기'}
              </button>
              {stateChangeError && <div style={{ color: 'red', textAlign: 'center' }}>{stateChangeError}</div>}
            </form>
            <button onClick={() => setStateModalOpen(false)} style={{ marginTop: 12, background: 'none', border: 'none', color: '#888', cursor: 'pointer' }}>닫기</button>
          </div>
        </div>
      )}
    </S.ManagerContainer >
  )
}

export default ContestManager;