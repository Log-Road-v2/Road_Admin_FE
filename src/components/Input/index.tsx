import { useState } from "react";
import styled from "@emotion/styled";
import Color from "../../styles/Color";
import Font from "../../styles/Font";

interface PropsType {
  width?: string;
  value?: string;
  type?: string;
  placeholder?: string;
  label?: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Input = ({
  width = "360px",
  value,
  type = "text",
  placeholder = "입력해주세요",
  label = "",
  error = "에러가 발생하였습니다",
  onChange,
  onKeyDown,
  ...props
}: PropsType) => {
  const [isError, setIsError] = useState<boolean>(false);

  return (
    <InputContainer width={width}>
      {label && <Label>{label}</Label>}
      <InputBox
        isError={isError}
        type={type}
        value={type === "file" ? undefined : value}
        placeholder={placeholder}
        {...props}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />

      {isError && error && <ErrorText>{error}</ErrorText>}
    </InputContainer>
  );
};

const InputContainer = styled.div<{ width?: string }>`
  width: ${({ width }) => width};
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Label = styled.p`
  color: ${Color.gray500};
  ${Font.regular14}
`;

const InputBox = styled.input<{
  isError?: boolean;
}>`
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid ${({ isError }) => (isError ? Color.red400 : Color.gray300)};
  background-color: ${Color.white};
  ${Font.regular14}

  &:focus {
    border: 1px solid ${Color.gray400};
  }

  &[type="file"] {
    color: ${Color.gray700};

    &::file-selector-button {
      display: none;
    }

    &::-webkit-file-upload-button {
      display: none;
    }
  }
`;

const ErrorText = styled.p`
  color: ${Color.red500};
  ${Font.regular14}
`;

export default Input;
