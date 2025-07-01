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

export const StudentTableSection = styled.section`
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

export const StudentTable = styled.div`
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

export const TableHeaderCell = styled.div`
  width: 120px;
  ${Font.medium14}
  color: ${Color.white};
`;

export const TableBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const StudentRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 54px 16px;
`;

export const StudentDataGroup = styled.div`
  display: flex;
  align-items: center;
`;

export const HighlightedText = styled.span`
  width: 160px;
  ${Font.regular14}
  color: ${Color.blue300};
`;

export const Text = styled.span`
  width: 160px;
  ${Font.regular14}
  color: ${Color.gray400};
`;

export const AddDocumentButton = styled.button`
  width: max-content;
  display: flex;
  align-items: center;
  padding: 8px 16px;
  gap: 10px;
  border: none;
  border-radius: 8px;
  background-color: ${Color.gray800};
`;

export const AddDocumentText = styled.span`
  ${Font.medium12}
  color: ${Color.white};
`;
