import styled from "@emotion/styled";
import { Color, Font } from "../../styles";

interface PropsButtonType {
  text?: string;
  disabled?: boolean;
}

const ApproveButton = ({ text, disabled = false }: PropsButtonType) => {
  return <Button disabled={disabled}>{text}</Button>;
};

const Button = styled.button<{
  disabled?: boolean;
}>`
  width: 360px;
  height: 44px;
  padding: 12px 56px;
  border-radius: 8px;
  border: 1px solid ${({ disabled }) => (disabled ? "none" : Color.blue500)};
  background-color: ${({ disabled }) =>
    disabled ? Color.gray200 : Color.white};
  color: ${({ disabled }) => (disabled ? Color.gray400 : Color.blue500)};
  ${Font.semi14}

  &:hover {
    border: 1px solid ${Color.blue500};
    color: ${Color.blue500};
    ${Font.semi14}
    background-color: ${Color.blue100};
  }

  &:focus {
    border: 1px solid ${Color.blue500};
    color: ${Color.blue500};
    ${Font.semi14}
    background-color: ${Color.white};
  }
`;

export default ApproveButton;
