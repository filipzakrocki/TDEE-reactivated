import React from "react";
import "./WeekRowWrapper.scss";

const WeekRowWrapper = props => {
  const { children } = props;

  return (
    <div className="weekRow">
      <div className="weekRow-wrapper">{children}</div>
    </div>
  );
};

export default WeekRowWrapper;
