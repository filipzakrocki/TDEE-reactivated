import React from "react";
import "./InputColumn.scss";

const InputColumn = props => {
  const { children } = props;

  return <div className="inputColumn">{children}</div>;
};

export default InputColumn;
