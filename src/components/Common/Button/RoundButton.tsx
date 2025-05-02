import styled from "@emotion/styled"
import Font from "../../../styles/Font"
import Color from "../../../styles/Color"

interface PropsType {
  text?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: "default" | "full";
}

const RoundButton = ({ text, onClick, variant = "default" }: PropsType) => {
  return (
    <Button onClick={onClick} variant={variant}>
      {text}
    </Button>
  );
};

const Button = styled.button<{ variant: "default" | "full" }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 36px;
  border-radius: 20px;
  border: none;
  background-color: ${Color.gray800};
  color: ${Color.white};
  ${Font.semi14};
  width: ${({ variant }) => (variant === "full" ? "100%" : "auto")};
`;

export default RoundButton;
