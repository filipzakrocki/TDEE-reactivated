import React from "react";
import "./LabelCell.scss";

const WeekNumber = props => {
  let { top, bottom, hiddenInMobileView } = props;

  return (
    <div className={`LabelCell ${hiddenInMobileView ? "mobileView" : ""}`}>
      <p>{top}</p>
      <p>{bottom}</p>
    </div>
  );
};

export default WeekNumber;
