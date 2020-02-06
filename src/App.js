import React, { useEffect } from "react";
import axios from "axios";
import "./App.scss";

import { connect } from "react-redux";
import { authCheckState } from "./store/actions/index";

import Input from "./containers/Input/Input";
import Result from "./containers/Result/Result";
import SideBar from "./containers/SideBar/SideBar";

function App(props) {
  const { state, user, isAuthenticated, onTryAutoSignup } = props;

  useEffect(() => {
    onTryAutoSignup();
  });

  useEffect(() => {
    if (isAuthenticated) {
      saveStateToFirebase(user, state);
    } else {
      saveStateToLocalStorage();
    }
    // eslint-disable-next-line
  }, [state]);

  const saveStateToFirebase = user => {
    if (user) {
      try {
        const address = `https://tdee-fit.firebaseio.com/states/${user}.json`;
        axios.patch(address, state);
        console.log("ENTRY UPDATED");
      } catch (err) {
        console.log("ENTRY FAILED " + err);
      }
    }
  };

  const saveStateToLocalStorage = () => {
    localStorage.setItem('state', JSON.stringify(state))
  };

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
    user: state.auth.localId,
    isAuthenticated: state.auth.idToken !== null,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(authCheckState())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
