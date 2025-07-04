import ProjectImg from "../../assets/Project.svg";
import * as S from "./style"
import Font from "../../styles/Font";

export const ProjectAward = () => {
  return (
    <>
      <S.Container>
        <img src={ProjectImg} alt="" />
        <div>
          <div>
            <p>프로젝트명</p>
            <p>
              대회 머시기한 이유로 만들어졌습니다. 대회 머시기한 이유로
              만들어졌습니다. 대회 머시기한 이유로 만들어졌습니다.
            </p>
          </div>
          <div>
            
          </div>
          <div>
            <button>시상하기</button>
          </div>
        </div>
      </S.Container>
    </>
  );
};

