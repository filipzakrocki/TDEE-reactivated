import React, { useState } from "react";
import "./Input.scss";

import CurrentStats from "./CurrentStats/CurrentStats";
import InitialInput from "./IntitialInputs/InitialInput";
import CompactView from "./CompactView/CompactView";

import InputColumn from "../../components/Input/InputColumn/InputColumn";
import WeekLabel from "../../components/Input/WeekLabel/WeekLabel";
import InputColumnWrapper from "../../components/Input/InputColumnWrapper/InputColumnWrapper";
import AddWeekBtn from "./AddWeekBtn/AddWeekBtn";

const Input = () => {
  const controlsPanel = (
    <InputColumnWrapper>
      <InputColumn>
        <InitialInput />
      </InputColumn>
      <InputColumn>
        <CurrentStats />
      </InputColumn>
    </InputColumnWrapper>
  );

  return (
    <section className="input">
      {/* <CompactView /> */}
      {controlsPanel}
      <AddWeekBtn />
      <WeekLabel />
    </section>
  );
};

export default Input;
