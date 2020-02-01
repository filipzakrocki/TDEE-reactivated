import React, { useEffect } from "react";
import "./App.scss";

import { connect } from "react-redux";

import Input from "./containers/Input/Input";
import Result from "./containers/Result/Result";
import SideBar from "./containers/SideBar/SideBar";

function App(props) {
  useEffect(() => {
    window.localStorage.setItem("state", JSON.stringify(props.state));
  }, [props.state]);

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
    state: state.calculator
  };
};

export default connect(mapStateToProps)(App);
