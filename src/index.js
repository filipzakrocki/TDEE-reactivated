import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

//reducers
import calculatorReducer from "./store/reducers/calculator";
import authReducer from "./store/reducers/auth";

import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";

//thunk optional for now
import ReduxThunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  calculator: calculatorReducer,
  auth: authReducer
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(ReduxThunk))
);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

serviceWorker.unregister();
