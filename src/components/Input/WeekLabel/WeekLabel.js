import React from "react";
import { connect } from "react-redux";
import "./WeekLabel.scss";

const WeekLabel = props => {
  const { startDate } = props;

  const startingDayOfTheWeek = new Date(startDate).getDay();

  const DAYS = [
    "Sun.",
    "Mon.",
    "Tues.",
    "Wed.",
    "Thurs.",
    "Fri.",
    "Sat.",
    "Sun.",
    "Mon.",
    "Tues.",
    "Wed.",
    "Thurs.",
    "Fri.",
    "Sat."
  ];

  const daysToShow = startDate
    ? DAYS.slice(startingDayOfTheWeek, startingDayOfTheWeek + 7)
    : ["", "", "", "", "", "", ""];

  return (
    <div className="weekLabel">
      <div className="weekLabel-wrapper">
        <div className="weekLabel-label"> Week</div>
        <div className="weekLabel-label noMobile"> Stats</div>
        {daysToShow.map((day, index) => (
          <div key={index} className="weekLabel-dayLabel">
            {" " + day}
          </div>
        ))}
        <div className="weekLabel-label noMobile"> Avg.</div>
        <div className="weekLabel-label "> ∆</div>
        <div className="weekLabel-label"> TDEE</div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    startDate: state.calculator.startDate
  };
};

export default connect(mapStateToProps)(WeekLabel);
