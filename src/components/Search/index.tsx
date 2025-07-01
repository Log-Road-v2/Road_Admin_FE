import styled from "@emotion/styled";
import { Search as SearchIcon } from "../../assets";
import { Color, Font } from "../../styles"

interface PropsType {
  value?: string,
  placeholder?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch?: () => void;
}

const Search = ({
  value,
  placeholder = "검색어를 입력해주세요",
  onChange,
  onSearch
}: PropsType) => {

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && onSearch) {
      onSearch();
    }
  };

  return (
    <Container>
      <SearchBox
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onKeyDown={handleKeyDown}
      />
      <Button onClick={onSearch}>
        <SearchIcon color={Color.white} />
      </Button>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  width: 420px;
`

const SearchBox = styled.input`
  width: 100%;
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid ${Color.gray300};
  overflow: hidden;

  ${Font.regular14}
`

const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  background-color: ${Color.gray800};
  cursor: pointer;

  &:hover {
    background-color: ${Color.gray700};
  }

`

export default Search