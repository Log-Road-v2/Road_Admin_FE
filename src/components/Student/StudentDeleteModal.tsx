import Modal from "../Modal";
import styled from "@emotion/styled";
import { Student } from "../../apis/student/interface";
import { useState } from "react";

interface StudentDeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  student: Student;
  onDelete: () => Promise<void>;
}

const StudentDeleteModal = ({ isOpen, onClose, student, onDelete }: StudentDeleteModalProps) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDelete = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await onDelete();
      onClose();
    } catch (err) {
      setError("삭제에 실패했습니다.");
    }
    setLoading(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="학생 정보를 삭제하시겠습니까?"
      subTitle={`${student.name} 학생을 선택하였습니다.`}
      text={undefined}
    >
      <FormContainer onSubmit={handleDelete}>
        {/* 삭제 버튼은 항상 검은색, 로딩 중에는 비활성화 */}
        <DeleteButton type="submit" disabled={loading}>
          {loading ? "삭제 중..." : "삭제하기"}
        </DeleteButton>
        {error && <ErrorMsg>{error}</ErrorMsg>}
      </FormContainer>
    </Modal>
  );
};

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
`;

const DeleteButton = styled.button`
  width: 100%;
  padding: 14px 0;
  background: #222;
  color: #fff;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 500;
  margin-top: 16px;
  cursor: pointer;
  &:disabled {
    background: #E0E0E0;
    color: #aaa;
    cursor: not-allowed;
  }
`;

const ErrorMsg = styled.div`
  color: red;
  margin-top: 8px;
  text-align: center;
`;

export default StudentDeleteModal; 