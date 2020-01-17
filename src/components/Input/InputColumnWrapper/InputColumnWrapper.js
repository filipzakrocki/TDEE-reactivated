import React from "react";
import "./InputColumnWrapper.scss";

const InputColumnWrapper = props => {
  const { children } = props;
  return <div className="inputColumnWrapper">{children}</div>;
};

export default InputColumnWrapper;
