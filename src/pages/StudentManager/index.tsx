import * as S from "./style"
import DropDown from "../../components/DropDown";
import Search from "../../components/Search";
import { Dots, Writer, Reset } from "../../assets";
import { Pagination } from "../../components/Pagination";
import { Color } from "../../styles";
import { useState, useRef, useEffect } from "react";
import { EditDeleteModal } from "../../components/Manager/EditDeleteModal";
import NoPage from "../../components/NoPage";
import { getStudentList, deleteStudent } from "../../apis/student/index";
import { Student, StudentListResponse } from "../../apis/student/interface";
import StudentEditModal from "../../components/Student/StudentEditModal";
import StudentDeleteModal from "../../components/Student/StudentDeleteModal";

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

  const [openedModalId, setOpenedModalId] = useState<number | null>(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDotsClick = (id: number) => {
    setOpenedModalId(prev => (prev === id ? null : id));
  };

  const handleEdit = (student: Student) => {
    setEditModalOpen(true);
    setSelectedStudent(student);
    setOpenedModalId(null);
  };

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const handleDelete = async (student?: Student) => {
    setOpenedModalId(null);
    if (!student) return;
    setSelectedStudent(student);
    setDeleteModalOpen(true);
  };

  // 실제 삭제 실행 함수
  const handleDeleteConfirm = async () => {
    if (!selectedStudent) return;
    try {
      await deleteStudent(selectedStudent.id);
      setDeleteModalOpen(false);
      setSelectedStudent(null);
      // 새로고침
      setLoading(true);
      getStudentList((currentPage - 1) * pageSize, pageSize)
        .then((data: StudentListResponse) => {
          setStudents(data.students);
          setTotalStudent(data.totalStudent);
          setLoading(false);
        })
        .catch(() => {
          setStudents([]);
          setTotalStudent(0);
          setLoading(false);
        });
    } catch (err) {
      window.alert("삭제에 실패했습니다.");
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    // 파일 업로드 기능은 추후 구현
    e.target.value = "";
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

  const [students, setStudents] = useState<Student[]>([]);
  const [totalStudent, setTotalStudent] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getStudentList((currentPage - 1) * pageSize, pageSize)
      .then((data: StudentListResponse) => {
        setStudents(data.students);
        setTotalStudent(data.totalStudent);
        setLoading(false);
      })
      .catch(() => {
        setStudents([]);
        setTotalStudent(0);
        setLoading(false);
      });
  }, [currentPage, pageSize]);

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
            <S.TotalCountText>전체 {totalStudent}건</S.TotalCountText>

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
              loading ? (
                <div>로딩중...</div>
              ) : students.length > 0 ? (
                <S.TableBody>
                  {students.map((student) => (
                    <S.StudentRow key={student.id}>
                      <S.StudentDataGroup>
                        <S.HighlightedText>{student.generation}</S.HighlightedText>
                        <S.Text>{student.grade ?? '-'}</S.Text>
                        <S.Text>{student.classNumber ?? '-'}</S.Text>
                        <S.Text>{student.studentNumber ?? '-'}</S.Text>
                        <S.Text>{student.name}</S.Text>
                        <S.HighlightedText>{student.state}</S.HighlightedText>
                      </S.StudentDataGroup>
                      <div style={{ position: "relative" }} ref={modalRef}>
                        <Dots size={20} color={Color.gray300} onClick={() => handleDotsClick(student.id)} />
                        {openedModalId === student.id && (
                          <EditDeleteModal
                            onEdit={() => handleEdit(student)}
                            onDelete={() => handleDelete(student)}
                          />
                        )}
                      </div>
                    </S.StudentRow>
                  ))}
                </S.TableBody>
              ) : (
                <NoPage />
              )
            }

          </S.StudentTable>

        </S.StudentTableSection>

        <input
          type="file"
          accept=".xlsx"
          style={{ display: "none" }}
          ref={fileInputRef}
          onChange={handleFileChange}
        />

        <S.AddDocumentButton onClick={() => fileInputRef.current?.click()}>
          <Writer size={16} color={Color.white} />
          <S.AddDocumentText>학생 문서 추가</S.AddDocumentText>
        </S.AddDocumentButton>
      </S.Content>

      {students.length > pageSize && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}

      {selectedStudent && (
        <StudentEditModal
          isOpen={editModalOpen}
          onClose={() => setEditModalOpen(false)}
          student={selectedStudent}
          onSuccess={() => {
            setEditModalOpen(false);
            // 새로고침
            setLoading(true);
            getStudentList((currentPage - 1) * pageSize, pageSize)
              .then((data: StudentListResponse) => {
                setStudents(data.students);
                setTotalStudent(data.totalStudent);
                setLoading(false);
              })
              .catch(() => {
                setStudents([]);
                setTotalStudent(0);
                setLoading(false);
              });
          }}
        />
      )}
      {selectedStudent && (
        <StudentDeleteModal
          isOpen={deleteModalOpen}
          onClose={() => setDeleteModalOpen(false)}
          student={selectedStudent}
          onDelete={handleDeleteConfirm}
        />
      )}
    </S.ManagerContainer >
  )
}

export default StudentManager;