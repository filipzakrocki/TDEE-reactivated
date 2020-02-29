import React, { useState, useEffect } from "react";
import "./Clock.scss";

import Error from "../Error/Error";

const Clock = props => {
  const {
    startDate,
    startWeight,
    avgWeight,
    isMetricSystem,
    errorMessage
  } = props;
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

  const setCurrentDate = () => {
    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    const daysOfTheWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    const dayOfTheWeek = daysOfTheWeek[now.getDay()];
    const today = `${dayOfTheWeek}, ${day < 10 ? "0" + day : day}.${
      month < 10 ? "0" + month : month
    }.${year}`;
    return today;
  };

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
      <h1>It is {date.toLocaleTimeString()}</h1>
      <h3>Today's date is {setCurrentDate()}</h3>
      {startDate && (
        <h3>This is the day {calculateDietLength(startDate)} of your diet! </h3>
      )}
      {avgWeight !== 0 && (
        <h3>
          You have
          {calculateOverallWeightChange()}
          so far!
        </h3>
      )}
      <Error errorMessage={errorMessage} />
    </div>
  );
};

export default Clock;
