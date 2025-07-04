
import { useState, useEffect, useMemo } from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { Exclamation } from "../../assets/Exclamation"
import Color from "../../styles/Color";
import Font from "../../styles/Font";


const Guide = () => {
  const navigation = useNavigate();
  const [guideData, setGuideData] = useState<{ status: string; contestName?: string; date?: string }>({
    status: "",
    contestName: "",
    date: "",
  });

  useEffect(() => {
    //대회 상태 가져오기
  }, []);

  const { alertText, description, href } = useMemo(() => {
    switch (guideData.status) {
      case "투표중":
        return {
          alertText: "투표하기",
          description: "해당 대회 일정에 맞춰 투표에 참여해주세요!!",
          href: "/vote",
        };
      case "랭킹확인":
        return {
          alertText: "결과 확인하기",
          description: "투표 결과를 확인해주세요",
          href: "/rank",
        };
      default:
        return {
          alertText: "승인하기",
          description: "최근 대회의 프로젝트를 승인해주세요!!",
          href: "/archive",
        };
    }
  }, [guideData.status]);

  return (
    <Container>
      <InfoWrapper>
        <AlertWrapper>
          <ExclamationWrapper>
            <Exclamation size={18} color={Color.white} />
          </ExclamationWrapper>
          <AlertText>{alertText}</AlertText>
        </AlertWrapper>

        <Content>
          <Title>{guideData.contestName || "2024 해커톤 대회"}</Title>
          <Description>{description}</Description>
        </Content>
      </InfoWrapper>

      <AccessButton onClick={() => navigation(href)}>
        {guideData.date || "2024년 4월 27일 ~ 2024년 4월 30일"}
      </AccessButton>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px 32px 24px;
  gap: 24px;
  border-radius: 16px;
  background-color: ${Color.gray800};
`

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const AlertWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const ExclamationWrapper = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: ${Color.gray600};
`

const AlertText = styled.p`
  color: ${Color.gray100};
  ${Font.medium12}
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const Title = styled.p`
  color: ${Color.white};
  ${Font.semi20}
`

const Description = styled.p`
  color: ${Color.gray100};
  ${Font.regular12}
`

const AccessButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${Color.gray600};
  color: ${Color.gray100};
  ${Font.regular12}
`

export default Guide
