import styled from "@emotion/styled";
import { Color, Font } from "../../styles";

interface EditDeleteModalProps {
  onEdit: () => void;
  onDelete: () => void;
  onStateChange?: () => void;
}

export const EditDeleteModal = ({ onEdit, onDelete, onStateChange }: EditDeleteModalProps) => {
  return (
    <ModalContainer>
      <OptionButton onClick={onEdit}>
        <OptionText>수정하기</OptionText>
      </OptionButton>
      <Divider />
      <OptionButton onClick={onStateChange}>
        <OptionText>진행상태 변경</OptionText>
      </OptionButton>
      <Divider />
      <OptionButton onClick={onDelete}>
        <OptionText>삭제하기</OptionText>
      </OptionButton>
    </ModalContainer>
  )
}

const ModalContainer = styled.div`
  position: absolute;
  top: 24px;
  right: 30px;
  width: 150px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  border: 1px solid ${Color.gray100};
  background-color: ${Color.white};
`

const OptionButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 32px;
  background-color: ${Color.blue500}
  width: 100%
  height: 100%

  &:hover {
    background-color: ${Color.gray100};
  }
`

const OptionText = styled.p`
  ${Font.medium14}
  color: ${Color.gray500};
`

const Divider = styled.div`
  height: 1px;
  background-color: ${Color.gray200};
`