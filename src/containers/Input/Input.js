import React, { useState } from "react";
import "./Input.scss";

import CurrentStats from "./CurrentStats/CurrentStats";
import InitialInput from "./IntitialInputs/InitialInput";
import InputColumn from "../../components/Input/InputColumn/InputColumn";
import WeekLabel from "../../components/Input/WeekLabel/WeekLabel";
import InputColumnWrapper from "../../components/Input/InputColumnWrapper/InputColumnWrapper";

const Input = () => {
  const [show, setShow] = useState(true);

  const controls = show ? (
    <InputColumnWrapper>
      <InputColumn>
        <InitialInput />
      </InputColumn>
      <InputColumn>
        <CurrentStats />
      </InputColumn>
    </InputColumnWrapper>
  ) : (
    <p>HIDDEN</p>
  );

  // Hidden should be a compact data showing: recommended daily intake + weeks to go

  return (
    <>
      <section className="input">
        <button onClick={() => setShow(!show)}>HIDE THE CONTROLS</button>
        {controls}
        <div className="input-labels">
          <WeekLabel />
        </div>
      </section>
    </>
  );
};

export default Input;
