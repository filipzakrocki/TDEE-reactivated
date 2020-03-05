import React from "react";
import "./LabelCell.scss";

const WeekNumber = props => {
  let { top, bottom, children, hiddenInMobileView, isValue } = props;

  let classes = "";

  if (isValue && top[0] === "-") {
    classes = "red";
  } else if (isValue) {
    classes = "green";
  }

  return (
    <div className={`LabelCell ${hiddenInMobileView ? "mobileViewHide" : ""} `}>
      <div>
        <p className={classes}>{top}</p>
        {children}
        <p className={classes}>{bottom}</p>
      </div>
    </div>
  );
};

export default WeekNumber;
