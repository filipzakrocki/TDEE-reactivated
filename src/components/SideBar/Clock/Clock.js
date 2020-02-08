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
      startWeight > avgWeight ? " lost" : " gained"
    } ${absoluteWeightDifference.toFixed(2)} ${
      isMetricSystem ? "kg " : "lbs "
    }`;
  };

  return (
    <div className="clock">
      <h3>Hello!</h3>
      <h1>It is {date.toLocaleTimeString()}</h1>
      <h3>
        Today's date is {date.getDay()}.{date.getMonth()}.{date.getFullYear()}.
      </h3>
      <h3>
        This is the {startDate && calculateDietLength(startDate)} day of your
        diet!{" "}
      </h3>
      <h3>
        You have
        {calculateOverallWeightChange()}
        so far!
      </h3>
    </div>
  );
};

export default Clock;
