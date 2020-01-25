import React from "react";
import "./LockWeekButton.scss";

const LockWeekButton = props => {
  let { locked, clickHandler } = props;
  return (
    <button
      style={{ border: "none", background: "white" }}
      onClick={clickHandler}
    >
      {locked ? "🔒" : "✔️"}
    </button>
  );
};

export default LockWeekButton;
