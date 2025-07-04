import styled from "@emotion/styled";
import Color from "../../styles/Color";
import Font from "../../styles/Font";

export const Container = styled.div`
  width: 980px;
  display: flex;
  flex-direction: column;
  gap: 36px;
  padding: 64px 0;
`;

export const ImageWrapper = styled.img`
  position: relative;
  width: 100vw;
  left: 50%;
  transform: translateX(-50%); 
  overflow: hidden;
`;


export const TabWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: ${Color.gray100};
`;

export const Tab = styled.div<{
  isSelect: boolean;
}>`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 16px;
  border-radius: 8px;
  border: ${({ isSelect }) =>
    isSelect ? `1px solid ${Color.blue300}` : "none"};
  background-color: ${({ isSelect }) =>
    isSelect ? Color.white : Color.gray100};
  color: ${({ isSelect }) => (isSelect ? Color.blue500 : Color.gray500)};
  ${Font.medium14}
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Title = styled.h1`
  ${Font.medium24}
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Description = styled.p`
  color: ${Color.gray300};
  ${Font.medium14}
`;

export const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  gap: 12px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
`;

export const Tag = styled.div<{
  selected?: boolean;
}>`
  display: flex;
  justify-content: center;
  padding: 12px 24px;
  border-radius: 8px;
  border: 1px solid
    ${({ selected }) => (selected ? Color.blue300 : Color.gray300)};
  color: ${({ selected }) => (selected ? Color.blue300 : Color.gray400)};
  ${Font.regular14}
`;

export const InformationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Line = styled.hr`
  width: 100%;
  height: 2px;
  background-color: ${Color.gray300};
`;

export const InfoSection = styled.div`
  display: flex;
  padding: 16px 16px 24px 16px;
  border-bottom: 1px solid ${Color.gray300};
`;

export const TextBox = styled.div`
  width: 200px;
  display: flex;
  gap: 4px;
`;

export const SectionDetailText = styled.p`
  ${Font.medium14}
`;

export const Required = styled.p`
  color: ${Color.red300};
  ${Font.semi16}
`;

export const OverviewSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const TitleWrapper = styled.div`
  padding: 24px 0;
  border-top: 1px solid ${Color.gray200};
  border-bottom: 1px solid ${Color.gray200};
`;

export const ProjectInfo = styled.p`
  color: ${Color.gray400};
  ${Font.subContent}
`;

export const PreviewImage = styled.img`
  width: 100%;
  height: 340px;
  background-color: ${Color.gray200};
`;

export const MetaInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 36px 32px;
  gap: 32px;
  border-radius: 12px;
  box-shadow: 0 0 32px 12px rgba(27, 116, 198, 0.1);
`;

export const MetaItem = styled.div`
  display: flex;
`;

export const MetaTitle = styled.p`
  width: 160px;
  ${Font.medium14}
`;

export const MetaText = styled.p`
  color: ${Color.gray500};
  ${Font.regular14}
`;

export const TeamList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

export const TechStackList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export const ProjectDetails = styled.div``;

export const VideoSection = styled.video`
  width: 100%;
  height: 370px;
  background-color: ${Color.gray300};
`;

export const Content = styled.div`
  width: 100%;
`;

export const ViewTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${Font.medium14}
`
