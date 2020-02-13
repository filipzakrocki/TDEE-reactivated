import React from "react";
import "./CompactView.scss";

const CompactView = props => {
  return (
    <div className={"compactView"}>
      <h1>Based on your input your TDEE is at: xxxx</h1>
      <h1>To lose XXX per week, you have to eat approximately: xxxx</h1>
    </div>
  );
};

export default CompactView;
