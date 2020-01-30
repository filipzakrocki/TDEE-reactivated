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
        value={dayWeight ? dayWeight : ""}
        readOnly={locked}
        step={0.1}
      />
      <input
        type="number"
        onChange={handleKcalChange}
        value={dayKcal ? dayKcal : ""}
        readOnly={locked}
        step={10}
        min={0}
      />
    </div>
  );
};

export default DayCell;
