import styled from "@emotion/styled";
import { Font, Color } from "../../styles";

export const ManagerContainer = styled.div`
  width: 1180px;
  display: flex;
  flex-direction: column;
  gap: 36px;
  padding: 120px 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 54px;
`

export const ManagerHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ManagerTitle = styled.h1`
  ${Font.medium32}
`;

export const ManagerDescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ManagerText = styled.p`
  ${Font.medium14}
  color: ${Color.gray300};
`;

export const ContestTableSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const TableTopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-top: 2px solid ${Color.gray500};
  border-bottom: 1px solid ${Color.gray200};
`;

export const TotalCountText = styled.span`
  ${Font.medium14}
  color: ${Color.gray500};
`;

export const ControlsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const ContestTable = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const TableHeaderRow = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 54px;
  border-radius: 4px;
  background-color: ${Color.blue800};
`;

export const StatusHeaderCell = styled.div`
  width: 160px;
  ${Font.medium14}
  color: ${Color.white};
`;

export const ScheduleHeaderCell = styled.div`
  width: 520px;
  ${Font.medium14}
  color: ${Color.white};
`;

export const ContestHeaderCell = styled.div`
  width: 100%;
  ${Font.medium14}
  color: ${Color.white};
`;

export const TableBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ContestRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 54px 16px;
  border-bottom: 1px solid ${Color.gray200};
`;

export const ContestDataGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const HighlightedText = styled.span`
  width: 160px;
  ${Font.regular14}
  color: ${Color.blue300};
`;

export const ScheduleText = styled.span`
  width: 520px;
  ${Font.regular14}
  color: ${Color.gray400};
`;

export const ContestNameText = styled.span`
  width: 100%;
  ${Font.regular14}
  color: ${Color.gray400};
`;
