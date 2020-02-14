import React from "react";
import "./CompactView.scss";

const CompactView = props => {
  const {
    tdee,
    dailyKcalChange,
    weeklyChange,
    isMetricSystem,
    isWeightLoss
  } = props;

  return (
    <div className={"compactView"}>
      {tdee ? (
        <>
          <h1>Based on your input your TDEE is at: {tdee} kcal</h1>
          <h1>
            To {isWeightLoss ? "lose" : "gain"} {Math.abs(weeklyChange)}
            {isMetricSystem ? "kg" : "lbs"} per week, you have to eat
            approximately: {tdee + dailyKcalChange} kcal per day
          </h1>
        </>
      ) : (
        <h1>Awaiting data...</h1>
      )}
    </div>
  );
};

export default CompactView;
