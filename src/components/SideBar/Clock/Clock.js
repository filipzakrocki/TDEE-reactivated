import React, { useState, useEffect } from "react";
import "./Clock.scss";

const Clock = props => {
  const { startDate, startWeight, avgWeight, isMetricSystem } = props;
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => clockTick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  const clockTick = () => {
    setDate(new Date());
  };

  const calculateDietLength = startDate => {
    const now = new Date().getTime();
    const dietStart = Date.parse(startDate);
    const amountOfDays = Math.round((now - dietStart) / (1000 * 60 * 60 * 24));
    return Math.abs(amountOfDays);
  };

  calculateDietLength(startDate);

  const calculateOverallWeightChange = () => {
    const weightDifference = avgWeight === 0 ? 0 : startWeight - avgWeight;
    const absoluteWeightDifference = Math.abs(weightDifference);
    return `${
      startWeight > avgWeight ? "lost" : "gained"
    } ${absoluteWeightDifference.toFixed(2)} ${isMetricSystem ? "kg" : "lbs"}`;
  };

  return (
    <div className="clock">
      <h2>It is {date.toLocaleTimeString()}.</h2>
      <h3>
        Today's date is {date.getDay()}.{date.getMonth()}.{date.getFullYear()}
      </h3>
      <h4>This is the {calculateDietLength(startDate)} day of your diet! </h4>
      <h4>
        You have{" "}
        {calculateOverallWeightChange(startWeight, avgWeight, isMetricSystem)}{" "}
        so far!
      </h4>
    </div>
  );
};

export default Clock;
