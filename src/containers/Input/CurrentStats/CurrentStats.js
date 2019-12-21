import React from "react";
import "./CurrentStats.scss";

import { connect } from "react-redux";
// import * as actions from "../../../store/actions/index";

import InputRowTitle from "../../../components/Input/InputRowTitle/InputRowTitle";
import InputRow from "../../../components/Input/InputRow/InputRow";
import InputTable from "../../../components/Input/InputTable/InputTable";

const CurrentStats = props => {
  return (
    <div className="currentStats">
      <InputRowTitle children={"Current Stats"} />
      <InputTable>
        <InputRow
          value={null}
          onChange={null}
          type="date"
          label="Today's Date"
        />
        <InputRow
          value={props.avgWeight}
          onChange={null}
          type="number"
          label="Your AVG weight"
          units="kg/lbs"
        />
        <InputRow
          value={props.startWeight - props.avgWeight}
          onChange={null}
          type="number"
          label="You have lost"
          units="kg/lbs"
        />
        <InputRow
          value={props.TDEE}
          onChange={null}
          type="number"
          label="Your AVG TDEE"
          units="kg/lbs"
        />
        <InputRow
          value={
            (props.avgWeight || props.startWeight - props.goalWeight) /
            props.weeklyChange
          }
          onChange={null}
          type="number"
          label="Weeks to goal"
          units="kcal"
        />
        <InputRow
          value={props.tdee - props.dailyDeficit}
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
    dailyDeficit: state.calculator.dailyDeficit,
    startDate: state.calculator.startDate,
    weeklyChange: state.calculator.weeklyChange,
    goalWeight: state.calculator.goalWeight,
    tdee: state.calculator.tdee
  };
};

// const mapDispatchToProps = dispatch => {};

export default connect(mapStateToProps, null)(CurrentStats);
