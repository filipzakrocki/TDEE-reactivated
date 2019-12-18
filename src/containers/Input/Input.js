import React from "react";
import "./Input.scss";

import CurrentStats from "./CurrentStats/CurrentStats";
import InitialInput from "./IntitialInputs/InitialInput";
import InputColumn from "../../components/Input/InputColumn/InputColumn";
import WeekLabel from "../../components/Input/WeekLabel/WeekLabel";
import InputColumnWrapper from "../../components/Input/InputColumnWrapper/InputColumnWrapper";

const Input = () => {
  return (
    <>
      <section className="input">
        <InputColumnWrapper>
          <InputColumn>
            <InitialInput />
          </InputColumn>
          <InputColumn>
            <CurrentStats />
          </InputColumn>
        </InputColumnWrapper>
        <div className="input-labels">
          <WeekLabel />
        </div>
      </section>
    </>
  );
};

export default Input;
