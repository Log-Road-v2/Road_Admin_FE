import styled from "@emotion/styled";
import Color from "../../styles/Color";
import Font from "../../styles/Font";


interface PropsButtonType {
  text?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const SubmitButton = ({ text, disabled = false, onClick }: PropsButtonType) => {
  return <Button disabled={disabled} onClick={onClick}>{text}</Button>;
};

const Button = styled.button<{
  disabled?: boolean;
}>`
  width: 360px;
  height: 44px;
  padding: 12px 56px;
  border-radius: 8px;
  border: none;
  background-color: ${({ disabled }) =>
    disabled ? Color.gray200 : Color.blue500};
  color: ${({ disabled }) => (disabled ? Color.gray400 : Color.white)};
  ${Font.medium14}
`;

export default SubmitButton;
