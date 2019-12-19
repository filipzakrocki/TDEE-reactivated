import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
import "./InitialInput.scss";

import InputRowTitle from "../../../components/Input/InputRowTitle/InputRowTitle";
import InputRow from "../../../components/Input/InputRow/InputRow";
import InputTable from "../../../components/Input/InputTable/InputTable";

const InitialInput = props => {
  useEffect(() => {
    if (!props.startDate) {
      const now = new Date();
      const dd = now.getDate();
      const mm = now.getMonth() + 1;
      const yyyy = now.getFullYear();
      const today = `${yyyy}-${mm < 10 ? "0" + mm : mm}-${
        dd < 10 ? "0" + dd : dd
      }`;
      props.setStartDate(today);
    }
  });

  return (
    <div className="initialInput">
      <InputRowTitle children="Initial Input" />
      <InputTable>
        <InputRow
          onChange={props.setStartDate}
          value={props.startDate}
          type="date"
          label="Start Date"
          units=""
        />
        <InputRow
          onChange={props.setStartWeight}
          type="number"
          label="Starting Weight"
          units="kg/lbs"
        />
        <InputRow
          onChange={props.setGoalWeight}
          type="number"
          label="Goal Weight"
          units="kg/lbs"
        />
        <InputRow
          onChange={props.setWeeklyChange}
          value={props.weeklyChange}
          type="number"
          label="Weekly weight change"
          units="kg/lbs"
        />
        <InputRow
          value={props.dailyDeficit}
          type="number"
          label="Target Daily Deficit"
          units="kcal"
          onChange={props.setDailyDeficit}
        />
      </InputTable>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    startWeight: state.calculator.startWeight,
    dailyDeficit: state.calculator.dailyDeficit,
    startDate: state.calculator.startDate,
    weeklyChange: state.calculator.weeklyChange
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setStartWeight: enteredWeight =>
      dispatch(actions.setStartWeight(enteredWeight)),
    setGoalWeight: enteredGoal => dispatch(actions.setGoalWeight(enteredGoal)),
    setDailyDeficit: enteredDeficit =>
      dispatch(actions.setDailyDeficit(enteredDeficit)),
    setWeeklyChange: weeklyChange =>
      dispatch(actions.setWeeklyChange(weeklyChange)),
    setStartDate: startDate => dispatch(actions.setStartDate(startDate))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InitialInput);
