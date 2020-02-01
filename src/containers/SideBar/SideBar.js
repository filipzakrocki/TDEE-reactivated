import React from "react";
import "./SideBar.scss";

import Clock from "../../components/SideBar/Clock/Clock";
import Auth from "../../components/SideBar/Auth/Auth";

import Debug from "../../debug/debug";

const SideBar = () => {
  return (
    <section className={"sideBar"}>
      <Clock />
      <Debug />
      <Auth />
    </section>
  );
};

export default SideBar;
