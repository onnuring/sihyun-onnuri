import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import styled from "styled-components";
import Title from "../components/Title";
import { heart } from "../assets/images";
// import SubTitle from "../components/SubTitle";

const WEDDING_DATE = new Date("2025-07-19");
const WeddingCalendar = () => {
  const [ddayMessage, setDdayMessage] = useState("");

  useEffect(() => {
    const today = new Date();
    const diffTime = WEDDING_DATE - today;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const Heart = (
      <img
        src={heart}
        alt="heart icon"
        style={{
          width: "1.5rem",
          display: "inline-block",
          textAlign: "center",
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
          시현{Heart}누리의 결혼식이 <span>{Math.abs(diffDays)}일</span>
          지났습니다.
        </>
      );
    }
  }, []);

  return (
    <CalendarWrapper>
      {/* <SubTitle>wedding day</SubTitle> */}
      <Title>
        낮 12시,
        <br /> 7월의 열아홉번째 날
      </Title>
      <StyledCalendar
        value={WEDDING_DATE}
        calendarType="US"
        tileClassName={({ date }) => {
          const isWeddingDate =
            date.toDateString() === WEDDING_DATE.toDateString();
          const isSunday = date.getDay() === 0;

          if (isWeddingDate) return "highlight";
          if (isSunday) return "sunday";
          return null;
        }}
        tileContent={({ date }) =>
          date.toDateString() === WEDDING_DATE.toDateString() ? (
            <div
              onClick={(e) => {
                const parent = e.currentTarget.closest(".react-calendar__tile");
                if (parent) {
                  parent.classList.remove("animate-heart"); // reset
                  void parent.offsetWidth; // reflow
                  parent.classList.add("animate-heart");
                }
              }}
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 5,
                cursor: "pointer",
              }}
            />
          ) : null
        }
        showNavigation={false}
        activeStartDate={new Date(2025, 6, 1)} // 7월 (Month는 0부터 시작!)
        minDetail="month"
        showNeighboringMonth={false}
        formatDay={(locale, date) => date.getDate()}
      />
      <Dday>{ddayMessage}</Dday>
    </CalendarWrapper>
  );
};

export default WeddingCalendar;

const CalendarWrapper = styled.section`
  width: 100vw;
  max-width: 480px;
  padding: 0 20px;
  margin: 0 auto;
  overflow: hidden;
`;
const StyledCalendar = styled(Calendar)`
  width: 100%;
  max-width: 480px;
  border-top: 1px solid #ae360e;
  border-bottom: 1px solid #ae360e;
  padding: 20px;
  font-family: basicFont;
  margin-top: 20px;

  .react-calendar__month-view__weekdays {
    text-align: center;
    font-weight: 500;
    color: #888;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }

  .react-calendar__tile {
    height: 48px;
    font-size: 0.95rem;
    font-weight: 400;
    border-radius: 8px;
    transition: all 0.2s ease-in-out;
    background: none;
    border: none;
    color: #000;

    -webkit-tap-highlight-color: transparent;
    &:focus,
    &:focus-visible,
    &:active {
      background-color: transparent !important;
      color: inherit;
      outline: none;
      box-shadow: none;
    }
  }

  .react-calendar__tile--active,
  .react-calendar__tile--now {
    color: #fff;
    font-weight: bold;
  }
  .react-calendar__month-view__weekdays__weekday:first-child abbr {
    color: #ae360e;
  }
  .sunday {
    color: #ae360e !important;
  }

  .highlight {
    background-image: url(${heart});
    background-size: cover;
    background-position: center;
    position: relative;
    color: white;
    font-weight: 600;
    transition: transform 0.3s ease;
  }
  .highlight.animate-heart {
    animation: heartbeat 0.6s ease-in-out;
  }
  @keyframes heartbeat {
    0% {
      transform: scale(1);
    }
    25% {
      transform: scale(1.2);
    }
    50% {
      transform: scale(0.9);
    }
    75% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }

  .highlight abbr {
    z-index: 2;
    position: relative;
    color: white;
  }

  abbr {
    text-decoration: none;
  }
`;

const Dday = styled.div`
  margin-top: 20px;
  font-size: 20px;
  font-weight: 300;
  font-family: "basicFont";
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-weight: 700;
    margin: 0 5px;
  }
`;
