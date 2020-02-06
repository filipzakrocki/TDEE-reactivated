import React from "react";
import { connect } from "react-redux";
import "./SideBar.scss";

import Clock from "../../components/SideBar/Clock/Clock";
import Donate from "../../components/SideBar/Donate/Donate";

import Auth from "./Auth/Auth";

import Debug from "../../debug/debug";

const SideBar = props => {
  const {
    startDate,
    startWeight,
    avgWeight,
    isWeightLoss,
    isMetricSystem
  } = props;

  return (
    <section className={"sideBar"}>
      <Clock
        startDate={startDate}
        startWeight={startWeight}
        avgWeight={avgWeight}
        isWeightLoss={isWeightLoss}
        isMetricSystem={isMetricSystem}
      />
      <Debug />
      <Auth />
      <Donate />
    </section>
  );
};

const mapStateToProps = state => {
  return {
    startDate: state.calculator.startDate,
    startWeight: state.calculator.startWeight,
    avgWeight: state.calculator.avgWeight,
    isWeightLoss: state.calculator.isWeightLoss,
    isMetricSystem: state.calculator.isMetricSystem
  };
};

export default connect(mapStateToProps)(SideBar);
