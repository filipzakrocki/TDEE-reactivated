import React from "react";
import "./WeekRow.scss";

const WeekRow = () => {
  return (
    <div className="weekRow">
      <div className="weekRow-wrapper">
        <div class="weekRow-entry">
          <p>Week 1</p>
          <p>Date</p>
        </div>
        <div class="weekRow-entry noMobile">
          <p>kg</p>
          <p>kcal</p>
        </div>
        <div class="weekRow-entry">
          <input></input>
          <input></input>
        </div>
        <div class="weekRow-entry">
          <input></input>
          <input></input>
        </div>
        <div class="weekRow-entry">
          <input></input>
          <input></input>
        </div>
        <div class="weekRow-entry">
          <input></input>
          <input></input>
        </div>
        <div class="weekRow-entry">
          <input></input>
          <input></input>
        </div>
        <div class="weekRow-entry">
          <input></input>
          <input></input>
        </div>
        <div class="weekRow-entry">
          <input></input>
          <input></input>
        </div>

        <div class="weekRow-entry noMobile">
          <p>kg</p>
          <p>kcal</p>
        </div>
        <div class="weekRow-entry noMobile"> ∆</div>
        <div class="weekRow-entry"> WEEK TDEE</div>
      </div>
    </div>
  );
};

export default WeekRow;
