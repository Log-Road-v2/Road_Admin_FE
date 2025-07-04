import styled from "@emotion/styled";
import { Add } from "../../assets";
import Color from "../../styles/Color";
import Font from "../../styles/Font"
import { ShortcutData } from "./Data/data";
import { AccessMessageItemProps } from "./Data/interface";
import { useNavigate } from "react-router-dom";

interface AccessMessageProps {
  data?: typeof ShortcutData
}

const AccessMessage = ({ data = ShortcutData }: AccessMessageProps) => {
  return (
    <MessageList>
      {data.map(({ id, title, href, description, icon, positionX, positionY }) => (
        <AccessMessageItem
          key={id}
          title={title}
          href={href}
          description={description}
          icon={icon}
          positionX={positionX}
          positionY={positionY}
        />
      ))}
    </MessageList>
  )
}

export default AccessMessage

const AccessMessageItem = ({ href, title, description, icon, positionX, positionY }: AccessMessageItemProps) => {
  const navigation = useNavigate();

  return (
    <AccessMessageContainer
      positionX={positionX}
      positionY={positionY}
      onClick={() => navigation(href)}
    >
      <IconWrapper>{icon}</IconWrapper>
      <Content>
        <DirectTitle>{title}</DirectTitle>
        <DirectDescription>{description}</DirectDescription>
      </Content>
      <Line />
      <PlusWrapper>
        <AddText>더보기</AddText>
        <Add size={20} color={Color.gray500} />
      </PlusWrapper>
    </AccessMessageContainer>
  );
};

const MessageList = styled.div`
  position: relative;
  width: 100%;
  min-height: 70vh;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 1023px) {
    flex-direction: column;
    align-items: center;
    height: auto;
  }
`

const AccessMessageContainer = styled.div<{
  positionX: number,
  positionY: number
}>`
  position: absolute;
  top: ${({ positionY }) => `${positionY}%`};
  left: ${({ positionX }) => `${positionX}%`};
  width: 450px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px;
  gap: 16px;
  border-radius: 16px;
  background-color: ${Color.white};
  box-shadow: 0 8px 20px 0 rgba(255, 255, 255, 0.2);

  @media (max-width: 1023px) {
    position: static;
    margin: 0 auto;
    justify-content: center;
  }
`

const IconWrapper = styled.div`
  width: 54px;
  height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background-color: ${Color.gray100};
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const DirectTitle = styled.p`
  ${Font.bold16}
`

const DirectDescription = styled.p`
  white-space: pre;
  color: ${Color.gray400};
  ${Font.medium12}
`

const Line = styled.div`
  width: 1px;
  height: 72px;
  background-color: ${Color.gray200};
`

const PlusWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`

const AddText = styled.p`
  color: ${Color.gray500};
  ${Font.semi12}
`