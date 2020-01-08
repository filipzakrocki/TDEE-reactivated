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

  return (
    <div className="weekLabel">
      <div className="weekLabel-wrapper">
        <div className="weekLabel-label"> Week</div>
        <div className="weekLabel-label noMobile"> Stats</div>

        <div className="weekLabel-dayLabel"> {DAYS[startingDayOfTheWeek]}</div>
        <div className="weekLabel-dayLabel">
          {" "}
          {DAYS[startingDayOfTheWeek + 1]}
        </div>
        <div className="weekLabel-dayLabel">
          {" "}
          {DAYS[startingDayOfTheWeek + 2]}
        </div>
        <div className="weekLabel-dayLabel">
          {" "}
          {DAYS[startingDayOfTheWeek + 3]}
        </div>
        <div className="weekLabel-dayLabel">
          {" "}
          {DAYS[startingDayOfTheWeek + 4]}
        </div>
        <div className="weekLabel-dayLabel">
          {" "}
          {DAYS[startingDayOfTheWeek + 5]}
        </div>
        <div className="weekLabel-dayLabel">
          {" "}
          {DAYS[startingDayOfTheWeek + 6]}
        </div>
        <div className="weekLabel-label noMobile"> Avg.</div>
        <div className="weekLabel-label noMobile"> ∆</div>
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
