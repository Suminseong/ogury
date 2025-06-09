import Calendar from "react-calendar";
import { useState } from "react";
import styled from "styled-components";

import BaseBottomSheet from "./BaseBottomSheet";

const StyledCalendar = styled(Calendar)`
  width: 100%;
  border: none;
  font-family: Pretendard;

  /* 상단 네비게이션 */
  .react-calendar__navigation {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    margin: 16px 0;
  }

  .react-calendar__navigation__label {
    pointer-events: none;
    cursor: default;
  }

  .react-calendar__navigation button {
    flex-grow: 0 !important;
    flex-shrink: 0;
    flex-basis: auto;
    padding: 0;
    margin: 0;
    background: none;
    border: none;

    cursor: pointer;
  }
  .react-calendar__navigation button:nth-child(2) span {
    color: var(--GRAY-GRAY600, #232428);
    color: var(--GRAY-GRAY600, #232428);
    font-size: 18px;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: -0.45px;
  }
  /* 요일 영역 */
  .react-calendar__month-view__weekdays {
    color: var(--GRAY-GRAY400, #66686e);
    text-align: center;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: -0.3px;
    display: grid !important;
    grid-template-columns: repeat(7, 1fr);
    justify-items: center;
    row-gap: 8px;
    column-gap: 8px;
    margin-bottom: 16px;
  }

  .react-calendar__month-view__weekdays__weekday {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 32px;
  }

  .react-calendar__month-view__weekdays__weekday abbr {
    text-decoration: none;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* 날짜 기본 타일 */
  .react-calendar__tile {
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 999px;
    border: none;
    background: none;
    font-size: 14px;
    font-weight: 500;
    color: #232428;
    cursor: pointer;
  }
  .react-calendar__tile abbr {
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  /* 날짜 감싸는 전체 영역 */
  .react-calendar__month-view__days {
    display: grid !important;
    grid-template-columns: repeat(7, 1fr);
    justify-items: center;
    row-gap: 8px;
    column-gap: 8px;
  }

  /* 지난달/다음달 날짜 */
  .react-calendar__month-view__days__day--neighboringMonth {
    color: #c0c0c0;
  }

  /* 오늘 날짜 */
  .react-calendar__tile--now {
    border-radius: 1000px;
    border: 1px solid var(--BLUE-BLUE01, #4284ff);
    background: var(--BLUE-BLUE03, #f3f7ff);
    color: var(--BLUE-BLUE01, #4284ff);
    text-align: center;
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: -0.28px;
  }

  /* 선택된 날짜 */
  .react-calendar__tile--active {
    border-radius: 1000px;
    border: 1px solid var(--BLUE-BLUE01, #4284ff);
    background: var(--BLUE-BLUE01, #4284ff);
    color: #fff;
    text-align: center;
    font-size: 14px;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: -0.35px;
  }
`;

const ArrowWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;

  &:hover {
    background-color: #f4f5f7;
  }

  & > img {
    width: 20px;
    height: 20px;
  }
`;

const CTAButton = styled.button`
  width: 100%;
  height: 48px;
  margin-top: 24px;
  border: none;
  border-radius: 8px;
  background: #4285f4;
  color: white;
  font-size: 16px;
  font-weight: 600;
  font-family: Pretendard;
  letter-spacing: -0.4px;
  cursor: pointer;
`;

function CalendarBottomSheet({ onSelectDate, onClose }) {
  const [value, setValue] = useState(new Date());

  return (
    <BaseBottomSheet onClose={onClose}>
      <StyledCalendar
        value={value}
        onChange={(date) => setValue(date)}
        locale="ko-KR"
        formatMonthYear={(locale, date) =>
          `${date.getFullYear()}년 ${date.getMonth() + 1}월`
        }
        formatDay={(locale, date) => String(date.getDate())}
        nextLabel={
          <ArrowWrapper>
            <img src="/arrow-right.svg" alt="다음 달" />
          </ArrowWrapper>
        }
        prevLabel={
          <ArrowWrapper>
            <img src="/arrow-left.svg" alt="이전 달" />
          </ArrowWrapper>
        }
        next2Label={null}
        prev2Label={null}
        onClickLabel={(e) => e.preventDefault()}
      />
      <CTAButton onClick={() => onSelectDate(value)}>확인</CTAButton>
    </BaseBottomSheet>
  );
}

export default CalendarBottomSheet;
