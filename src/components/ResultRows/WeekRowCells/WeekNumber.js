import React from "react";
import "./WeekNumber.scss";

const WeekNumber = props => {
  let { weekNo, startDate } = props;

  return (
    <div className="WeekNumber">
      <p>Week {weekNo}</p>
      <p>{startDate}</p>
    </div>
  );
};

export default WeekNumber;
