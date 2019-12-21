import React from "react";
import "./InputTable.scss";

const InputTable = props => {
  return (
    <table className="inputTable">
      <tbody>{props.children}</tbody>
    </table>
  );
};

export default InputTable;
