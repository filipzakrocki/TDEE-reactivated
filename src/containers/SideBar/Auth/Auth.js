import React, { useState } from "react";
import { connect } from "react-redux";
import { auth, setPathRedirect } from "../../../store/actions/index";
import "./Auth.scss";

const Auth = props => {
  // eslint-disable-next-line
  const { loading, error, isAuthenticated, onAuth, setPathRedirect } = props;

  const [isSignup, setIsSignup] = useState(true);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onAuthHandler = event => {
    onAuth(email, password, isSignup);
  };

  const form = isSignup ? (
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
        <button onClick={() => onAuthHandler()}>Register</button>
        <button onClick={() => setIsSignup(!isSignup)}>Switch</button>
      </div>
    </div>
  ) : (
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
        <button onClick={() => onAuthHandler()}>Log in</button>
        <button onClick={() => setIsSignup(!isSignup)}>Switch</button>
      </div>
    </div>
  );

  return form;
};

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.idToken !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password, isSignup) =>
      dispatch(auth(email, password, isSignup)),
    onSetAuthRedirectPath: () => dispatch(setPathRedirect("/"))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
