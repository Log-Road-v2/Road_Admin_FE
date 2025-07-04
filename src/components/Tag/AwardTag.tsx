import styled from "@emotion/styled";
import Color from "../../styles/Color";
import Font from "../../styles/Font";

interface PropsType {
  text?: string;
  onClose?: () => void;
}

export const AwardTag = ({ text, onClose }: PropsType) => {
  return (
    <Tag>
      {text}
      {onClose && (
        <CloseButton onClick={onClose}>×</CloseButton>
      )}
    </Tag>
  );
};

const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  padding: 2px 10px;
  border: 1px solid ${Color.blue500};
  border-radius: 20px;
  background-color: ${Color.white};
  color: ${Color.blue500};
  ${Font.medium12}
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: auto;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: ${Color.blue500};
  font-size: 16px;
  margin-left: 8px;
  cursor: pointer;
  line-height: 1;
`;
