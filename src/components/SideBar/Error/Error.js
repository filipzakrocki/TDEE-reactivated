import React from "react";
import "./Error.scss";

const Error = props => {
  const { errorMessage } = props;

  return (
    <div className="error">
      <p>{errorMessage}</p>
    </div>
  );
};

export default Error;
