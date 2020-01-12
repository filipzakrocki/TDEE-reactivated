import React from "react";
import { connect } from "react-redux";
import "./WeekRow.scss";

import WeekRowWrapper from "../../../components/ResultRows/WeekRowWrapper/WeekRowWrapper";
import DayCell from "./DayCell.js/DayCell";

//cell components
import LabelCell from "../../../components/ResultRows/WeekRowCells/LabelCell";

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

      <LabelCell
      top={`Week ${weekNo}`}
        bottom={startDate && generateDate(startDate, weekNo)}
      />
      <LabelCell
      top={'kg'}
        bottom={'kcal'}
        noMobile
      />
      {/* TODO: separate columns into their own components, make them dumb with weekRow as Container and data link */}

      {/* DUMB DOWN DAYCELL COMPONENT?! LINK TO DATA THROUGH PROPS?! */}
      {weekData &&
        weekData[weekIndex].days.map((day, dayNum) => {
          return (
            <DayCell day={dayNum} week={weekIndex} key={weekIndex + dayNum} />
          );
        })}

<LabelCell
      top={'kg'}
        bottom={'kcal'}
        noMobile
      />
            <LabelCell
      top={'∆kg'}
        bottom={'∆kcal'}
        noMobile
      />
      <LabelCell
      top={`WEEK TDEE`}

      />

    </WeekRowWrapper>
  );
};

const mapStateToProps = state => {
  return {
    weekData: state.calculator.weekData
  };
};

export default connect(mapStateToProps)(WeekRow);
