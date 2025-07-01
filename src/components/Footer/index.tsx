import styled from "@emotion/styled"
import { SiteInfo } from "../Data/LayoutData"
import { Color, Font } from "../../styles"

const Footer = () => {
  return (
    <Container>
      <DeskTopContainer width={58}>
        <Title>Road</Title>
        {SiteInfo.map((info) => (
          <Details key={info.id}>{info.content}</Details>
        ))
        }
      </DeskTopContainer>
    </Container>
  )
}

const Container = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 52px 0;
  background-color: ${Color.blue900};
`

const DeskTopContainer = styled.div<{
  width?: number
}>`
  width: ${({ width }) => (width ? width : '10')}vw;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Title = styled.p`
  color: ${Color.gray300};
  ${Font.medium20}
`

const Details = styled.p`
  color: ${Color.gray300};
  ${Font.medium14}
`

export default Footer