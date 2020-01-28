import React from "react";
import "./Input.scss";

import CurrentStats from "./CurrentStats/CurrentStats";
import InitialInput from "./IntitialInputs/InitialInput";
import InputColumn from "../../components/Input/InputColumn/InputColumn";
import WeekLabel from "../../components/Input/WeekLabel/WeekLabel";
import InputColumnWrapper from "../../components/Input/InputColumnWrapper/InputColumnWrapper";

import Debug from '../../debug/debug'

const Input = () => {
  return (
    <>
      <section className="input">
        <Debug/>
        <InputColumnWrapper>
          <InputColumn>
            <InitialInput />
          </InputColumn>
          <InputColumn>
            <CurrentStats />
          </InputColumn>
        </InputColumnWrapper>
        <WeekLabel />
      </section>
    </>
  );
};

export default Input;
