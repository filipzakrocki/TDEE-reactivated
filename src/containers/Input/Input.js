import React from "react";
import { connect } from "react-redux";
import "./Input.scss";

import CurrentStats from "./CurrentStats/CurrentStats";
import InitialInput from "./IntitialInputs/InitialInput";
import CompactView from "./CompactView/CompactView";

import InputColumn from "../../components/Input/InputColumn/InputColumn";
import WeekLabel from "../../components/Input/WeekLabel/WeekLabel";
import InputColumnWrapper from "../../components/Input/InputColumnWrapper/InputColumnWrapper";
import AddWeekBtn from "./AddWeekBtn/AddWeekBtn";

const Input = props => {
  const { isCompactView } = props;

  const inputPanels = isCompactView ? (
    <CompactView />
  ) : (
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
      {inputPanels}
      <AddWeekBtn />
      <WeekLabel />
    </section>
  );
};

const mapStateToProps = state => {
  return {
    isCompactView: state.calculator.isCompactView
  };
};

export default connect(mapStateToProps)(Input);
