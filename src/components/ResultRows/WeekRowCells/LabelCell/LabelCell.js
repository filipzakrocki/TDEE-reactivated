import React from "react";
import "./LabelCell.scss";

const WeekNumber = props => {
  let { top, bottom, children, hiddenInMobileView } = props;

  return (
    <div className={`LabelCell ${hiddenInMobileView ? "mobileViewHide" : ""}`}>
      <p>{top}</p>
      {children}
      <p>{bottom}</p>
    </div>
  );
};

export default WeekNumber;
