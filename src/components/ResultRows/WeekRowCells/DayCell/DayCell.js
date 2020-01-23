import React from "react";
import "./DayCell.scss";

const DayCell = props => {
  const { weekIndex, dayIndex, dayWeight, dayKcal, changeHandler } = props;

  const handleWeightChange = e => {
    changeHandler(dayKcal, e.target.value, weekIndex, dayIndex);
  };

  const handleKcalChange = e => {
    changeHandler(e.target.value, dayWeight, weekIndex, dayIndex);
  };

  return (
    <div className="weekRow-entry">
      <input
        type="number"
        onChange={handleWeightChange}
        value={dayWeight}
      ></input>
      <input type="number" onChange={handleKcalChange} value={dayKcal}></input>
    </div>
  );
};

export default DayCell;
