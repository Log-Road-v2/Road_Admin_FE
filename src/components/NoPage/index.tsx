import styled from "@emotion/styled";
import { NoPage as NoPageIcon } from "../../assets";
import { Color, Font } from "../../styles";

const NoPage = () => {
  return (
    <Container>
      <NoPageIcon size={64} color={Color.gray600} />
      <Message>찾을 수 없습니다</Message>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  border-bottom: 1px solid ${Color.gray200};
  background-color: ${Color.white};
`

const Message = styled.span`
  ${Font.regular16}
  color: ${Color.gray500};
`

export default NoPage