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
  // 표시할 페이지 번호 계산 (최대 5개)
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    let end = Math.min(totalPages, start + maxVisible - 1);
    
    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }
    
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <PaginationContainer>
      <PageInfo>
        {currentPage} / {totalPages} 페이지
      </PageInfo>
      <PaginationWrapper>
        {/* 이전 버튼 */}
        <PageButton
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          isActive={false}
        >
          이전
        </PageButton>
        
        {/* 페이지 번호들 */}
        {pageNumbers.map((page) => (
          <PageButton
            key={page}
            onClick={() => onPageChange(page)}
            isActive={currentPage === page}
          >
            {page}
          </PageButton>
        ))}
        
        {/* 다음 버튼 */}
        <PageButton
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          isActive={false}
        >
          다음
        </PageButton>
      </PaginationWrapper>
    </PaginationContainer>
  );
};

const PaginationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 32px 0;
`;

const PageInfo = styled.div`
  ${Font.medium14};
  color: ${Color.gray600};
`;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
`;

const PageButton = styled.button<{ isActive: boolean }>`
  padding: 8px 12px;
  border: 1px solid ${({ isActive }) => isActive ? Color.blue800 : Color.gray300};
  border-radius: 6px;
  ${Font.medium14};
  background-color: ${({ isActive }) =>
    isActive ? Color.blue800 : Color.white};
  color: ${({ isActive }) => (isActive ? Color.white : Color.gray600)};
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.2s;
  opacity: ${({ disabled }) => disabled ? 0.5 : 1};

  &:hover:not(:disabled) {
    background-color: ${({ isActive }) => isActive ? Color.blue800 : Color.gray100};
    border-color: ${({ isActive }) => isActive ? Color.blue800 : Color.gray400};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
