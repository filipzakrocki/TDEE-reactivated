import React from "react";
import { connect } from "react-redux";
import "./SideBar.scss";
import axios from "axios";

import Clock from "../../components/SideBar/Clock/Clock";
import Donate from "../../components/SideBar/Donate/Donate";
import SaveMenu from "../../components/SideBar/SaveMenu/SaveMenu";
import Faq from "../../components/SideBar/Faq/Faq";
import Auth from "./Auth/Auth";

const SideBar = props => {
  const {
    startDate,
    startWeight,
    avgWeight,
    isWeightLoss,
    isMetricSystem,
    state,
    user,
    token,
    isAuthenticated,
    toggleFaq
  } = props;

  //Save Menu handlers
  const saveToLocalHandler = () => {
    localStorage.setItem("localState", JSON.stringify(state));
  };

  const loadFromLocalHandler = () => {
    const localState = localStorage.getItem("localState");
    localStorage.setItem("state", localState);
    window.location.reload();
  };

  const saveToServerHandler = () => {
    let address = `https://tdee-fit.firebaseio.com/manualStates/${user}.json?auth=${token}`;
    axios.put(address, state).then(res => console.log("SUCCESS"));
  };

  const loadFromServerHandler = () => {
    let address = `https://tdee-fit.firebaseio.com/manualStates/${user}.json`;
    axios
      .get(address)
      .then(res => localStorage.setItem("state", JSON.stringify(res.data)))
      .then(res => window.location.reload());
  };

  return (
    <section className={"sideBar"}>
      <Clock
        startDate={startDate}
        startWeight={startWeight}
        avgWeight={avgWeight}
        isWeightLoss={isWeightLoss}
        isMetricSystem={isMetricSystem}
      />

      <SaveMenu
        user={user}
        saveToLocalHandler={saveToLocalHandler}
        loadFromLocalHandler={loadFromLocalHandler}
        saveToServerHandler={saveToServerHandler}
        loadFromServerHandler={loadFromServerHandler}
        isAuthenticated={isAuthenticated}
        toggleFaq={toggleFaq}
      />
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
    isMetricSystem: state.calculator.isMetricSystem,
    state: state.calculator,
    user: state.auth.localId,
    isAuthenticated: state.auth.localId !== null,
    token: state.auth.idToken
  };
};

export default connect(mapStateToProps)(SideBar);
