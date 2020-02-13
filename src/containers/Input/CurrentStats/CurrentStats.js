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
    setAvgTdee
  } = props;

  const totalLoss = startWeight - avgWeight;

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

  const setAvgTDEE = (avgTdeeOverTime, weeksForAvg) => {
    let avgTdee, modifiedTdeeArray, filteredArray;
    if (avgTdeeOverTime && avgTdeeOverTime.length === 1) {
      return avgTdeeOverTime[0];
    } else if (avgTdeeOverTime) {
      filteredArray = avgTdeeOverTime.filter(el => el);
      const firstIndex =
        filteredArray.length - weeksForAvg < 0
          ? 0
          : filteredArray.length - weeksForAvg;
      modifiedTdeeArray = filteredArray.slice(firstIndex, filteredArray.length);
      avgTdee =
        modifiedTdeeArray.reduce((a, b) => a + b, 0) / modifiedTdeeArray.length;
    }
    setAvgTdee(Math.ceil(avgTdee));
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
          value={Math.abs(totalLoss.toFixed(2))}
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
    setAvgTdee: avgTdee => dispatch(setAvgTdee(avgTdee))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentStats);
