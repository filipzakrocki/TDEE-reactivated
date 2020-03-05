import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  setWeeklyKcalAndKg,
  setWeeklyTdee,
  setKcalAndKg,
  lockWeek
} from "../../../store/actions/index";
import "./WeekRow.scss";

import WeekRowWrapper from "../../../components/ResultRows/WeekRowWrapper/WeekRowWrapper";

//cell components
import LabelCell from "../../../components/ResultRows/WeekRowCells/LabelCell/LabelCell";
import DayCell from "../../../components/ResultRows/WeekRowCells/DayCell/DayCell";
import LockWeekButton from "../../../components/ResultRows/WeekRowCells/LockWeekButton/LockWeekButton";

const WeekRow = props => {
  const {
    weekNo,
    startDate,
    isMetricSystem,
    weekData,
    weekIndex,
    weekDays,
    locked,
    setWeeklyKcalAndKg,
    setWeeklyTdee,
    setKcalAndKg,
    lockWeek
  } = props;

  useEffect(() => {
    setWeeklyKcalAndKg(weekDays, weekIndex);
  }, [setWeeklyKcalAndKg, weekDays, weekIndex]);

  useEffect(() => {
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

  const findLastWeight = (index, allWeeksData) => {
    let modifiedWeekData = allWeeksData.slice(0, index);
    for (var i = modifiedWeekData.length - 1; i >= 0; i--) {
      if (modifiedWeekData[i].avgWeight) {
        return modifiedWeekData[i].avgWeight;
      }
    }
  };

  const firstDateOfTheWeek = startDate && generateDate(startDate, weekNo);

  const avgKcalForWeek = weekData[weekIndex].avgKcal;
  const avgWeightForWeek = weekData[weekIndex].avgWeight;

  const avgPreviousWeight = findLastWeight(weekIndex, weekData);

  const weightChange = avgWeightForWeek
    ? avgWeightForWeek - avgPreviousWeight
    : 0;

  const metricModifier = isMetricSystem ? 1100 : 500;
  const weeklyTdee = avgKcalForWeek - weightChange * metricModifier;

  const listOfDays = weekData[weekIndex].days.map((day, dayIndex) => {
    return (
      <DayCell
        key={weekIndex + dayIndex}
        dayIndex={dayIndex}
        weekIndex={weekIndex}
        dayWeight={day.kg}
        dayKcal={day.kcal}
        changeHandler={setKcalAndKg}
        locked={locked}
      />
    );
  });

  return (
    <WeekRowWrapper>
      <LabelCell top={`Week ${weekNo}`} bottom={firstDateOfTheWeek} />
      <LabelCell
        top={isMetricSystem ? "kg" : "lbs"}
        bottom={"kcal"}
        hiddenInMobileView
      >
        <LockWeekButton
          locked={locked}
          clickHandler={() => lockWeek(weekIndex)}
        />
      </LabelCell>
      {weekData && listOfDays}
      <LabelCell
        top={`${avgWeightForWeek.toFixed(2)} ${isMetricSystem ? "kg" : "lbs"}`}
        bottom={`${Math.ceil(avgKcalForWeek)} kcal`}
        hiddenInMobileView
      />
      <LabelCell
        top={`${weightChange.toFixed(2)} ${isMetricSystem ? "kg" : "lbs"}`}
        isValue
      />
      <LabelCell top={Math.ceil(weeklyTdee) + " KCAL"} />
    </WeekRowWrapper>
  );
};

const mapStateToProps = state => {
  return {
    weekData: state.calculator.weekData,
    avgTdeeArray: state.calculator.avgTdeeArray,
    isMetricSystem: state.calculator.isMetricSystem
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setWeeklyKcalAndKg: (week, index) =>
      dispatch(setWeeklyKcalAndKg(week, index)),
    setWeeklyTdee: (weeklyTdee, weekIndex) =>
      dispatch(setWeeklyTdee(weeklyTdee, weekIndex)),
    setKcalAndKg: (kal, kilo, weekIndex, dayIndex) =>
      dispatch(setKcalAndKg(kal, kilo, weekIndex, dayIndex)),
    lockWeek: weekIndex => dispatch(lockWeek(weekIndex))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WeekRow);
