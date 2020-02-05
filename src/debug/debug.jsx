import React from "react";
import { connect } from "react-redux";
import axios from "axios";

const Debugg = props => {
  const { state, user } = props;

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
      <button
        style={{ width: "100%" }}
        onClick={() => {
          localStorage.clear();
          window.location.reload();
        }}
      >
        CLEAR THE STORAGE
      </button>
      <button style={{ width: "100%" }} onClick={() => console.log(state)}>
        CONSOLE.LOG THE STATE
      </button>
      <button style={{ width: "100%" }} onClick={() => saveState(state, user)}>
        SAVE STATE TO FIREBASE
      </button>
      <button style={{ width: "100%" }} onClick={() => loadState(user)}>
        LOAD STATE FROM FIREBASE
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    state: state.calculator,
    user: state.auth.localId
  };
};

// const mapDispatchToProps = dispatch => {
//   return {};
// };

export default connect(mapStateToProps, null)(Debugg);
