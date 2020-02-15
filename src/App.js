import React, { useEffect, useState } from "react";
import axios from "axios";
import mfp from "mfp";
import "./App.scss";

import { connect } from "react-redux";
import { authCheckState } from "./store/actions/index";

import Input from "./containers/Input/Input";
import Result from "./containers/Result/Result";
import SideBar from "./containers/SideBar/SideBar";

import Faq from "./components/SideBar/Faq/Faq";

function App(props) {
  const { state, user, token, isAuthenticated, onTryAutoSignup } = props;

  useEffect(() => {
    onTryAutoSignup();
    // eslint-disable-next-line
  });

  useEffect(() => {
    if (isAuthenticated) {
      saveStateToFirebase(user, state, token);
    }
    saveStateToLocalStorage();
    // eslint-disable-next-line
  }, [state]);

  mfp.fetchSingleDate("sxerrs", "2020-02-15", ["calories"], data => {
    console.log("MFP operational");
    console.log(data);
  });

  const [faqOpened, toggleFaq] = useState(false);

  const saveStateToFirebase = (user, state, token) => {
    if (user) {
      try {
        const address = `https://tdee-fit.firebaseio.com/states/${user}.json?auth=${token}`;
        axios.patch(address, state);
      } catch (err) {}
    }
  };

  const saveStateToLocalStorage = () => {
    localStorage.setItem("state", JSON.stringify(state));
  };

  return (
    <div className="App">
      {faqOpened && <Faq toggleFaq={() => toggleFaq(false)} />}
      <div className="side-bar">
        <SideBar toggleFaq={() => toggleFaq(!faqOpened)} />
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
    token: state.auth.idToken,
    isAuthenticated: state.auth.idToken !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(authCheckState())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
