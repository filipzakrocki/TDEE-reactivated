import React from "react";
import "./CurrentStats.scss";

import { connect } from "react-redux";
import { setAvgTdee } from "../../../store/actions/index";

import InputRowTitle from "../../../components/Input/InputRowTitle/InputRowTitle";
import InputRow from "../../../components/Input/InputRow/InputRow";
import InputTable from "../../../components/Input/InputTable/InputTable";

const CurrentStats = props => {
  const {
    avgWeightOverTime,
    startWeight,
    avgTdeeOverTime,
    dailyKcalChange,
    avgWeight,
    isMetricSystem,
    weeksForAvg,
    weeklyChange,
    goalWeight,
    setTdee
  } = props;

  const setCurrentDate = () => {
    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    const today = `${year}-${month < 10 ? "0" + month : month}-${
      day < 10 ? "0" + day : day
    }`;
    return today;
  };

  const setWeeksNeeded = () => {
    if (avgWeightOverTime) {
      const weeksNeeded = Math.round(
        ((avgWeightOverTime[avgWeightOverTime.length - 1] || startWeight) -
          goalWeight) /
          weeklyChange
      );
      return Math.abs(weeksNeeded);
    }
  };

  const totalChange = () => {
    if (avgWeight > startWeight) {
      return (avgWeight - startWeight).toFixed(2);
    }
    if (avgWeight) {
      return (startWeight - avgWeight).toFixed(2);
    } else {
      return 0;
    }
  };

  const setAvgTDEE = (avgTdeeOverTime, weeksForAvg) => {
    let avgTdee, modifiedTdeeArray, filteredArray, clonedArray;
    if (!avgTdeeOverTime) {
      return 0;
    }
    //removing last week - the week that is currently edited
    clonedArray = [...avgTdeeOverTime];
    if (clonedArray.length === 1) {
      setTdee(avgTdeeOverTime[0]);
      return avgTdeeOverTime[0];
    }
    clonedArray.pop();
    // removing all the non-values
    filteredArray = clonedArray.filter(el => el);
    //checking if there is only one value and returning it
    if (filteredArray.length === 1) {
      setTdee(filteredArray[0]);
      return filteredArray[0];
    }
    // setting the range from the TDEE array to calculate the average with weeksForAverage variable
    const firstIndex =
      filteredArray.length - weeksForAvg < 0
        ? 0
        : filteredArray.length - weeksForAvg;
    // creating a new array which is a slice of the old one
    modifiedTdeeArray = filteredArray.slice(firstIndex, filteredArray.length);
    //calculating the average
    avgTdee =
      modifiedTdeeArray.reduce((a, b) => a + b, 0) / modifiedTdeeArray.length;
    //updating the average on redux and returning it here
    setTdee(Math.ceil(avgTdee));
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
          label="Your average weight"
          units={isMetricSystem ? "kg" : "lbs"}
        />
        <InputRow
          value={Math.abs(totalChange())}
          readOnly={true}
          type="number"
          label={`You have ${avgWeight < startWeight ? "lost" : "gained"}`}
          units={isMetricSystem ? "kg" : "lbs"}
        />
        <InputRow
          value={`${setAvgTDEE(avgTdeeOverTime, weeksForAvg)}`}
          readOnly={true}
          type="number"
          label="Your average TDEE"
          units="kcal"
        />
        <InputRow
          value={`${setWeeksNeeded()}`}
          readOnly={true}
          type="number"
          label="Weeks to goal"
        />
        <InputRow
          value={`${setAvgTDEE(avgTdeeOverTime, weeksForAvg) +
            dailyKcalChange}`}
          type="number"
          label="Recommended daily intake"
          units="kcal"
          readOnly={true}
        />
      </InputTable>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    avgWeightOverTime: state.calculator.avgWeightOverTime,
    startWeight: state.calculator.startWeight,
    avgTdeeOverTime: state.calculator.avgTdeeOverTime,
    dailyKcalChange: state.calculator.dailyKcalChange,
    startDate: state.calculator.startDate,
    weeksForAvg: state.calculator.weeksForAvg,
    weeklyChange: state.calculator.weeklyChange,
    goalWeight: state.calculator.goalWeight,
    isMetricSystem: state.calculator.isMetricSystem,
    weekData: state.calculator.weekData,
    avgWeight: state.calculator.avgWeight
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setTdee: avgTdee => dispatch(setAvgTdee(avgTdee))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentStats);
