import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
import "./InitialInput.scss";

import InputRowTitle from "../../../components/Input/InputRowTitle/InputRowTitle";
import InputRow from "../../../components/Input/InputRow/InputRow";
import InputTable from "../../../components/Input/InputTable/InputTable";

const InitialInput = props => {
  //TODO: DESTRUCTURE
  const { initialInputsLocked, startDate, startWeight, dailyKcalChange, weeklyChange, goalWeight, setStartWeight, setGoalWeight, setDailyKcalChange, setWeeklyChange, setStartDate } = props;

  // useEffect(() => {
  //   setStartDate(startDate);
  // }, [startDate]);

  useEffect(() => {
    let surplusOrDeficit = (startWeight > goalWeight) ? -1 : 1;
    let dailyKcalChange = weeklyChange * 1101.42 * surplusOrDeficit;
    setDailyKcalChange(dailyKcalChange);
  }, [
    weeklyChange,
    goalWeight,
    startWeight,
    setDailyKcalChange
  ]);

  return (
    <div className="initialInput">
      <InputRowTitle children="Initial Input" />
      <InputTable>
        <InputRow
          onChange={setStartDate}
          value={startDate}
          readOnly={initialInputsLocked}
          type="date"
          label="Start Date"
          units=""
        />
        <InputRow
          onChange={setStartWeight}
          value={startWeight}
          readOnly={initialInputsLocked}
          step={0.1}
          type="number"
          label="Starting Weight"
          units="kg/lbs"
        />
        <InputRow
          onChange={setGoalWeight}
          value={goalWeight}
          type="number"
          step={0.1}
          label="Goal Weight"
          units="kg/lbs"
        />
        <InputRow
          onChange={setWeeklyChange}
          step={0.1}
          value={weeklyChange}
          type="number"
          label="Weekly weight change"
          units="kg/lbs"
        />
        <InputRow
          value={dailyKcalChange}
          type="number"
          label={`Target Daily ${goalWeight > startWeight ? 'Surplus' : 'Deficit'}`}
          units="kcal"
          onChange={setDailyKcalChange}
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
    setStartWeight: enteredWeight =>
      dispatch(actions.setStartWeight(enteredWeight)),
    setGoalWeight: enteredGoal => dispatch(actions.setGoalWeight(enteredGoal)),
    setDailyKcalChange: kcalChange =>
      dispatch(actions.setDailyKcalChange(kcalChange)),
    setWeeklyChange: weeklyChange =>
      dispatch(actions.setWeeklyChange(weeklyChange)),
    setStartDate: startDate => dispatch(actions.setStartDate(startDate)),

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InitialInput);
