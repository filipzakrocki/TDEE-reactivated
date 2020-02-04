import React, { useState } from "react";
import "./Input.scss";

import CurrentStats from "./CurrentStats/CurrentStats";
import InitialInput from "./IntitialInputs/InitialInput";
import InputColumn from "../../components/Input/InputColumn/InputColumn";
import WeekLabel from "../../components/Input/WeekLabel/WeekLabel";
import InputColumnWrapper from "../../components/Input/InputColumnWrapper/InputColumnWrapper";

const Input = () => {
  //delegate to redux??
  const [controls, setControls] = useState(true);

  const controlsPanel = controls ? (
    <InputColumnWrapper>
      <InputColumn>
        <InitialInput />
      </InputColumn>
      <InputColumn>
        <CurrentStats />
      </InputColumn>
    </InputColumnWrapper>
  ) : null;

  return (
    <section className="input">
      {controlsPanel}
      <WeekLabel clickHandler={() => setControls(!controls)} />
    </section>
  );
};

export default Input;
