import * as S from "./style"
import Search from "../../components/Search";
import { Dots, Writer, Plus } from "../../assets";
import { Pagination } from "../../components/Pagination";
import { Color } from "../../styles";
import { useState, useRef, useEffect } from "react";
import { EditDeleteModal } from "../../components/Manager/EditDeleteModal";
import NoPage from "../../components/NoPage";

const ContestManager = () => {
  const [keyword, setKeyword] = useState("");

  const handleSearch = () => {
    // 실제 검색 API 호출
    console.log("검색어:", keyword);
  };

  const [currentPage, setCurrentPage] = useState(1);

  const totalDataCount = 53; // 전체 학생 수
  const pageSize = 10; // 한 페이지당 항목 수
  const totalPages = Math.ceil(totalDataCount / pageSize); // 총 페이지 수 계산

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // 페이지 변경 시 처리할 로직 작성
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleDotsClick = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleEdit = () => {
    setIsModalOpen(false);
    console.log("수정하기 클릭");
  };

  const handleDelete = () => {
    setIsModalOpen(false);
    console.log("삭제하기 클릭");
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsModalOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const hasStudentData = true;

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
            <S.TotalCountText>전체 10건</S.TotalCountText>

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
              hasStudentData ? (
                <S.TableBody>
                  <S.ContestRow>
                    <S.ContestDataGroup>
                      <S.HighlightedText>시작전</S.HighlightedText>
                      <S.ScheduleText>2024년 5월 12일 ~ 2024년 12월 12일</S.ScheduleText>
                      <S.ContestNameText>2024년 교내 해커톤</S.ContestNameText>
                    </S.ContestDataGroup>

                    <div style={{ position: "relative" }} ref={modalRef}>
                      <Dots size={20} color={Color.gray300} onClick={handleDotsClick} />
                      {isModalOpen && (
                        <EditDeleteModal
                          onEdit={handleEdit}
                          onDelete={handleDelete}
                        />
                      )}
                    </div>
                  </S.ContestRow>
                </S.TableBody>
              ) : (
                <NoPage />
              )
            }

          </S.ContestTable>

        </S.ContestTableSection>
      </S.Content>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </S.ManagerContainer >
  )
}

export default ContestManager;