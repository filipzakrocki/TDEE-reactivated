import React from "react";
import "./Input.scss";

import CurrentStats from "./CurrentStats/CurrentStats";
import InitialInput from "./IntitialInputs/InitialInput";
import InputColumn from "../../components/InputColumns/InputColumn";
import WeekLabel from "../../components/WeekLabel/WeekLabel";

const Input = () => {
  return (
    <>
      <section className="input">
        <div className="input-columns">
          <InputColumn>
            <InitialInput />
          </InputColumn>
          <InputColumn>
            <CurrentStats />
          </InputColumn>
        </div>
        <div className="input-labels">
          <WeekLabel />
        </div>
      </section>
    </>
  );
};

export default Input;
