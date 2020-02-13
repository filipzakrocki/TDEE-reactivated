import React from "react";
import { connect } from "react-redux";
import "./AddWeekBtn.scss";

import {
  addAnotherWeek,
  toggleCompactView,
  lockWeek
} from "../../../store/actions/index";

const AddWeekBtn = props => {
  const { weekNo, addAnotherWeek, lockWeek, toggleCompactView } = props;

  const addWeekButtonHandler = weekNo => {
    addAnotherWeek(weekNo);
    lockWeek(weekNo - 1);
  };

  return (
    <div className="addWeekBtn-wrapper">
      <button
        onClick={() => addWeekButtonHandler(weekNo)}
        className="addWeekBtn"
      >
        Start a new week
      </button>
      <button className="compactViewBtn" onClick={() => toggleCompactView()}>
        Toggle Compact View
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    weekNo: state.calculator.weekNo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addAnotherWeek: weekNo => dispatch(addAnotherWeek(weekNo)),
    lockWeek: weekIndex => dispatch(lockWeek(weekIndex)),
    toggleCompactView: () => dispatch(toggleCompactView())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddWeekBtn);
