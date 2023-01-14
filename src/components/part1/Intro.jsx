import React from "react";
import "./Intro.css";

import circle from "../../assets/circle.svg";
import { pp5, web } from "../../assets/images";
const Intro = () => {
  return (
    <div className="intro__wrapper">
      <img src={pp5} className="intro__wrapper-pp" />
      <div className="intro__wrapper-intro">
        <div>
          <span>👋</span>
        </div>
        <div>
          <p>Hello, I am</p>
          <h1>Yohannes</h1>
        </div>
      </div>

      <img className="blob" src={circle} alt="" srcset="" />
      <div className="intro__wrapper-jobs">
        <img src={web} alt="" /> <p>Web Developer</p>
      </div>
    </div>
  );
};

export default Intro;
