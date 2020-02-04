import React from "react";
import "./Auth.scss";

const Auth = props => {
  return (
    <div className="Auth">
      <h4>Login</h4>
      <div>
        <input placeholder="email" type="text" />
        <input placeholder="password" type="text" />
        <input placeholder="repeat password" type="text" />
      </div>
      <div>
        <button>Register</button>
      </div>
    </div>
  );
};

export default Auth;
