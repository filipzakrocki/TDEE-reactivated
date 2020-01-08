import React from "react";
import "./WeekRow.scss";

import WeekRowWrapper from "../../../components/ResultRows/WeekRowWrapper/WeekRowWrapper";

const WeekRow = props => {
  const { weekNo, startDate } = props;

  const generateDate = (date, weeksToAdd) => {
    let startDate, days, months, years, daysToAdd, outputDate, formattedDate;

    startDate = new Date(date);
    days = startDate.getDate();
    months = startDate.getMonth();
    years = startDate.getYear() + 1900;
    daysToAdd = weeksToAdd * 7 - 7;

    outputDate = new Date(years, months, days + daysToAdd);
    formattedDate = outputDate.toDateString().slice(3);

    return formattedDate;
  };

  return (
    <WeekRowWrapper>
      <div className="weekRow-entry">
        <p>Week {weekNo}</p>
        <p>{generateDate(startDate, weekNo)}</p>
      </div>
      <div className="weekRow-entry noMobile">
        <p>kg</p>
        <p>kcal</p>
      </div>
      <div className="weekRow-entry">
        <input></input>
        <input></input>
      </div>
      <div className="weekRow-entry">
        <input></input>
        <input></input>
      </div>
      <div className="weekRow-entry">
        <input></input>
        <input></input>
      </div>
      <div className="weekRow-entry">
        <input></input>
        <input></input>
      </div>
      <div className="weekRow-entry">
        <input></input>
        <input></input>
      </div>
      <div className="weekRow-entry">
        <input></input>
        <input></input>
      </div>
      <div className="weekRow-entry">
        <input></input>
        <input></input>
      </div>

      <div className="weekRow-entry noMobile">
        <p>kg</p>
        <p>kcal</p>
      </div>
      <div className="weekRow-entry noMobile"> ∆</div>
      <div className="weekRow-entry"> WEEK TDEE</div>
    </WeekRowWrapper>
  );
};

export default WeekRow;
