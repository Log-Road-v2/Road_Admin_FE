import * as S from "./style"
import DropDown from "../../components/DropDown";
import Search from "../../components/Search";
import { Dots, Writer, Reset } from "../../assets";
import { Pagination } from "../../components/Pagination";
import { Color } from "../../styles";
import { useState, useRef, useEffect } from "react";
import { EditDeleteModal } from "../../components/Manager/EditDeleteModal";
import NoPage from "../../components/NoPage";

const StudentManager = () => {
  const tableHeaderLabel = ["기수", "학년", "반", "번호", "이름", "상태"];

  const [keyword, setKeyword] = useState("");
  const [selectedGrade, setSelectedGrade] = useState<number | undefined>(undefined);
  const [selectedClass, setSelectedClass] = useState<number | undefined>(undefined);

  const gradeOptions = [1, 2, 3];
  const classOptions = [1, 2, 3, 4];

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
          <S.ManagerTitle>학생 인원을 관리해주세요.</S.ManagerTitle>
          <S.ManagerDescriptionBox>
            <S.ManagerText>이곳에서 학생 인원을 관리할 수 있습니다. 변경이 필요한 학생의 정보를 업데이트 해주세요!!</S.ManagerText>
            <S.ManagerText>엑셀 파일을 이용하여 학생들을 추가하거나 수정할 수 있습니다. 개별 수정은 학생 리스트를 눌러서 업데이트해주세요.</S.ManagerText>
          </S.ManagerDescriptionBox>
        </S.ManagerHeader>

        <S.StudentTableSection>
          <S.TableTopBar>
            <S.TotalCountText>전체 10건</S.TotalCountText>

            <S.ControlsWrapper>
              <Reset size={20} color={Color.gray300} />
              <DropDown
                val={selectedGrade}
                setVal={setSelectedGrade}
                describe="학년"
                items={gradeOptions}
                width="90px"
              />

              <DropDown
                val={selectedClass}
                setVal={setSelectedClass}
                describe="반"
                items={classOptions}
                width="90px"
              />
              <Search
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                onSearch={handleSearch}
              />
            </S.ControlsWrapper>
          </S.TableTopBar>

          <S.StudentTable>
            <S.TableHeaderRow>
              {tableHeaderLabel.map((label, index) => (
                <S.TableHeaderCell key={index}>{label}</S.TableHeaderCell>
              ))}
            </S.TableHeaderRow>
            {
              hasStudentData ? (
                <S.TableBody>
                  <S.StudentRow>
                    <S.StudentDataGroup>
                      <S.HighlightedText>1</S.HighlightedText>
                      <S.Text>3</S.Text>
                      <S.Text>1</S.Text>
                      <S.Text>14</S.Text>
                      <S.Text>임다영</S.Text>
                      <S.HighlightedText>재학중</S.HighlightedText>
                    </S.StudentDataGroup>

                    <div style={{ position: "relative" }} ref={modalRef}>
                      <Dots size={20} color={Color.gray300} onClick={handleDotsClick} />
                      {isModalOpen && (
                        <EditDeleteModal
                          onEdit={handleEdit}
                          onDelete={handleDelete}
                        />
                      )}
                    </div>
                  </S.StudentRow>
                </S.TableBody>
              ) : (
                <NoPage />
              )
            }

          </S.StudentTable>

        </S.StudentTableSection>

        <S.AddDocumentButton>
          <Writer size={16} color={Color.white} />
          <S.AddDocumentText>학생 문서 추가</S.AddDocumentText>
        </S.AddDocumentButton>
      </S.Content>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </S.ManagerContainer >
  )
}

export default StudentManager;