import * as S from "./style";

interface PropsType {
  text?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const ConfirmRoundButton = ({ text, onClick }: PropsType) => {
  return (
    <>
      <S.Btn onClick={onClick}>{text}</S.Btn>;
    </>
  );
};
