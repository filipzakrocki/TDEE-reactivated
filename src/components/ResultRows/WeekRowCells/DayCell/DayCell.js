import React from "react";
import "./DayCell.scss";

const DayCell = props => {
  const {
    weekIndex,
    dayIndex,
    dayWeight,
    dayKcal,
    locked,
    changeHandler
  } = props;

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
        readOnly={locked}
      ></input>
      <input
        type="number"
        onChange={handleKcalChange}
        value={dayKcal}
        readOnly={locked}
      ></input>
    </div>
  );
};

export default DayCell;
