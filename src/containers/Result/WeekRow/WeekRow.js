import React from "react";
import "./WeekRow.scss";

const WeekRow = () => {
  return (
    <div className="weekRow">
      <div className="weekRow-wrapper">
        <div className="weekRow-entry">
          <p>Week 1</p>
          <p>Date</p>
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
      </div>
    </div>
  );
};

export default WeekRow;
