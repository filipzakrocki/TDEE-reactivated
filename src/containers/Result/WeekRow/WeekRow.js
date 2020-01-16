import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
import "./WeekRow.scss";

import WeekRowWrapper from "../../../components/ResultRows/WeekRowWrapper/WeekRowWrapper";
import DayCell from "./DayCell.js/DayCell";

//cell components
import LabelCell from "../../../components/ResultRows/WeekRowCells/LabelCell";

const WeekRow = props => {
  const {
    weekNo,
    startDate,
    startWeight,
    weekData,
    avgTdeeArray,
    weekIndex,
    setWeeklyKcalAndKg
  } = props;

  const weekDays = weekData[weekIndex].days;

  useEffect(() => {
    setWeeklyKcalAndKg(weekDays, weekIndex);
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

  const firstDateofTheWeek = startDate && generateDate(startDate, weekNo);
  const avgKcalForWeek = weekData[weekIndex].avgKcal;
  const avgWeightForWeek = weekData[weekIndex].avgWeight;
  const avgKcalForPreviousWeek =
    weekIndex > 0 ? weekData[weekIndex - 1].avgKcal : avgTdeeArray[0];
  const avgWeightForPreviousWeek =
    weekIndex > 0 ? weekData[weekIndex - 1].avgWeight : startWeight;
  const kcalChange = avgKcalForWeek - avgKcalForPreviousWeek;
  const weightChange = avgWeightForWeek - avgWeightForPreviousWeek;

  console.log(weightChange * 1100);

  //   TDEE CALCULATIONS

  //   var change = -0.2;
  // var kcal = 2000;

  // const calculateTDEE = (changeWeekly, weeklyKcal) => {
  //   return weeklyKcal - (changeWeekly * 1100)
  // }

  // console.log(calculateTDEE(change, kcal))

  // weekly change = 0.2 kg

  // that is 0.2 x 7700 of extra kcalories = 1540 kcal

  // per day that gives 220;

  return (
    <WeekRowWrapper>
      <LabelCell top={`Week ${weekNo}`} bottom={firstDateofTheWeek} />
      <LabelCell top={"kg"} bottom={"kcal"} noMobile />
      {/* TODO: separate columns into their own components, make them dumb with weekRow as Container and data link */}

      {/* DUMB DOWN DAYCELL COMPONENT?! LINK TO DATA THROUGH PROPS?! */}
      {weekData &&
        weekData[weekIndex].days.map((day, dayNum) => {
          return (
            <DayCell
              day={dayNum}
              weekIndex={weekIndex}
              key={weekIndex + dayNum}
            />
          );
        })}

      <LabelCell
        top={`${avgWeightForWeek.toFixed(2)} kg`}
        bottom={`${Math.ceil(avgKcalForWeek)} kcal`}
        noMobile
      />
      {/* CONSIDER NOT HAVING KCAL CHANGE */}
      <LabelCell
        top={`${weightChange.toFixed(2)} kg`}
        bottom={`${kcalChange} kcal`}
        noMobile
      />

      <LabelCell top={`WEEK TDEE`} />
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
      dispatch(actions.setWeeklyKcalAndKg(week, index))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WeekRow);
