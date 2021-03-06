import React from "react";
import { connect } from "react-redux";
import "./Input.scss";

import CurrentStats from "./CurrentStats/CurrentStats";
import InitialInput from "./IntitialInputs/InitialInput";
import CompactView from "./CompactView/CompactView";

import InputColumn from "../../components/Input/InputColumn/InputColumn";
import WeekLabel from "../../components/Input/WeekLabel/WeekLabel";
import InputColumnWrapper from "../../components/Input/InputColumnWrapper/InputColumnWrapper";
import MiddlePanel from "./MiddlePanel/MiddlePanel";

const Input = props => {
  const {
    isCompactView,
    tdee,
    dailyKcalChange,
    weeklyChange,
    isMetricSystem,
    isWeightLoss,
    avgWeight,
    goalWeight,
    startWeight
  } = props;

  return (
    <section className="input">
      <div className={isCompactView ? "" : "hidden"}>
        <CompactView
          tdee={tdee}
          dailyKcalChange={dailyKcalChange}
          weeklyChange={weeklyChange}
          isMetricSystem={isMetricSystem}
          isWeightLoss={isWeightLoss}
          avgWeight={avgWeight}
          goalWeight={goalWeight}
          startWeight={startWeight}
        />
      </div>
      <div className={isCompactView ? "hidden" : ""}>
        <InputColumnWrapper>
          <InputColumn>
            <InitialInput />
          </InputColumn>
          <InputColumn>
            <CurrentStats />
          </InputColumn>
        </InputColumnWrapper>
      </div>
      <MiddlePanel />
      <WeekLabel />
    </section>
  );
};

const mapStateToProps = state => {
  return {
    isCompactView: state.calculator.isCompactView,
    tdee: state.calculator.tdee,
    dailyKcalChange: state.calculator.dailyKcalChange,
    weeklyChange: state.calculator.weeklyChange,
    isMetricSystem: state.calculator.isMetricSystem,
    isWeightLoss: state.calculator.isWeightLoss,
    avgWeight: state.calculator.avgWeight,
    goalWeight: state.calculator.goalWeight,
    startWeight: state.calculator.startWeight
  };
};

export default connect(mapStateToProps)(Input);
