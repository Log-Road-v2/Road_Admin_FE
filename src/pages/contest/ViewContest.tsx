import * as S from "./style";
import { useEffect, useState } from "react";
import { getContestDetail } from "../../apis/Contest";
import { ContestDetailResponse } from "../../apis/Contest/interface";
import { AwardTag } from "../../components/Tag/AwardTag";

interface ViewContestProps {
  contestId?: number;
}

const ViewContest = ({ contestId }: ViewContestProps) => {
  const [contest, setContest] = useState<ContestDetailResponse | null>(null);

  useEffect(() => {
    if (!contestId) return;
    getContestDetail(contestId).then(setContest);
  }, [contestId]);

  if (!contest) return <div>Loading...</div>;

  return (
    <S.Container>
      <S.Line />
      <S.ViewTitleBox>
        <S.Title>{contest.name}</S.Title>
        <S.Description>
          {contest.startDate.slice(0, 10)} ~ {contest.endDate.slice(0, 10)}
        </S.Description>
      </S.ViewTitleBox>
      <S.Description>{contest.purpose}</S.Description>
      <S.Line />
      <div style={{ display: 'flex', gap: 8 }}>
        {contest.awards.map((award, idx) => (
          <AwardTag key={idx} text={award.name} />
        ))}
      </div>
    </S.Container>
  );
};

export default ViewContest;