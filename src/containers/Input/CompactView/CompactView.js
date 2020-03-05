import React from "react";
import "./CompactView.scss";

const CompactView = props => {
  const {
    tdee,
    dailyKcalChange,
    weeklyChange,
    isMetricSystem,
    isWeightLoss,
    avgWeight,
    goalWeight
  } = props;

  let recommendation;

  if (checkForGoal()) {
    recommendation = (
      <h1 className="compactView-goalReached">
        Congratulations, you reached your goal
      </h1>
    );
  } else {
    recommendation = (
      <h1>
        <span className="compactView-emphasis">{tdee + dailyKcalChange}</span>{" "}
        kcal per day
      </h1>
    );
  }

  function checkForGoal() {
    if (isWeightLoss) {
      return goalWeight >= avgWeight;
    } else if (!isWeightLoss) {
      return goalWeight <= avgWeight;
    }
  }

  return (
    <div className={"compactView"}>
      {tdee ? (
        <>
          <div>
            {" "}
            <h1>Your average weight for this week is:</h1>
            <h1>
              <span className="compactView-emphasis">{avgWeight}</span>{" "}
              {isMetricSystem ? " kg" : " lbs"}
            </h1>
          </div>
          <div>
            <h1>Your average TDEE is:</h1>
            <h1>
              <span className="compactView-emphasis">{tdee}</span> kcal
            </h1>
          </div>
          <div>
            <h1>
              To {isWeightLoss ? "lose" : "gain"} {Math.abs(weeklyChange)}
              {isMetricSystem ? " kg" : " lbs"} per week, you have to eat
              approximately:
            </h1>
            {recommendation}
          </div>
        </>
      ) : (
        <h1>Awaiting data...</h1>
      )}
    </div>
  );
};

export default CompactView;
