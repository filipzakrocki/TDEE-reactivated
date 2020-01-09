import React from "react";
import { connect } from "react-redux";
import "./WeekRow.scss";

import WeekRowWrapper from "../../../components/ResultRows/WeekRowWrapper/WeekRowWrapper";
import DayCell from "./DayCell.js/DayCell";

const WeekRow = props => {
  const { weekNo, startDate, weekData, weekIndex } = props;

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
        <p>{startDate && generateDate(startDate, weekNo)}</p>
      </div>
      <div className="weekRow-entry noMobile">
        <p>kg</p>
        <p>kcal</p>
      </div>
      {weekData &&
        weekData[weekIndex].days.map((day, dayNum) => {
          return (
            <DayCell
              kg={day.kg}
              kcal={day.kcal}
              day={dayNum}
              week={weekIndex}
              key={weekIndex + dayNum}
            />
          );
        })}

      <div className="weekRow-entry noMobile">
        <p>kg</p>
        <p>kcal</p>
      </div>
      <div className="weekRow-entry noMobile">
        <p>∆kg</p>
        <p>∆kcal</p>
      </div>

      <div className="weekRow-entry"> WEEK TDEE</div>
    </WeekRowWrapper>
  );
};

const mapStateToProps = state => {
  return {
    weekData: state.calculator.weekData
  };
};

export default connect(mapStateToProps)(WeekRow);
