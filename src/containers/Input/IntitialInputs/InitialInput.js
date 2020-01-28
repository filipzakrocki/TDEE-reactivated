import React from "react";
import { connect } from "react-redux";
import {
  setStartWeight,
  setGoalWeight,
  setDailyKcalChange,
  setWeeklyChange,
  setStartDate,
  setWeeksForAverage
} from "../../../store/actions/index";
import "./InitialInput.scss";

import InputRowTitle from "../../../components/Input/InputRowTitle/InputRowTitle";
import InputRow from "../../../components/Input/InputRow/InputRow";
import InputTable from "../../../components/Input/InputTable/InputTable";

const InitialInput = props => {
  const {
    initialInputsLocked,
    startDate,
    startWeight,
    dailyKcalChange,
    weeklyChange,
    goalWeight,
    weeksForAvg,
    metricSystem,
    isWeightLoss,
    setStartWeight,
    setGoalWeight,
    setDailyKcalChange,
    setWeeklyChange,
    setStartDate,
    setWeeksForAverage
  } = props;

  return (
    <div className="initialInput">
      <InputRowTitle>Initial Input</InputRowTitle>
      <InputTable>
        <InputRow
          changeHandler={setStartDate}
          value={startDate}
          readOnly={initialInputsLocked}
          type="date"
          label="Start Date"
        />
        <InputRow
          changeHandler={setStartWeight}
          value={startWeight}
          readOnly={initialInputsLocked}
          step={0.1}
          minValue={1}
          type="number"
          label="Starting Weight"
          units={metricSystem ? "kg" : "lbs"}
        />
        <InputRow
          changeHandler={setGoalWeight}
          value={goalWeight}
          type="number"
          step={0.5}
          minValue={1}
          label="Goal Weight"
          units={metricSystem ? "kg" : "lbs"}
        />
        <InputRow
          changeHandler={setWeeklyChange}
          step={0.05}
          value={weeklyChange}
          isWeightLoss={isWeightLoss}
          type="number"
          label={"Weekly Weight Change"}
          units={metricSystem ? "kg" : "lbs"}
        />
        <InputRow
          changeHandler={setDailyKcalChange}
          value={dailyKcalChange}
          isWeightLoss={isWeightLoss}
          type="number"
          step={10}
          label={`Rquired Daily Kcal change`}
          units="kcal"
        />
        <InputRow
          changeHandler={setWeeksForAverage}
          value={weeksForAvg}
          type="number"
          step={1}
          min={1}
          max={4}
          label={`Calculate last # weeks`}
          units="weeks"
        />
      </InputTable>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    startWeight: state.calculator.startWeight,
    dailyKcalChange: state.calculator.dailyKcalChange,
    startDate: state.calculator.startDate,
    weeklyChange: state.calculator.weeklyChange,
    goalWeight: state.calculator.goalWeight,
    initialInputsLocked: state.calculator.initialInputsLocked,
    isWeightLoss: state.calculator.isWeightLoss,
    weeksForAvg: state.calculator.weeksForAvg,
    metricSystem: state.calculator.metricSystem
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setStartWeight: enteredWeight => dispatch(setStartWeight(enteredWeight)),
    setGoalWeight: enteredGoal => dispatch(setGoalWeight(enteredGoal)),
    setDailyKcalChange: kcalChange => dispatch(setDailyKcalChange(kcalChange)),
    setWeeklyChange: weeklyChange => dispatch(setWeeklyChange(weeklyChange)),
    setStartDate: startDate => dispatch(setStartDate(startDate)),
    setWeeksForAverage: numberOfWeeks =>
      dispatch(setWeeksForAverage(numberOfWeeks))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InitialInput);
