import React from "react";
import "./Result.scss";
import { connect } from "react-redux";

import WeekRow from "./WeekRow/WeekRow";

import AddWeekBtn from "../../components/AddWeekBtn/AddWeekBtn";

const Result = props => {
  const { weekData, startDate } = props;

  return (
    <section className="result">
      {weekData.map(week => (
        <WeekRow weekNo={week.week} startDate={startDate} key={week.week} />
      ))}
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
