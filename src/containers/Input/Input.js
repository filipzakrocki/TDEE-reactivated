import React from "react";
import "./Input.scss";

import CurrentStats from "./CurrentStats/CurrentStats";
import InitialInput from "./IntitialInputs/InitialInput";
import InputColumn from "../../components/Input/InputColumn/InputColumn";
import WeekLabel from "../../components/Input/WeekLabel/WeekLabel";
import InputColumnWrapper from "../../components/Input/InputColumnWrapper/InputColumnWrapper";

const Input = () => {
  const controls = (
    <InputColumnWrapper>
      <InputColumn>
        <InitialInput />
      </InputColumn>
      <InputColumn>
        <CurrentStats />
      </InputColumn>
    </InputColumnWrapper>
  );

  // Hidden should be a compact data showing: recommended daily intake + weeks to go

  return (
    <>
      <section className="input">
        <button onClick={() => localStorage.clear()}>CLEAR THE STORAGE</button>
        {controls}
        <div className="input-labels">
          <WeekLabel />
        </div>
      </section>
    </>
  );
};

export default Input;
