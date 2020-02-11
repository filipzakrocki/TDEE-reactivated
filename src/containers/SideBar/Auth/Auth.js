import React, { useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { auth, setPathRedirect, logOut } from "../../../store/actions/index";
import "./Auth.scss";

const Auth = props => {
  // eslint-disable-next-line
  const {
    user,
    loading,
    error,
    isAuthenticated,
    onAuth,
    logOut,
    setPathRedirect
  } = props;

  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const onAuthHandler = event => {
    onAuth(email, password, isSignup);
  };

  const onLogoutHandler = () => {
    logOut();
    window.location.reload();
  };

  const loadState = user => {
    let address = `https://tdee-fit.firebaseio.com/states/${user}.json`;
    axios
      .get(address)
      .then(res => localStorage.setItem("state", JSON.stringify(res.data)))
      .then(res => window.location.reload());
  };

  const passwordReset = () => {
    const address = `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyA4HYKs2DfID24rFu9iBftSXa9w8QnSE4A`;
    const payload = {
      requestType: "PASSWORD_RESET",
      email: email
    };
    axios.post(address, payload);
  };

  const formWhenAuthenticated = (
    <div className="auth">
      <h4>Logged in!</h4>
      <button onClick={() => onLogoutHandler()}>Log out</button>
    </div>
  );

  const signupForm = (
    <div className="auth">
      <h4>Signup</h4>
      <div>
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="email"
          type="text"
        />
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="password (min. 6 characters)"
          type="password"
        />
        <input
          value={passwordCheck}
          onChange={e => setPasswordCheck(e.target.value)}
          placeholder="repeat password"
          type="password"
        />
      </div>
      <div className={"buttonWrapper"}>
        <button onClick={() => setIsSignup(!isSignup)}>Switch to Login</button>
        <button
          disabled={password !== passwordCheck || password.length < 6}
          onClick={() => onAuthHandler()}
        >
          Register me!
        </button>
      </div>
    </div>
  );

  const loginForm = (
    <div className="auth">
      <h4>Login</h4>
      <div>
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="email"
          type="text"
        />
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="password"
          type="text"
        />
      </div>
      <div className={"buttonWrapper"}>
        <button disabled={!email || password} onClick={() => passwordReset()}>
          Password Reset
        </button>
        <button onClick={() => setIsSignup(!isSignup)}>Switch to Signup</button>
        <button onClick={() => onAuthHandler()}>Log me in!</button>
      </div>
    </div>
  );

  let form = null;
  if (isAuthenticated) {
    form = formWhenAuthenticated;
  } else if (isSignup) {
    form = signupForm;
  } else {
    form = loginForm;
  }

  return form;
};

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.idToken !== null,
    user: state.auth.localId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password, isSignup) =>
      dispatch(auth(email, password, isSignup)),
    logOut: () => dispatch(logOut()),
    onSetAuthRedirectPath: () => dispatch(setPathRedirect("/"))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
