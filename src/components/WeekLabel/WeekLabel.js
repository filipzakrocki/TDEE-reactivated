import React from "react";
import "./WeekLabel.scss";

const WeekLabel = props => {
  return (
    <div className="weekLabel">
      <div className="weekLabel-wrapper">
        <div class="weekLabel-label"> Week</div>
        <div class="weekLabel-label noMobile"> Stats</div>
        <div class="weekLabel-dayLabel"> Mon.</div>
        <div class="weekLabel-dayLabel"> Tues.</div>
        <div class="weekLabel-dayLabel"> Wed.</div>
        <div class="weekLabel-dayLabel"> Thurs.</div>
        <div class="weekLabel-dayLabel"> Fri.</div>
        <div class="weekLabel-dayLabel"> Sat.</div>
        <div class="weekLabel-dayLabel"> Sun.</div>
        <div class="weekLabel-label noMobile"> Avg.</div>
        <div class="weekLabel-label noMobile"> ∆</div>
        <div class="weekLabel-label"> TDEE</div>
      </div>
    </div>
  );
};

export default WeekLabel;
