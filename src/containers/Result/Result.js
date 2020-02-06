import React from "react";
import "./Result.scss";
import { connect } from "react-redux";

import WeekRow from "./WeekRow/WeekRow";

import AddWeekBtn from "../../components/AddWeekBtn/AddWeekBtn";

const Result = props => {
  const { weekData, startDate } = props;

  return (
    <section className="result">
      {weekData &&
        weekData.map((week, weekIndex) => {
          if (weekIndex) {
            return (
              <WeekRow
                key={weekIndex}
                weekNo={weekIndex}
                startDate={startDate}
                weekIndex={weekIndex}
                weekDays={week.days}
                locked={week.locked}
              />
            );
          } else {
            return null;
          }
        })}
      <AddWeekBtn />
    </section>
  );
};

const mapStateToProps = state => {
  return {
    weekData: state.calculator.weekData,
    startDate: state.calculator.startDate
  };
};

export default connect(mapStateToProps)(Result);
