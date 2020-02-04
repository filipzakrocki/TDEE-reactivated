import React from "react";
import "./SideBar.scss";

import Clock from "../../components/SideBar/Clock/Clock";
import Donate from "../../components/SideBar/Donate/Donate";

import Auth from "./Auth/Auth";

import Debug from "../../debug/debug";

const SideBar = () => {
  return (
    <section className={"sideBar"}>
      <Clock />
      <Debug />
      <Auth />
      <Donate />
    </section>
  );
};

export default SideBar;
