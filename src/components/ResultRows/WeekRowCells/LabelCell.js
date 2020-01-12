import React from "react";
import "./LabelCell.scss";

const WeekNumber = props => {
  let { top, bottom, noMobile } = props;

  return (
    <div className={`LabelCell ${noMobile ? 'noMobile' : ''}`}>
      <p>{top}</p>
      <p>{bottom}</p>
    </div>
  );
};

export default WeekNumber;
