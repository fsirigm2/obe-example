import React, { FC } from "react";

interface Props {
  dayOfMonth: number;
  date?: Date | undefined;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const DatePickerCustomDay: FC<Props> = ({ dayOfMonth, date }) => {
  return <span className="react-datepicker__day_span">{dayOfMonth}</span>;
};

export default DatePickerCustomDay;
