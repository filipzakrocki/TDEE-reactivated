import React, { useState, useEffect } from "react";
import "./Clock.scss";

const Clock = props => {
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

  return (
    <div className="clock">
      <h2>It is {date.toLocaleTimeString()}.</h2>
      <h3>
        Today's date is {date.getDay()}.{date.getMonth()}.{date.getFullYear()}
      </h3>
      <h4>This is the %n day of your diet! </h4>
      <h4>You have lost %kg so far!</h4>
    </div>
  );
};

export default Clock;
