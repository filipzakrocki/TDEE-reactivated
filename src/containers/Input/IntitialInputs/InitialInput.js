import React, { useEffect } from "react";
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

  const setStartDateHandler = e => {
    setStartDate(e.target.value);
  };
  const setStartWeightHandler = e => {
    setStartWeight(e.target.value);
  };
  const setGoalWeightHandler = e => {
    setGoalWeight(e.target.value);
  };
  const setWeeklyChangeHandler = e => {
    setWeeklyChange(e.target.value);
  };
  const setDailyKcalChangeHandler = e => {
    setDailyKcalChange(e.target.value);
  };

  return (
    <div className="initialInput">
      <InputRowTitle>Initial Input</InputRowTitle>
      <InputTable>
        <InputRow
          changeHandler={setStartDateHandler}
          value={startDate}
          readOnly={initialInputsLocked}
          type="date"
          label="Start Date"
        />
        <InputRow
          changeHandler={setStartWeightHandler}
          value={startWeight}
          readOnly={initialInputsLocked}
          step={0.1}
          type="number"
          label="Starting Weight"
          units="kg/lbs"
        />
        <InputRow
          changeHandler={setGoalWeightHandler}
          value={goalWeight}
          type="number"
          step={0.5}
          label="Goal Weight"
          units="kg/lbs"
        />
        <InputRow
          changeHandler={setWeeklyChangeHandler}
          step={0.05}
          value={weeklyChange}
          type="number"
          label={`Weekly Weight ${isWeightLoss ? "Loss" : "Gain"}`}
          units="kg/lbs"
        />
        <InputRow
          changeHandler={setDailyKcalChangeHandler}
          value={dailyKcalChange}
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
