import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { CONTEST_STATE } from "../../apis/Contest/interface";

interface ContestStateModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentState: CONTEST_STATE | "";
  onSubmit: (state: CONTEST_STATE) => Promise<void>;
  contestName: string;
  loading?: boolean;
  error?: string | null;
}

const ContestStateModal = ({
  isOpen,
  onClose,
  currentState,
  onSubmit,
  contestName,
  loading = false,
  error = null,
}: ContestStateModalProps) => {
  const [selectedState, setSelectedState] = useState<CONTEST_STATE | "">(currentState);

  useEffect(() => {
    setSelectedState(currentState);
  }, [currentState, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedState) onSubmit(selectedState as CONTEST_STATE);
  };

  if (!isOpen) return null;

  return (
    <Background>
      <ModalBox>
        <h3 style={{ margin: 0, marginBottom: 8 }}>진행상태 변경</h3>
        <div style={{ marginBottom: 16, color: "#888" }}>
          {contestName}의 상태를 변경합니다.
        </div>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <Select
            value={selectedState}
            onChange={e => setSelectedState(e.target.value as CONTEST_STATE)}
            required
          >
            <option value="" disabled>
              상태를 선택하세요
            </option>
            {Object.values(CONTEST_STATE).map(state => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </Select>
          <SubmitButton type="submit" disabled={loading || !selectedState}>
            {loading ? "변경 중..." : "변경하기"}
          </SubmitButton>
          {error && <ErrorMsg>{error}</ErrorMsg>}
        </form>
        <CloseButton onClick={onClose}>닫기</CloseButton>
      </ModalBox>
    </Background>
  );
};

const Background = styled.div`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalBox = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 32px;
  min-width: 320px;
  max-width: 400px;
`;

const Select = styled.select`
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #eee;
  font-size: 16px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 14px 0;
  background: #222;
  color: #fff;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  &:disabled {
    background: #E0E0E0;
    color: #aaa;
    cursor: not-allowed;
  }
`;

const CloseButton = styled.button`
  margin-top: 12px;
  background: none;
  border: none;
  color: #888;
  cursor: pointer;
`;

const ErrorMsg = styled.div`
  color: red;
  text-align: center;
`;

export default ContestStateModal; 