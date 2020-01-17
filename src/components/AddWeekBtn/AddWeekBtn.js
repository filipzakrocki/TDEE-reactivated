import React from "react";
import { connect } from "react-redux";
import "./AddWeekBtn.scss";

import { addAnotherWeek } from "../../store/actions/index";

const AddWeekBtn = props => {
  const { weekNo, addAnotherWeek } = props;

  return (
    <button onClick={() => addAnotherWeek(weekNo)} className="addWeekBtn">
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
    addAnotherWeek: weekNo => dispatch(addAnotherWeek(weekNo))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddWeekBtn);
