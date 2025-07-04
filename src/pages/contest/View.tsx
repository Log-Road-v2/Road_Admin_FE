import * as S from "./style";
import WriteImage from "../../assets/Png/rally.png";
import SubmitButton from "../../components/button/SubmitButton";
import { useWriteStore } from "../../stores/useWriteStore";
import { useNavigate, useLocation } from "react-router-dom";
import ViewContest from "./ViewContest";

const View = () => {

  const navigate = useNavigate();
  const location = useLocation();
  // 쿼리스트링에서 contestId 추출
  const searchParams = new URLSearchParams(location.search);
  const contestId = searchParams.get("contestId");

  return (
    <>
      <S.Container>
      <S.ImageWrapper src={WriteImage} />
        <S.InfoWrapper>
          <S.Title>진행할 대회를 해주세요</S.Title>
          <S.DescriptionWrapper>
            <S.Description>대회를 업로드하면 모든 유저들이 확인할 수 있습니다</S.Description>
            <S.Description>대회 개최에 필요한 대회명, 대회일정, 대회목적, 상 등을 작성해주세요!!</S.Description>
          </S.DescriptionWrapper>
        </S.InfoWrapper>
  
        <S.ContentWrapper>
          <ViewContest contestId={contestId ? Number(contestId) : undefined} />
        </S.ContentWrapper>
  
        <S.ButtonWrapper>
          <SubmitButton text="뒤로가기" disabled={true} onClick={() => {}} />
        </S.ButtonWrapper>
      </S.Container>
    </>
  )
  
}

export default View;
