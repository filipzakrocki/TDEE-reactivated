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
    goalWeight,
    startWeight
  } = props;

  // const goalCompleted = <h1>Congratulations, you reached your goal</h1>;

  // const checkForGoal = () => {
  //   if (isWeightLoss) {
  //     return goalWeight <= startWeight;
  //   } else if (!isWeightLoss) {
  //     return goalWeight >= startWeight;
  //   }
  // };

  return (
    <div className={"compactView"}>
      {/* {checkForGoal() && goalCompleted} */}
      {tdee ? (
        <>
          <h1>Your average weight for this week is:</h1>
          <h1>
            <span className="compactView-emphasis">{avgWeight}</span>{" "}
            {isMetricSystem ? " kg" : " lbs"}
          </h1>
          <h1>Your average TDEE is:</h1>
          <h1>
            <span className="compactView-emphasis">{tdee}</span> kcal
          </h1>
          <h1>
            To {isWeightLoss ? "lose" : "gain"} {Math.abs(weeklyChange)}
            {isMetricSystem ? " kg" : " lbs"} per week, you have to eat
            approximately:
          </h1>
          <h1>
            {" "}
            <span className="compactView-emphasis">
              {tdee + dailyKcalChange}
            </span>{" "}
            kcal per day
          </h1>
        </>
      ) : (
        <h1>Awaiting data...</h1>
      )}
    </div>
  );
};

export default CompactView;
