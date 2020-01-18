import React from "react";
import "./CurrentStats.scss";

import { connect } from "react-redux";

import InputRowTitle from "../../../components/Input/InputRowTitle/InputRowTitle";
import InputRow from "../../../components/Input/InputRow/InputRow";
import InputTable from "../../../components/Input/InputTable/InputTable";

const CurrentStats = props => {

  const {
    avgWeightArray,
    startWeight,
    avgTdeeArray,
    dailyKcalChange,
    avgWeight,
    weeksForAvg,
    weeklyChange,
    goalWeight,
  } = props;

  const totalLoss = startWeight - avgWeight;

  const setCurrentDate = () => {
    const now = new Date();
    const dd = now.getDate();
    const mm = now.getMonth() + 1;
    const yyyy = now.getFullYear();
    const today = `${yyyy}-${mm < 10 ? "0" + mm : mm}-${
      dd < 10 ? "0" + dd : dd
    }`;
    return today;
  };

  const setWeeksNeeded = () => {
    let weeksNeeded =
      "" +
      Math.round(
        ((avgWeightArray[avgWeightArray.length - 1] || startWeight) -
          goalWeight) /
          weeklyChange
      );
    return weeksNeeded;
  };

  const setAvgTDEE = (avgTdeeArray, weeksForAvg) => {
    let avgTdee, modifiedTdeeArray, filteredArray;
    if (avgTdeeArray.length === 1) {
      return avgTdeeArray[0];
    }
    filteredArray = avgTdeeArray.filter(el => el);
    modifiedTdeeArray = filteredArray.slice(
      filteredArray.length - weeksForAvg,
      filteredArray.length
    );
    avgTdee =
      modifiedTdeeArray.reduce((a, b) => a + b, 0) / modifiedTdeeArray.length;
    return Math.ceil(avgTdee);
  };

  return (
    <div className="currentStats">
      <InputRowTitle children={"Current Stats"} />
      <InputTable>
        <InputRow
          value={setCurrentDate()}
          readOnly={true}
          type="date"
          label="Today's Date"
        />
        <InputRow
          value={avgWeight || startWeight}
          readOnly={true}
          type="number"
          label="Your AVG weight"
          units="kg/lbs"
        />
        <InputRow
          value={totalLoss.toFixed(2)}
          readOnly={true}
          type="number"
          label="You have lost"
          units="kg"
        />
        <InputRow
          value={`${setAvgTDEE(avgTdeeArray, weeksForAvg)}`}
          readOnly={true}
          type="number"
          label="Your AVG TDEE"
          units="kcal"
        />
        <InputRow
          value={setWeeksNeeded()}
          readOnly={true}
          type="number"
          label="Weeks to goal"
        />
        <InputRow
          value={`${setAvgTDEE(avgTdeeArray, weeksForAvg) + dailyKcalChange}`}
          onChange={null}
          type="number"
          label="Recommended daily KCAL"
          units="kcal"
        />
      </InputTable>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    avgWeightArray: state.calculator.avgWeightArray,
    startWeight: state.calculator.startWeight,
    avgTdeeArray: state.calculator.avgTdeeArray,
    dailyKcalChange: state.calculator.dailyKcalChange,
    startDate: state.calculator.startDate,
    weeksForAvg: state.calculator.weeksForAvg,
    weeklyChange: state.calculator.weeklyChange,
    goalWeight: state.calculator.goalWeight,
    tdee: state.calculator.tdee,
    weekData: state.calculator.weekData,
    avgWeight: state.calculator.avgWeight
  };
};

// const mapDispatchToProps = dispatch => {};

export default connect(mapStateToProps, null)(CurrentStats);
