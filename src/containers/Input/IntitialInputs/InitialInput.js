import React from "react";
import { connect } from "react-redux";
import {
  setStartWeight,
  setGoalWeight,
  setDailyKcalChange,
  setWeeklyChange,
  setStartDate,
  setWeeksForAverage,
  toggleMeasurementSystem
} from "../../../store/actions/index";
import "./InitialInput.scss";

import InputTable from "../../../components/Input/InputTable/InputTable";
import InputRowTitle from "../../../components/Input/InputRowTitle/InputRowTitle";
import InputRow from "../../../components/Input/InputRow/InputRow";
import ButtonRow from "../../../components/Input/ButtonRow/ButtonRow";

const InitialInput = props => {
  const {
    initialInputsLocked,
    startDate,
    startWeight,
    dailyKcalChange,
    weeklyChange,
    goalWeight,
    weeksForAvg,
    isMetricSystem,
    isWeightLoss,
    setStartWeight,
    setGoalWeight,
    setDailyKcalChange,
    setWeeklyChange,
    setStartDate,
    toggleMeasurementSystem,
    setWeeksForAverage
  } = props;

  return (
    <div className="initialInput">
      <InputRowTitle>Initial Input</InputRowTitle>
      <InputTable>
        <InputRow
          tooltip={"The day your diet starts"}
          changeHandler={setStartDate}
          value={startDate}
          type="date"
          label="Start Date"
        />
        <ButtonRow
          tooltip={"Choose between Kg/Lbs"}
          disabled={initialInputsLocked}
          label={"Measurement System"}
          changeHandler={toggleMeasurementSystem}
          value={isMetricSystem}
        />
        <InputRow
          tooltip={"Your starting weight"}
          changeHandler={setStartWeight}
          value={startWeight || ""}
          step={0.1}
          type="number"
          label="Starting Weight"
          isMetricSystem={isMetricSystem}
          units={isMetricSystem ? "kg" : "lbs"}
        />
        <InputRow
          tooltip={"what is your goal weight?"}
          changeHandler={setGoalWeight}
          value={goalWeight || ""}
          type="number"
          step={0.5}
          minValue={1}
          label="Goal Weight"
          isMetricSystem={isMetricSystem}
          units={isMetricSystem ? "kg" : "lbs"}
        />
        <InputRow
          tooltip={"Your loss/gain per week"}
          changeHandler={setWeeklyChange}
          step={0.05}
          value={weeklyChange || ""}
          isWeightLoss={isWeightLoss}
          type="number"
          label={"Weekly Weight Change"}
          isMetricSystem={isMetricSystem}
          units={isMetricSystem ? "kg" : "lbs"}
        />
        <InputRow
          tooltip={"Daily Kcal modifier"}
          changeHandler={setDailyKcalChange}
          value={dailyKcalChange || ""}
          isWeightLoss={isWeightLoss}
          type="number"
          step={10}
          label={`Required Daily Kcal change`}
          units="kcal"
        />
        <InputRow
          tooltip={"For best results use 2 or 3!"}
          changeHandler={setWeeksForAverage}
          value={weeksForAvg || ""}
          type="number"
          step={1}
          min={1}
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
    isMetricSystem: state.calculator.isMetricSystem,
    weeksForAvg: state.calculator.weeksForAvg
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setStartWeight: (enteredWeight, isMetricSystem) =>
      dispatch(setStartWeight(enteredWeight, isMetricSystem)),
    setGoalWeight: enteredGoal => dispatch(setGoalWeight(enteredGoal)),
    setDailyKcalChange: (kcalChange, isMetricSystem) =>
      dispatch(setDailyKcalChange(kcalChange, isMetricSystem)),
    setWeeklyChange: (weeklyChange, isMetricSystem) =>
      dispatch(setWeeklyChange(weeklyChange, isMetricSystem)),
    setStartDate: startDate => dispatch(setStartDate(startDate)),
    setWeeksForAverage: numberOfWeeks =>
      dispatch(setWeeksForAverage(numberOfWeeks)),
    toggleMeasurementSystem: () => dispatch(toggleMeasurementSystem())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InitialInput);
