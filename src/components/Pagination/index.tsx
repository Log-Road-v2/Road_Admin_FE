import styled from "@emotion/styled";
import { Color, Font } from "../../styles";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  return (
    <PaginationWrapper>
      {Array.from({ length: totalPages }, (_, index) => (
        <PageButton
          key={index + 1}
          onClick={() => onPageChange(index + 1)}
          isActive={currentPage === index + 1}
        >
          {index + 1}
        </PageButton>
      ))}
    </PaginationWrapper>
  );
};

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin: 32px 0;
`;

const PageButton = styled.button<{ isActive: boolean }>`
  padding: 8px 14px;
  border: none;
  border-radius: 6px;
  ${Font.medium16};
  background-color: ${({ isActive }) =>
    isActive ? Color.blue800 : Color.white};
  color: ${({ isActive }) => (isActive ? Color.gray200 : Color.gray600)};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${Color.gray200};
    color: ${Color.gray600};
  }
`;
