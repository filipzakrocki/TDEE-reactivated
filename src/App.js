import React, { useEffect } from "react";
import axios from "axios";
import "./App.scss";

import { connect } from "react-redux";

import Input from "./containers/Input/Input";
import Result from "./containers/Result/Result";
import SideBar from "./containers/SideBar/SideBar";

function App(props) {
  const { state, user } = props;

  useEffect(() => {
    window.localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  return (
    <div className="App">
      <div className="side-bar">
        <SideBar />
      </div>
      <div className="main-window">
        <Input />
        <Result />
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    state: state.calculator,
    user: state.auth.localId
  };
};

export default connect(mapStateToProps)(App);
