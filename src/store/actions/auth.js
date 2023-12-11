import * as actionTypes from "./actionTypes";
import axios from "axios";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = (idToken, localId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: idToken,
    localId: localId
  };
};

export const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
};

export const logOut = () => {
  localStorage.removeItem("state");
  localStorage.removeItem("idToken");
  localStorage.removeItem("expirationDate");
  localStorage.removeItem("serverStateTimestamp");
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};

export const checkAuthTimeout = expirationTime => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logOut());
    }, expirationTime * 1000);
  };
};

export const setPathRedirect = path => {
  return {
    type: actionTypes.SET_AUTH_REDIRECT,
    path: path
  };
};

export const auth = (email, password, isSignup) => {
  return dispatch => {
    //... authenticate user
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true
    };
    let url = isSignup
      ? "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA4HYKs2DfID24rFu9iBftSXa9w8QnSE4A"
      : "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA4HYKs2DfID24rFu9iBftSXa9w8QnSE4A";
    axios
      .post(url, authData)
      .then(response => {
        const expirationDate = new Date(
          new Date().getTime() + response.data.expiresIn * 1000
        );
        console.log(expirationDate)
        localStorage.setItem("idToken", response.data.idToken);
        localStorage.setItem("localId", response.data.localId);
        localStorage.setItem("expirationDate", expirationDate);

        //CONDITIONALLY ONLY ON LOGIN
        if (!isSignup) {
          const stateRequest = axios.get(
            `https://tdee-fit.firebaseio.com/states/${response.data.localId}.json?auth=${response.data.idToken}&uid=${response.data.localId}`
          );
          const serverTimeStampRequest = axios.get(
            `https://tdee-fit.firebaseio.com/manualStates/${response.data.localId}/timeStamp.json?auth=${response.data.idToken}&uid=${response.data.localId}`
          );
          Promise.all([stateRequest, serverTimeStampRequest])
            .then(([stateResult, serverTimeStampResult]) => {
              console.log(stateResult);
              console.log(serverTimeStampResult);
              localStorage.setItem("state", JSON.stringify(stateResult.data));
              if (serverTimeStampResult.data)
                localStorage.setItem(
                  "serverStateTimestamp",
                  serverTimeStampResult.data
                );
            })
            .then(res => window.location.reload());
        }

        dispatch(authSuccess(response.data.idToken, response.data.localId));
        dispatch(checkAuthTimeout(response.data.expiresIn));
      })
      .catch(error => {
        dispatch(authFail(error.response.data.error.message));
      });
  };
};

export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem("idToken");
    if (!token) {
      dispatch(logOut());
    } else {
      const expirationDate = new Date(localStorage.getItem("expirationDate"));
      if (expirationDate <= new Date()) {
        dispatch(logOut());
      } else {
        const userId = localStorage.getItem("localId");
        dispatch(authSuccess(token, userId));
        dispatch(
          checkAuthTimeout(
            (expirationDate.getTime() - new Date().getTime()) / 1000
          )
        );
      }
    }
  };
};
