import React from "react";
import "./WeekRow.scss";

import WeekRowWrapper from "../../../components/ResultRows/WeekRowWrapper/WeekRowWrapper";

const WeekRow = props => {
  const { weekNo, startDate } = props;

  return (
    <WeekRowWrapper>
      <div className="weekRow-entry">
        <p>Week {weekNo}</p>
        <p>{startDate}</p>
      </div>
      <div className="weekRow-entry noMobile">
        <p>kg</p>
        <p>kcal</p>
      </div>
      <div className="weekRow-entry">
        <input></input>
        <input></input>
      </div>
      <div className="weekRow-entry">
        <input></input>
        <input></input>
      </div>
      <div className="weekRow-entry">
        <input></input>
        <input></input>
      </div>
      <div className="weekRow-entry">
        <input></input>
        <input></input>
      </div>
      <div className="weekRow-entry">
        <input></input>
        <input></input>
      </div>
      <div className="weekRow-entry">
        <input></input>
        <input></input>
      </div>
      <div className="weekRow-entry">
        <input></input>
        <input></input>
      </div>

      <div className="weekRow-entry noMobile">
        <p>kg</p>
        <p>kcal</p>
      </div>
      <div className="weekRow-entry noMobile"> ∆</div>
      <div className="weekRow-entry"> WEEK TDEE</div>
    </WeekRowWrapper>
  );
};

export default WeekRow;
