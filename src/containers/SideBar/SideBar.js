import React from "react";
import "./SideBar.scss";

import Clock from "../../components/SideBar/Clock/Clock";
import Auth from "../../components/SideBar/Auth/Auth";
import Donate from "../../components/SideBar/Donate/Donate";

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
