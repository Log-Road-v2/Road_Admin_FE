import * as S from "./style";
import Input from "../../../components/Input";
import DropDown from "../../../components/DropDown";
// import { Button } from "../../../components/Common/Button";
import { useState } from "react";
import { useWriteStore } from "../../../stores/useWriteStore";
import { AwardTag } from "../../../components/Tag/AwardTag";

const AwardInput = () => {
  const { info, setInfo } = useWriteStore();
  const [awardName, setAwardName] = useState("");
  const [awardCount, setAwardCount] = useState<number | null>(null);

  const handleAddAward = () => {
    if (!awardName.trim() || awardCount === null) return;

    const isDuplicate = info.awards.some(
      (award) =>
        award.name === awardName.trim() && award.awardCount === awardCount
    );
    if (isDuplicate) return;

    setInfo({
      awards: [...info.awards, { name: awardName, awardCount: awardCount }],
    });
    setAwardName("");
    setAwardCount(null);
  };

  return (
    <S.Container>
      <S.AwardRow>
        <Input
          width="320px"
          value={awardName}
          placeholder="수상명을 입력해주세요"
          error=""
          onChange={(e) => setAwardName(e.target.value)}
        />
        <DropDown
          width="330px"
          val={awardCount}
          setVal={(val) => setAwardCount(val)}
          items={[1, 2, 3]}
          describe="개수를 선택해주세요"
        />
        <S.AddButton onClick={handleAddAward}>+</S.AddButton>
      </S.AwardRow>

      <S.TagWrapper>
        {info.awards.map((award, idx) => (
          <AwardTag
            key={idx}
            text={`${award.name} (${award.awardCount}개)`}
            onClose={() =>
              setInfo({ awards: info.awards.filter((a) => !(a.name === award.name && a.awardCount === award.awardCount)) })
            }
          />
        ))}
      </S.TagWrapper>
    </S.Container>
  );
};

export default AwardInput;
