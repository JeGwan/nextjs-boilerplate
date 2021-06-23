import React, { MouseEventHandler, useState } from "react";
import styled from "styled-components";

import Button, { ButtonProps } from "@app/components/atoms/Button";
import dayjs from "dayjs";
import styles from "@app/styles";

const Wrapper = styled.div`
  border: 1px solid ${styles.colors.grey8};
  & > .header {
    border-bottom: 1px solid ${styles.colors.grey8};
    display: flex;
    align-items: center;
    & > .this-month {
      flex: auto;
      text-align: center;
      line-height: 1;
    }
    & > button {
      border-radius: 0;
      padding: 0;
      width: 40px;
      min-height: 40px;
    }
  }
  & > .dates {
    width: 286px;
    padding: 10px;
    display: flex;
    flex-flow: row wrap;
    & > li {
      &.day,
      & > button {
        &.today {
          border: 1px solid ${styles.colors.primary};
        }
        margin: 4px;
        border-radius: 0;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        min-height: 30px;
      }
    }
  }
  & > .today {
    border-top: 1px solid ${styles.colors.grey8};
    border-radius: 0;
    padding: 0;
    min-height: 40px;
  }
`;

const DateList = ({
  thisMonth,
  today,
  currentDate,
  onChange,
}: {
  thisMonth: dayjs.Dayjs;
  today: dayjs.Dayjs;
  currentDate: dayjs.Dayjs;
  onChange: (value: dayjs.Dayjs) => void;
}) => {
  const todayKey = today.format("YYYY-MM-DD");
  const currentDateKey = currentDate.format("YYYY-MM-DD");

  const startOfDate = thisMonth.subtract(thisMonth.day(), "d");
  const lastOfMonth = thisMonth.endOf("M");
  const lastOfDate = lastOfMonth.add(7 - lastOfMonth.day(), "d");

  const list: JSX.Element[] = [];
  const onDateClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    onChange(dayjs(e.currentTarget.getAttribute("data-format") as string));
  };

  let date = startOfDate;
  while (date.diff(lastOfDate, "d") !== 0) {
    let className = undefined,
      type: ButtonProps["type"] = "transparent";
    const formatted = date.format("YYYY-MM-DD");
    if (formatted === todayKey) className = "today";
    if (formatted === currentDateKey) type = "primary";
    list.push(
      <li key={formatted}>
        <Button
          type={type}
          className={className}
          data-format={formatted}
          onClick={onDateClick}
        >
          {date.date()}
        </Button>
      </li>
    );
    date = date.add(1, "d");
  }
  return (
    <ul className="dates">
      <li className="day">월</li>
      <li className="day">화</li>
      <li className="day">수</li>
      <li className="day">목</li>
      <li className="day">금</li>
      <li className="day">토</li>
      <li className="day">일</li>
      {list}
    </ul>
  );
};

const today = dayjs();
interface CalendarProps {
  value?: dayjs.Dayjs;
  onChange?: (value: dayjs.Dayjs) => void;
}
const Calendar = ({
  value: currentDate = today,
  onChange: setCurrentDate = () => {},
}: CalendarProps) => {
  const [thisMonth, setThisMonth] = useState(currentDate.startOf("month"));
  const prevMonth = () => {
    setThisMonth(thisMonth.add(-1, "M"));
  };
  const nextMonth = () => {
    setThisMonth(thisMonth.add(1, "M"));
  };
  const prevYear = () => {
    setThisMonth(thisMonth.add(-1, "y"));
  };
  const nextYear = () => {
    setThisMonth(thisMonth.add(1, "y"));
  };
  return (
    <Wrapper>
      <div className="header">
        <Button type="transparent" onClick={prevYear}>
          {"<<"}
        </Button>
        <Button type="transparent" onClick={prevMonth}>
          {"<"}
        </Button>
        <span className="this-month">{thisMonth.format("YYYY년 MM일")}</span>
        <Button type="transparent" onClick={nextMonth}>
          {">"}
        </Button>
        <Button type="transparent" onClick={nextYear}>
          {">>"}
        </Button>
      </div>
      <DateList
        thisMonth={thisMonth}
        onChange={setCurrentDate}
        currentDate={currentDate}
        today={today}
      />
      <Button
        type="transparent"
        className="today full"
        onClick={() => setCurrentDate(today)}
      >
        오늘
      </Button>
    </Wrapper>
  );
};

export default Calendar;
