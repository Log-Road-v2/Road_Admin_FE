import styled from "@emotion/styled";
import useCalendarContext from "./useCalendarContext";
import { Arrow } from "../../assets/Arrow";
import Color from "../../styles/Color";
import Font from "../../styles/Font";

const CalendarHeader = () => {
  const { dispatch, currentDate } = useCalendarContext();

  return (
    <Container>
      <span onClick={dispatch.handlePrevMonth}>
        <Arrow color={Color.gray500} rotate="left" />
      </span>
      <YearMonth>{`${currentDate.year}년 ${currentDate.month}월`}</YearMonth>
      <span onClick={dispatch.handleNextMonth}>
        <Arrow color={Color.gray500} rotate="right" />
      </span>
    </Container>
  );
};

export default CalendarHeader;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
`;

const YearMonth = styled.p`
  ${Font.semi16}
`