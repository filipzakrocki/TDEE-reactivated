import React from "react";
import "./InputRowTitle.scss";

const InputRowTitle = props => {
  const { children } = props;
  return (
    <div className="inputRowTitle">
      <h1>{children}</h1>
    </div>
  );
};

export default InputRowTitle;
