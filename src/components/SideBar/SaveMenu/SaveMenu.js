import React from "react";
import "./SaveMenu.scss";

const SaveMenu = props => {
  const {
    saveToLocalHandler,
    loadFromLocalHandler,
    saveToServerHandler,
    loadFromServerHandler,
    isAuthenticated,
    toggleFaq
  } = props;

  return (
    <div className="saveMenu">
      <button onClick={saveToLocalHandler}>Save to Local</button>
      <button onClick={loadFromLocalHandler}>Load from Local</button>
      <button disabled={!isAuthenticated} onClick={saveToServerHandler}>
        Save to Server
      </button>
      <button disabled={!isAuthenticated} onClick={loadFromServerHandler}>
        Load from Server
      </button>
      <button onClick={toggleFaq}>FAQ</button>
    </div>
  );
};

export default SaveMenu;
