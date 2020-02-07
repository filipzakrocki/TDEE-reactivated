import React from "react";
import "./LabelCell.scss";

const WeekNumber = props => {
  let { top, bottom, children, hiddenInMobileView } = props;

  return (
    <div className={`LabelCell ${hiddenInMobileView ? "mobileViewHide" : ""}`}>
      <div>
        {" "}
        <p>{top}</p>
        {children}
        <p>{bottom}</p>
      </div>
    </div>
  );
};

export default WeekNumber;
