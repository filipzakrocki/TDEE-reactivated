import React from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
import "./InitialInput.scss";

import InputRowTitle from "../../../components/Input/InputRowTitle/InputRowTitle";
import InputRow from "../../../components/Input/InputRow/InputRow";
import InputTable from "../../../components/Input/InputTable/InputTable";

const initialInput = props => {
  return (
    <div className="initialInput">
      <InputRowTitle children="Initial Input" />
      <InputTable>
        <InputRow
          onChange={console.log}
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
        <InputRow type="number" label="Weekly weight change" units="kg/lbs" />
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
    dailyDeficit: state.calculator.dailyDeficit
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setStartWeight: enteredWeight =>
      dispatch(actions.setStartWeight(enteredWeight)),
    setGoalWeight: enteredGoal => dispatch(actions.setGoalWeight(enteredGoal)),
    setDailyDeficit: enteredDeficit =>
      dispatch(actions.setDailyDeficit(enteredDeficit))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(initialInput);
