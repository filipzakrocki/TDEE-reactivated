import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  setWeeklyKcalAndKg,
  setWeeklyTdee,
  setKcalAndKg
} from "../../../store/actions/index";
import "./WeekRow.scss";

import WeekRowWrapper from "../../../components/ResultRows/WeekRowWrapper/WeekRowWrapper";

//cell components
import LabelCell from "../../../components/ResultRows/WeekRowCells/LabelCell/LabelCell";
import DayCell from "../../../components/ResultRows/WeekRowCells/DayCell/DayCell";

const WeekRow = props => {
  const {
    weekNo,
    startDate,
    startWeight,
    weekData,
    weekIndex,
    setWeeklyKcalAndKg,
    setWeeklyTdee,
    setKcalAndKg
  } = props;

  const weekDays = weekData[weekIndex].days;

  useEffect(() => {
    setWeeklyKcalAndKg(weekDays, weekIndex);
    setWeeklyTdee(weeklyTdee, weekIndex);
  });

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

  const firstDateOfTheWeek = startDate && generateDate(startDate, weekNo);

  const avgKcalForWeek = weekData[weekIndex].avgKcal;
  const avgWeightForWeek = weekData[weekIndex].avgWeight;

  // POTENTIALLY USE THE AVG WEIGHT FROM REDUX STATE?!
  const avgWeightForPreviousWeek =
    weekIndex > 0 ? weekData[weekIndex - 1].avgWeight : startWeight;
  const weightChange = avgWeightForWeek - avgWeightForPreviousWeek;
  const weeklyTdee = avgKcalForWeek - weightChange * 1100;

  const listOfDays = weekData[weekIndex].days.map((day, dayIndex) => {
    return (
      <DayCell
        key={weekIndex + dayIndex}
        dayIndex={dayIndex}
        weekIndex={weekIndex}
        dayWeight={day.kg}
        dayKcal={day.kcal}
        changeHandler={setKcalAndKg}
      />
    );
  });

  return (
    <WeekRowWrapper>
      <LabelCell top={`Week ${weekNo}`} bottom={firstDateOfTheWeek} />
      <LabelCell top={"kg"} bottom={"kcal"} hiddenInMobileView />
      {weekData && listOfDays}
      <LabelCell
        top={`${avgWeightForWeek.toFixed(2)} kg`}
        bottom={`${Math.ceil(avgKcalForWeek)} kcal`}
        hiddenInMobileView
      />
      <LabelCell top={`${weightChange.toFixed(2)} kg`} hiddenInMobileView />

      <LabelCell top={Math.ceil(weeklyTdee) + " KCAL"} />
    </WeekRowWrapper>
  );
};

const mapStateToProps = state => {
  return {
    weekData: state.calculator.weekData,
    startWeight: state.calculator.startWeight,
    avgTdeeArray: state.calculator.avgTdeeArray
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setWeeklyKcalAndKg: (week, index) =>
      dispatch(setWeeklyKcalAndKg(week, index)),
    setWeeklyTdee: (weeklyTdee, weekIndex) =>
      dispatch(setWeeklyTdee(weeklyTdee, weekIndex)),
    setKcalAndKg: (kal, kilo, weekIndex, dayIndex) =>
      dispatch(setKcalAndKg(kal, kilo, weekIndex, dayIndex))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WeekRow);
