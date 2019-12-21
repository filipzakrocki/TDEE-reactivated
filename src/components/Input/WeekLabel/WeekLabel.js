import React from "react";
import "./WeekLabel.scss";

const WeekLabel = props => {
  return (
    <div className="weekLabel">
      <div className="weekLabel-wrapper">
        <div className="weekLabel-label"> Week</div>
        <div className="weekLabel-label noMobile"> Stats</div>
        <div className="weekLabel-dayLabel"> Mon.</div>
        <div className="weekLabel-dayLabel"> Tues.</div>
        <div className="weekLabel-dayLabel"> Wed.</div>
        <div className="weekLabel-dayLabel"> Thurs.</div>
        <div className="weekLabel-dayLabel"> Fri.</div>
        <div className="weekLabel-dayLabel"> Sat.</div>
        <div className="weekLabel-dayLabel"> Sun.</div>
        <div className="weekLabel-label noMobile"> Avg.</div>
        <div className="weekLabel-label noMobile"> ∆</div>
        <div className="weekLabel-label"> TDEE</div>
      </div>
    </div>
  );
};

export default WeekLabel;
