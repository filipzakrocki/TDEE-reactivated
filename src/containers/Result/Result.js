import React from "react";
import "./Result.scss";

import WeekRow from "./WeekRow/WeekRow";

import AddWeekBtn from "../../components/AddWeekBtn/AddWeekBtn";

const Result = () => {
  return (
    <section className="result">
      <AddWeekBtn />
    </section>
  );
};

export default Result;
