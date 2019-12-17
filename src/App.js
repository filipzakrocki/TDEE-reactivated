import React from "react";
import "./App.scss";

import Input from "./containers/Input/Input";
import Result from "./containers/Result/Result";

import WeekLabel from "./components/WeekLabel/WeekLabel";

function App() {
  return (
    <div className="App">
      <Input />
      <Result />
    </div>
  );
}

export default App;
