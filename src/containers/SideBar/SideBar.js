import React from "react";
import { connect } from "react-redux";
import "./SideBar.scss";
import axios from "axios";

import Logo from "../../components/SideBar/Logo/Logo";
import Clock from "../../components/SideBar/Clock/Clock";
import Error from "../../components/SideBar/Error/Error";
import SaveMenu from "../../components/SideBar/SaveMenu/SaveMenu";
import Auth from "./Auth/Auth";
import Donate from "../../components/SideBar/Donate/Donate";

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
    const timeStamp = new Date().toUTCString();
    localStorage.setItem("localState", JSON.stringify(state));
    localStorage.setItem("localStateTimestamp", timeStamp);
    window.location.reload();
  };

  const loadFromLocalHandler = () => {
    const localState = localStorage.getItem("localState");
    if (localState) {
      localStorage.setItem("state", localState);
      window.location.reload();
    }
  };

  const saveToServerHandler = () => {
    const timeStamp = new Date().toUTCString();
    let address = `https://tdee-fit.firebaseio.com/manualStates/${user}.json?auth=${token}`;
    axios
      .put(address, { state, timeStamp })
      .then(res => localStorage.setItem("serverStateTimestamp", timeStamp))
      .then(res => window.location.reload())
      .catch(err => console.log(err));
  };

  const loadFromServerHandler = () => {
    let address = `https://tdee-fit.firebaseio.com/manualStates/${user}.json?auth=${token}`;
    axios
      .get(address)
      .then(res =>
        localStorage.setItem("state", JSON.stringify(res.data.state))
      )
      .then(res => window.location.reload())
      .catch(err => console.log(err));
  };

  const clearData = () => {
    let address = `https://tdee-fit.firebaseio.com/manualStates/${user}.json?auth=${token}`;
    axios
      .delete(address)
      .then(res => {
        localStorage.removeItem("localState");
        localStorage.removeItem("localStateTimestamp");
        localStorage.removeItem("state");
        localStorage.removeItem("serverStateTimestamp");
      })
      .then(res => window.location.reload())
      .catch(err => console.log(err));
  };

  return (
    <section className={"sideBar"}>
      <Logo />
      <Clock
        startDate={startDate}
        startWeight={startWeight}
        avgWeight={avgWeight}
        isWeightLoss={isWeightLoss}
        isMetricSystem={isMetricSystem}
      />
      <Error />
      <SaveMenu
        user={user}
        saveToLocalHandler={saveToLocalHandler}
        loadFromLocalHandler={loadFromLocalHandler}
        saveToServerHandler={saveToServerHandler}
        loadFromServerHandler={loadFromServerHandler}
        isAuthenticated={isAuthenticated}
        clearData={clearData}
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
