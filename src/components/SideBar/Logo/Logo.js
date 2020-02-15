import React from "react";
import "./Logo.scss";

import LogoImg from "../../../assets/Logo/tdeefitwh.png";

const Logo = () => {
  return (
    <div className={"logoimg-wrapper"}>
      <img alt="logoimg" className={"logoimg"} src={LogoImg} />
    </div>
  );
};

export default Logo;
