import React from "react";
import { connect } from "react-redux";
import "./MiddlePanel.scss";

import {
  addAnotherWeek,
  toggleCompactView,
  lockWeek,
} from "../../../store/actions/index";

const MiddlePanel = (props) => {
  const { weekNo, addAnotherWeek, lockWeek, toggleCompactView } = props;

  const addWeekButtonHandler = (weekNo) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to start a new week? Warning: weeks cannot be removed"
    );
    if (isConfirmed) {
      addAnotherWeek(weekNo);
      lockWeek(weekNo - 1);
    }
  };

  return (
    <>
      <div className="middlePanel-wrapper">
        <button
          onClick={() => addWeekButtonHandler(weekNo)}
          className="addWeekBtn"
        >
          {weekNo === 1 ? "Start tracking!" : "Start a new week"}
        </button>
        <button className="compactViewBtn" onClick={() => toggleCompactView()}>
          Toggle Compact View
        </button>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    weekNo: state.calculator.weekNo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addAnotherWeek: (weekNo) => dispatch(addAnotherWeek(weekNo)),
    lockWeek: (weekIndex) => dispatch(lockWeek(weekIndex)),
    toggleCompactView: () => dispatch(toggleCompactView()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MiddlePanel);
