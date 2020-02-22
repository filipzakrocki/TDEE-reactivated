import React, { useState } from "react";
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

  const [localStateTimestamp] = useState(
    localStorage.getItem("localStateTimestamp") || `---`
  );

  const [serverStateTimestamp] = useState(
    localStorage.getItem("serverStateTimestamp") || `---`
  );

  return (
    <div className="saveMenu">
      <button onClick={saveToLocalHandler}>Save to Local</button>
      <button onClick={loadFromLocalHandler}>
        <p>Load from Local</p>
        <p className="saveLabel">{localStateTimestamp}</p>
      </button>
      <button
        disabled={!isAuthenticated}
        title={!isAuthenticated ? "Log in to use" : ""}
        onClick={saveToServerHandler}
      >
        Save to Server
      </button>
      <button
        disabled={!isAuthenticated}
        title={!isAuthenticated ? "Log in to use" : ""}
        onClick={loadFromServerHandler}
      >
        <p>Load from Server</p>
        <p className="saveLabel">{serverStateTimestamp}</p>
      </button>
      <button onClick={toggleFaq}>FAQ</button>
      <button onClick={toggleFaq}>Clear all Saved Information</button>
    </div>
  );
};

export default SaveMenu;
