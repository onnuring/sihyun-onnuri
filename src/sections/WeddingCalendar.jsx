import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { differenceInCalendarDays, isSameDay } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import Title from "../components/Title";
import { heart } from "../assets/images";
import { WEDDING_DATE } from "../constants/customInfo";
import { heartbeat } from "../components/Loading";

const WeddingCalendar = () => {
  const [ddayMessage, setDdayMessage] = useState("");

  useEffect(() => {
    const today = new Date();
    const diffDays = differenceInCalendarDays(WEDDING_DATE, today);

    const Heart = (
      <img
        src={heart}
        alt="heart icon"
        style={{
          width: "18px",
          display: "inline-block",
          margin: "0 4px",
        }}
      />
    );

    if (diffDays > 0) {
      setDdayMessage(
        <>
          시현{Heart}누리의 결혼식이 <span>{diffDays}일</span> 남았습니다.
        </>
      );
    } else if (diffDays === 0) {
      setDdayMessage(<>오늘은 시현{Heart}누리의 결혼식 날입니다!</>);
    } else {
      setDdayMessage(
        <>
          시현{Heart}누리의 결혼식이 <span>{Math.abs(diffDays)}일</span>{" "}
          지났습니다.
        </>
      );
    }
  }, []);

  const modifiers = {
    wedding: (date) => isSameDay(date, WEDDING_DATE),
    sunday: (date) => date.getDay() === 0,
  };

  const modifiersClassNames = {
    wedding: "highlight",
    sunday: "sunday",
  };

  return (
    <CalendarWrapper>
      <Title textAlign="left">
        낮 12시,
        <br /> 7월의 열아홉번째 날
      </Title>
      <StyledDayPicker
        mode="single"
        selected={undefined}
        defaultMonth={new Date(2025, 6)} // 7월
        fromMonth={new Date(2025, 6)}
        toMonth={new Date(2025, 6)}
        showOutsideDays={false}
        captionLayout="none" // 헤더 제거
        modifiers={modifiers}
        modifiersClassNames={modifiersClassNames}
      />
      <Dday>{ddayMessage}</Dday>
    </CalendarWrapper>
  );
};

export default WeddingCalendar;

const CalendarWrapper = styled.section`
  width: 100vw;
  max-width: 480px;
  padding: 70px 20px;
  margin: 0 auto;
`;

const StyledDayPicker = styled(DayPicker)`
  //rdp-root
  width: 100%;
  border-top: 1px solid #ae360e;
  border-bottom: 1px solid #ae360e;
  padding: 10px 0;
  margin-top: 20px;
  font-family: monospace;
  --rdp-day_button-width: 100%;
  --rdp-selected-border: none;

  .rdp-month_grid {
    width: 100%;
    table-layout: fixed; /* 셀 폭 균등 분배 */
  }
  .rdp-selected {
    font-size: unset;
    font-weight: unset;
  }
  .rdp-weekday:first-child {
    color: #ae360e;
  }
  .rdp-day {
    pointer-events: none;
  }

  .highlight {
    background-image: url(${heart});
    background-size: 80%;
    background-repeat: no-repeat;
    background-position: center;
    color: white;
    pointer-events: unset;
    font-weight: 600;
    transition: transform 0.3s ease;
    pointer-events: auto;
  }
  .rdp-selected {
    animation: ${heartbeat} 0.6s infinite;
  }
  .sunday {
    color: #ae360e;
  }

  .rdp-caption,
  .rdp-nav,
  .rdp-month_caption {
    display: none; /* 헤더 숨김 */
  }
`;

const Dday = styled.div`
  margin-top: 20px;
  font-size: 16px;
  font-weight: 300;
  font-family: "basicFont";
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  span {
    font-weight: 700;
    margin: 0 5px;
  }
`;
