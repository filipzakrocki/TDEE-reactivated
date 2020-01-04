import React from "react";
import "./CurrentStats.scss";

import { connect } from "react-redux";
// import * as actions from "../../../store/actions/index";

import InputRowTitle from "../../../components/Input/InputRowTitle/InputRowTitle";
import InputRow from "../../../components/Input/InputRow/InputRow";
import InputTable from "../../../components/Input/InputTable/InputTable";

const CurrentStats = props => {

  //deconstruct props
  const { avgWeight, startWeight, avgTdeeArray, dailyKcalChange, weeksForAvg, weeklyChange, goalWeight} = props;


  const setCurrentDate = () => {
      const now = new Date();
      const dd = now.getDate();
      const mm = now.getMonth() + 1;
      const yyyy = now.getFullYear();
      const today = `${yyyy}-${mm < 10 ? "0" + mm : mm}-${
        dd < 10 ? "0" + dd : dd
      }`;
      return today;
  }

  const setWeeksNeeded = () => {
    let weeksNeeded = Math.round((startWeight - goalWeight) / weeklyChange)
  return weeksNeeded
  }

  // delegate to global state?
  const setAvgTDEE = (avgTdeeArray, weeksForAvg) => {
    let avgTdee, modifiedTdeeArray;
    if (avgTdeeArray.length === 1 ) {
      return avgTdeeArray[0];
    }
    modifiedTdeeArray = avgTdeeArray.slice(avgTdeeArray.length - weeksForAvg, avgTdeeArray.length)
    avgTdee = modifiedTdeeArray.reduce((a,b) => a+b,0) / weeksForAvg
    return avgTdee;
  }

  // add props from global state?
  // const setFinalTdee = () => {

  // }



  return (
    <div className="currentStats">
      <InputRowTitle children={"Current Stats"} />
      <InputTable>
        <InputRow
          value={() => setCurrentDate()}
          readOnly={true}
          type="date"
          label="Today's Date"
        />
        <InputRow
          value={avgWeight}
          readOnly={true}
          type="number"
          label="Your AVG weight"
          units="kg/lbs"
        />
        <InputRow
          value={startWeight - avgWeight}
          onChange={null}
          readOnly={true}
          type="number"
          label="You have lost"
          units="kg/lbs"
        />
        <InputRow
          value={() => setAvgTDEE(avgTdeeArray, weeksForAvg)}
          onChange={null}
          readOnly={true}
          type="number"
          label="Your AVG TDEE"
          units="kg/lbs"
        />
        <InputRow
          value={() => setWeeksNeeded()}
          readOnly={true}
          onChange={null}
          type="number"
          label="Weeks to goal"

        />
        <InputRow
          value={setAvgTDEE(avgTdeeArray, weeksForAvg) + dailyKcalChange}
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
    avgWeight: state.calculator.avgWeight,
    startWeight: state.calculator.startWeight,
    avgTdeeArray: state.calculator.avgTdeeArray,
    dailyKcalChange: state.calculator.dailyKcalChange,
    startDate: state.calculator.startDate,
    weeksForAvg: state.calculator.weeksForAvg,
    weeklyChange: state.calculator.weeklyChange,
    goalWeight: state.calculator.goalWeight,
    tdee: state.calculator.tdee
  };
};

// const mapDispatchToProps = dispatch => {};

export default connect(mapStateToProps, null)(CurrentStats);
