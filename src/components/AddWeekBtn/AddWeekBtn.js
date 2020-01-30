import React from "react";
import { connect } from "react-redux";
import "./AddWeekBtn.scss";

import { addAnotherWeek, lockWeek } from "../../store/actions/index";

const AddWeekBtn = props => {
  const { weekNo, addAnotherWeek, lockWeek } = props;

  return (
    <button
      onClick={() => {
        addAnotherWeek(weekNo);
        if (weekNo > 1) {
          lockWeek(weekNo - 2);
        }
      }}
      className="addWeekBtn"
    >
      Start another week
    </button>
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
    lockWeek: weekIndex => dispatch(lockWeek(weekIndex))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddWeekBtn);
