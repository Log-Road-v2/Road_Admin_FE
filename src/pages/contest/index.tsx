import * as S from "./style";
import Information from "./Information";
import WriteImage from "../../assets/Png/rally.png";
import SubmitButton from "../../components/button/SubmitButton";
import { useWriteStore } from "../../stores/useWriteStore";
import { createContest } from "../../apis/Contest";
import { useNavigate } from "react-router-dom";

const Contest = () => {

  const navigate = useNavigate();
  const { info } = useWriteStore();

  const handleSaveDraft = () => { }

  const handleUpload = async () => {
    if (!(window as any).validateRallyForm || !(window as any).validateRallyForm()) {
      return;
    }

    try {
      const payload = {
        name: info.projectName,
        startDate: new Date(info.startDate!).toISOString(),
        endDate: new Date(info.endDate!).toISOString(),
        purpose: info.introduction,
        awards: info.awards
      };
      
      await createContest(payload);
      console.log("대회가 성공적으로 등록되었습니다!");
      // 성공 후 처리 (예: 페이지 이동, 상태 초기화 등)
      navigate(`/contestlist`)

    } catch(err) {
      console.error("대회 등록 중 오류가 발생했습니다:", err);
    }
  }

  return (
    <>
      <S.Container>
      <S.ImageWrapper src={WriteImage} />
        <S.InfoWrapper>
          <S.Title>진행할 대회를 등록해주세요</S.Title>
          <S.DescriptionWrapper>
            <S.Description>대회를 업로드하면 모든 유저들이 확인할 수 있습니다</S.Description>
            <S.Description>대회 개최에 필요한 대회명, 대회일정, 대회목적, 상 등을 작성해주세요!!</S.Description>
          </S.DescriptionWrapper>
        </S.InfoWrapper>
  
        <S.ContentWrapper>
          <Information onSubmit={handleUpload} />
        </S.ContentWrapper>
  
        <S.ButtonWrapper>
          <SubmitButton text="뒤로가기" disabled={true} onClick={handleSaveDraft} />
          <SubmitButton text="등록하기" onClick={handleUpload} />
        </S.ButtonWrapper>
      </S.Container>
    </>
  )
  
}

export default Contest;
