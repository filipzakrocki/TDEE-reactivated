import React, { useEffect } from "react";
import "./App.scss";

import { connect } from "react-redux";

import Input from "./containers/Input/Input";
import Result from "./containers/Result/Result";

function App (props) {

  //saving to localStorage on any state change
  useEffect(() => {
    window.localStorage.setItem("state", JSON.stringify(props.state));
  }, [props.state]);



  return (
    <div className="App">
      <Input />
      <Result />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    state: state.calculator
  };
};

export default connect(mapStateToProps)(App);
