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
  const [email, setEmail] = useState("fitness@fitness.pl");
  const [password, setPassword] = useState("fitness");

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

  let form = null;

  if (isAuthenticated) {
    form = (
      <div className="Auth">
        <h1>Logged in!</h1>
        <button onClick={() => onLogoutHandler()}>Log out</button>
      </div>
    );
  } else if (isSignup) {
    form = (
      <div className="Auth">
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
            placeholder="password"
            type="text"
          />
          <input placeholder="repeat password" type="text" />
        </div>
        <div>
          <button onClick={() => onAuthHandler()}>Register me!</button>
          <button onClick={() => setIsSignup(!isSignup)}>Switch to Login</button>
        </div>
      </div>
    );
  } else {
    form = (
      <div className="Auth">
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
        <div>
          <button onClick={() => onAuthHandler()}>Log me in</button>
          <button onClick={() => setIsSignup(!isSignup)}>Signup</button>
        </div>
      </div>
    );
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
