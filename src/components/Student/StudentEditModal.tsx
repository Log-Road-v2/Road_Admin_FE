import Modal from "../Modal";
import styled from "@emotion/styled";
import { useState } from "react";
import { STUDENT_STATE, Student, UpdateStudentRequest } from "../../apis/student/interface";
import { updateStudent } from "../../apis/student/index";

interface StudentEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  student: Student;
  onSuccess?: () => void;
}

const StudentEditModal = ({ isOpen, onClose, student, onSuccess }: StudentEditModalProps) => {
  const [form, setForm] = useState({
    state: student.state,
    generation: student.generation?.toString() ?? '',
    grade: student.grade?.toString() ?? '',
    classNumber: student.classNumber?.toString() ?? '',
    studentNumber: student.studentNumber?.toString() ?? '',
    name: student.name,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  
  const isFormFilled = Object.values(form).every(v => v !== '');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await updateStudent(student.id, {
        state: form.state as STUDENT_STATE,
        generation: form.generation === '' ? 0 : Number(form.generation),
        grade: form.grade === '' ? 0 : Number(form.grade),
        classNumber: form.classNumber === '' ? 0 : Number(form.classNumber),
        studentNumber: form.studentNumber === '' ? 0 : Number(form.studentNumber),
        name: form.name,
      });
      if (onSuccess) onSuccess();
      onClose();
    } catch (err) {
      setError("수정에 실패했습니다.");
    }
    setLoading(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="학생 정보를 수정해주세요"
      subTitle={`${student.name} 정보를 수정하고 있습니다.`}
      text={undefined}
    >
      <FormContainer onSubmit={handleSubmit}>
        <Label>상태</Label>
        <Select name="state" value={form.state} onChange={handleChange} required>
          <option value="" disabled>학생 상태를 선택해주세요</option>
          {Object.values(STUDENT_STATE).map(state => (
            <option key={state} value={state}>{state}</option>
          ))}
        </Select>
        <Label>기수</Label>
        <Input name="generation" type="number" value={form.generation} onChange={handleChange} placeholder="기수를 입력해주세요" required />
        <Label>학년</Label>
        <Input name="grade" type="number" value={form.grade} onChange={handleChange} placeholder="학년을 입력해주세요" required />
        <Label>반</Label>
        <Input name="classNumber" type="number" value={form.classNumber} onChange={handleChange} placeholder="반을 입력해주세요" required />
        <Label>번호</Label>
        <Input name="studentNumber" type="number" value={form.studentNumber} onChange={handleChange} placeholder="번호를 입력해주세요" required />
        <Label>이름</Label>
        <Input name="name" value={form.name} onChange={handleChange} placeholder="이름을 입력해주세요" required />

        <SubmitButton type="submit" disabled={!isFormFilled || loading} $active={isFormFilled && !loading}>
          {loading ? "수정 중..." : "수정하기"}
        </SubmitButton>
        {error && <ErrorMsg>{error}</ErrorMsg>}
      </FormContainer>
    </Modal>
  );
};

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-height: 420px;
  overflow-y: auto;
`;

const Label = styled.label`
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 4px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #E0E0E0;
  border-radius: 8px;
  font-size: 15px;
  margin-bottom: 8px;
`;

const Select = styled.select`
  width: 100%;
  padding: 12px;
  border: 1px solid #E0E0E0;
  border-radius: 8px;
  font-size: 15px;
  margin-bottom: 8px;
  background: #fff;
`;

// 버튼 색상: 활성화(검정), 비활성화(회색)
const SubmitButton = styled.button<{ $active: boolean }>`
  width: 100%;
  padding: 14px 0;
  background: ${({ $active }) => $active ? '#222' : '#EDEDED'};
  color: ${({ $active }) => $active ? '#fff' : '#222'};
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 500;
  margin-top: 16px;
  cursor: ${({ $active }) => $active ? 'pointer' : 'not-allowed'};
`;

const ErrorMsg = styled.div`
  color: red;
  margin-top: 8px;
  text-align: center;
`;

export default StudentEditModal; 