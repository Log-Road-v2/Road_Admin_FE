import * as S from "./style";
import Information from "./Information";
import WriteImage from "../../assets/Png/rally.png";
import SubmitButton from "../../components/button/SubmitButton";
import { useWriteStore } from "../../stores/useWriteStore";
import { getContestDetail, updateContest } from "../../apis/Contest";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const ContestEdit = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { info, setInfo } = useWriteStore();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 쿼리스트링에서 contestId 추출
  const searchParams = new URLSearchParams(location.search);
  const contestId = searchParams.get("contestId");

  // 데이터 불러오기
  useEffect(() => {
    if (!contestId) return;
    setLoading(true);
    getContestDetail(Number(contestId))
      .then(data => {
        setInfo({
          contestId: data.id,
          projectName: data.name,
          startDate: data.startDate,
          endDate: data.endDate,
          introduction: data.purpose,
          awards: data.awards.map(a => ({ name: a.name, awardCount: 1 })), // awardCount는 1로 기본 세팅(실제 데이터에 맞게 수정 필요)
        });
        setLoading(false);
      })
      .catch(err => {
        setError("대회 정보를 불러오지 못했습니다.");
        setLoading(false);
      });
  }, [contestId, setInfo]);

  const handleSaveDraft = () => { };

  const handleUpload = async () => {
    if (!(window as any).validateRallyForm || !(window as any).validateRallyForm()) {
      return;
    }
    if (!contestId) return;
    try {
      const payload = {
        name: info.projectName,
        startDate: new Date(info.startDate!).toISOString(),
        endDate: new Date(info.endDate!).toISOString(),
        purpose: info.introduction,
        awards: info.awards,
      };
      await updateContest(Number(contestId), payload);
      console.log("대회가 성공적으로 수정되었습니다!");
      navigate(`/contestlist`);
    } catch (err) {
      setError("대회 수정 중 오류가 발생했습니다.");
      console.error("대회 수정 중 오류가 발생했습니다:", err);
    }
  };

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <S.Container>
        <S.ImageWrapper src={WriteImage} />
        <S.InfoWrapper>
          <S.Title>진행할 대회를 수정해주세요</S.Title>
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
          <SubmitButton text="수정하기" onClick={handleUpload} />
        </S.ButtonWrapper>
      </S.Container>
    </>
  );
};

export default ContestEdit;
