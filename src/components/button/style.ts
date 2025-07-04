import styled from "@emotion/styled";
import Color from "../../styles/Color";
import Font from "../../styles/Font";

export const Btn = styled.button`
  display: inline;
  justify-content: center;
  align-items: center;
  padding: 12px 36px;
  border: none;
  border-radius: 20px;
  color: ${Color.white};
  background-color: ${Color.gray800};
  ${Font.semi14};
`