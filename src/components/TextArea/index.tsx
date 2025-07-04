import styled from "@emotion/styled";
import { useState } from "react";
import Color from "../../styles/Color";
import Font from "../../styles/Font";


const MAX_LENGTH = 100;

interface PropsType {
  value: string,
  placeholder: string,
  height?: string,
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea = ({
  value,
  placeholder = "",
  height = "100px",
  onChange
}: PropsType) => {
  const isError = value.length > MAX_LENGTH;

  return (
    <Wrapper>
      <TextareaBox isError={isError}>
        <StyledTextArea
          placeholder={placeholder}
          value={value}
          height={height}
          onChange={onChange}
        />
        <CharCount isError={isError}>
          {`${value.length} / ${MAX_LENGTH}`}
        </CharCount>
      </TextareaBox>
    </Wrapper>
  );
};

export default TextArea;

interface ErrorProps {
  isError?: boolean;
}

const Wrapper = styled.div`
  flex: 1;
`;

const TextareaBox = styled.div<ErrorProps>`
  position: relative;
  border: 1px solid ${({ isError }) => (isError ? Color.red400 : Color.gray300)};
  border-radius: 8px;
  overflow: hidden;

  &:focus-within {
    border: 1px solid
      ${({ isError }) => (isError ? Color.red400 : Color.gray400)};
  }
`;

const StyledTextArea = styled.textarea<{
  height?: string
}>`
  width: 100%;
  height: ${({ height }) => height};
  padding: 12px 20px;
  resize: none;
  border: none;
  outline: none;
  ${Font.regular14}
  box-sizing: border-box;
`;

const CharCount = styled.p<ErrorProps>`
  position: absolute;
  bottom: 8px;
  right: 12px;
  color: ${({ isError }) => (isError ? Color.red400 : Color.gray300)};
  ${Font.medium12}
`;
