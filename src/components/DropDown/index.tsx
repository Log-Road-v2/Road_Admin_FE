import { useState, useRef, useEffect } from "react";
import { Arrow } from "../../assets/Arrow";
import styled from "@emotion/styled";
import Color from "../../styles/Color";
import Font from "../../styles/Font";

interface PropsType<T> {
  val: T | undefined;
  setVal: (val: T) => void;
  describe: string;
  items: T[];
  width?: string;
  label?: string;
}

const DropDown = <T,>({
  val,
  setVal,
  describe,
  items,
  width = "360px",
  label,
}: PropsType<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const clickItem = (item: T) => {
    setVal(item);
    toggleOpen();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <DropDownContainer width={width}>
      {label && <Label>{label}</Label>}

      <DropDownBox onClick={toggleOpen}>
        <Describe>{val ? String(val) : describe}</Describe>

        {isOpen ? (
          <Arrow size={20} color={Color.gray300}  />
        ) : (
          <Arrow size={20} color={Color.gray300} rotate="bottom" />
        )}
      </DropDownBox>
      {isOpen && (
        <DropDownListBox isOpen={isOpen}>
          {items.map((item, index) => (
            <DropDownItem key={index} onClick={() => clickItem(item)}>
              {String(item)}
            </DropDownItem>
          ))}
        </DropDownListBox>
      )}
    </DropDownContainer>
  );
};

export default DropDown;

const DropDownContainer = styled.div<{
  width?: string;
}>`
  position: relative;
  width: ${(props) => props.width};
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Label = styled.p`
  color: ${Color.gray400};
  ${Font.medium14}
`;

const DropDownBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid ${Color.gray300};
  cursor: pointer;
`;

const Describe = styled.p`
  ${Font.regular14}
  color: ${Color.gray500};
`;

const DropDownListBox = styled.div<{
  isOpen?: boolean;
}>`
  position: absolute;
  top: 54px;
  width: 100%;
  max-height: 320px;
  display: flex;
  flex-direction: column;
  padding: 8px 0;
  border-radius: 8px;
  border: 1px solid ${Color.gray300};
  background-color: ${Color.white};
  z-index: 10;
  overflow-y: scroll;
`;

const DropDownItem = styled.div`
  padding: 12px 24px;
  ${Font.medium14}
  color: ${Color.gray500};
  cursor: pointer;

  :hover {
    background-color: ${Color.gray100};
  }
`;
