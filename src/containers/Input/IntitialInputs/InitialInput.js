import React from "react";
import { connect } from "react-redux";
import {
  setStartWeight,
  setGoalWeight,
  setDailyKcalChange,
  setWeeklyChange,
  setStartDate
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
    setStartWeight,
    setGoalWeight,
    setDailyKcalChange,
    setWeeklyChange,
    setStartDate
  } = props;

  const isWeightLoss = startWeight > goalWeight;

  // const setStartDateHandler = e => {
  //   setStartDate(e.target.value);
  // };
  // const setStartWeightHandler = e => {
  //   setStartWeight(e.target.value);
  // };
  // const setGoalWeightHandler = e => {
  //   setGoalWeight(e.target.value);
  // };
  // const setWeeklyChangeHandler = e => {
  //   setWeeklyChange(e.target.value);
  // };
  // const setDailyKcalChangeHandler = e => {
  //   setDailyKcalChange(e.target.value);
  // };

  // Possible solution
  // const setValue = (value, callback) => {
  //   callback(value);
  // }

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
          units="kg/lbs"
        />
        <InputRow
          changeHandler={setGoalWeight}
          value={goalWeight}
          type="number"
          step={0.5}
          minValue={1}
          label="Goal Weight"
          units="kg/lbs"
        />
        <InputRow
          changeHandler={setWeeklyChange}
          step={0.05}
          value={weeklyChange}
          isWeightLoss={isWeightLoss}
          type="number"
          label={`Weekly Weight ${isWeightLoss ? "Loss" : "Gain"}`}
          units="kg/lbs"
        />
        <InputRow
          changeHandler={setDailyKcalChange}
          value={dailyKcalChange}
          isWeightLoss={isWeightLoss}
          type="number"
          step={10}
          label={`Target Daily ${isWeightLoss ? "Deficit" : "Surplus"}`}
          units="kcal"
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
    initialInputsLocked: state.calculator.initialInputsLocked
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setStartWeight: enteredWeight => dispatch(setStartWeight(enteredWeight)),
    setGoalWeight: enteredGoal => dispatch(setGoalWeight(enteredGoal)),
    setDailyKcalChange: kcalChange => dispatch(setDailyKcalChange(kcalChange)),
    setWeeklyChange: weeklyChange => dispatch(setWeeklyChange(weeklyChange)),
    setStartDate: startDate => dispatch(setStartDate(startDate))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InitialInput);
