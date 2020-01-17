import React from "react";
import "./InputTable.scss";

const InputTable = props => {
  const { children } = props;
  return (
    <table className="inputTable">
      <tbody>{children}</tbody>
    </table>
  );
};

export default InputTable;
