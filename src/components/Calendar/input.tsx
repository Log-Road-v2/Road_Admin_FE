import styled from "@emotion/styled";
import { Arrow } from "../../assets/Arrow";
import { useState, useRef, useEffect, useCallback } from "react";
import Calendar from "./index";
import Color from "../../styles/Color";
import Font from "../../styles/Font";

interface PropsType {
  val: string | null;
  setVal: (val: string) => void;
  describe: string;
}

const Input = ({ val, setVal, describe }: PropsType) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const formattedDate = val ?? describe;

  const handleClickOutside = useCallback((e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handleClickOutside]);

  const handleDateSelect = (date: Date) => {
    const formatted = date.toLocaleDateString("sv-SE");
    setVal(formatted);
    setIsOpen(false);
  };

  return (
    <Container ref={ref} onClick={() => setIsOpen(prev => !prev)}>
      <InputWrapper>
        <Describe>{formattedDate}</Describe>
        <Arrow size={20} color={Color.gray300} rotate={isOpen ? undefined : "bottom"} />
      </InputWrapper>

      {isOpen &&
        <CalendarWrapper onClick={(e) => e.stopPropagation()}>
          <Calendar>
            <Calendar.Header />
            <Calendar.Body setVal={handleDateSelect} />
          </Calendar>
        </CalendarWrapper>
      }
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid ${Color.gray300};
  cursor: pointer;
  background-color: ${Color.white};
`

const Describe = styled.p`
  ${Font.regular14}
  color: ${Color.gray500};
`

const CalendarWrapper = styled.div`
  position: absolute;
  top: 52px;
  left: 0;
  width: 100%;
  padding: 16px 0 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 0 32px 12px rgb(27, 116, 198, 0.1);
  z-index: 10;
`

export default Input