import React, { useState } from "react";
import { connect } from "react-redux";
import axios from "axios";

const Debugg = props => {
  const { state } = props;
  const [user, setUser] = useState("");

  const saveState = (userState, user) => {
    let address = `https://tdee-fit.firebaseio.com/states/${user}.json`;
    axios.put(address, userState).then(res => console.log("SUCCESS"));
  };

  const loadState = user => {
    let address = `https://tdee-fit.firebaseio.com/states/${user}.json`;
    axios
      .get(address)
      .then(res => localStorage.setItem("state", JSON.stringify(res.data)))
      .then(res => window.location.reload());
  };

  return (
    <div>
      <input type="text" value={user} onChange={e => setUser(e.target.value)} />
      <button onClick={() => localStorage.clear()}>CLEAR THE STORAGE</button>
      <button onClick={() => console.log(state)}>CONSOLE.LOG THE STATE</button>
      <button onClick={() => saveState(state, user)}>
        SAVE STATE TO FIREBASE
      </button>
      <button onClick={() => loadState(user)}>LOAD STATE FROM FIREBASE</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    state: state.calculator
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, null)(Debugg);
