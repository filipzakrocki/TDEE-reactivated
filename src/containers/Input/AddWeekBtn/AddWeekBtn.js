import React from "react";
import { connect } from "react-redux";
import "./AddWeekBtn.scss";

import { addAnotherWeek, lockWeek } from "../../../store/actions/index";

const AddWeekBtn = props => {
  const { weekNo, addAnotherWeek, lockWeek } = props;

  const addWeekButtonHandler = weekNo => {
    addAnotherWeek(weekNo);
    lockWeek(weekNo - 1);
  };

  return (
    <div className='addWeekBtn-wrapper'>
    <button onClick={() => addWeekButtonHandler(weekNo)} className="addWeekBtn">
      Start another week
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
    lockWeek: weekIndex => dispatch(lockWeek(weekIndex))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddWeekBtn);
