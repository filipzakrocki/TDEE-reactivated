import React from "react";
import { connect } from "react-redux";
import "./WeekRow.scss";

import WeekRowWrapper from "../../../components/ResultRows/WeekRowWrapper/WeekRowWrapper";
import DayCell from "./DayCell.js/DayCell";

//cell components
import WeekNumber from "../../../components/ResultRows/WeekRowCells/WeekNumber";

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
      {/* MAYBE MAYBE MAKE A COMPONENT FOR ALL LABELS?! */}
      <WeekNumber
        weekNo={weekNo}
        startDate={startDate && generateDate(startDate, weekNo)}
      />
      {/* TODO: separate columns into their own components, make them dumb with weekRow as Container and data link */}
      <div className="weekRow-entry noMobile">
        <input value={`kg`} />
        <input value={`kcal`} />
      </div>
      {/* DUMB DOWN DAYCELL COMPONENT?! LINK TO DATA THROUGH PROPS?! */}
      {weekData &&
        weekData[weekIndex].days.map((day, dayNum) => {
          return (
            <DayCell day={dayNum} week={weekIndex} key={weekIndex + dayNum} />
          );
        })}

      <div className="weekRow-entry noMobile">
        <input value={`kg`} />
        <input value={`kcal`} />
      </div>
      <div className="weekRow-entry noMobile">
        <input value={`∆kg`} />
        <input value={`∆kcal`} />
      </div>

      <div className="weekRow-entry">
        <input value={`WEEK TDEE`} />
      </div>
    </WeekRowWrapper>
  );
};

const mapStateToProps = state => {
  return {
    weekData: state.calculator.weekData
  };
};

export default connect(mapStateToProps)(WeekRow);
