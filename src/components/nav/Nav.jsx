import React from "react";

import "./Nav.css";

const Nav = () => {
  return (
    <div className="Nav__container">
      <ul>
        <li style={{ marginLeft: "2rem" }}>
          <i class="fa-brands fa-instagram"></i>
        </li>
        <li>
          <a href="https://github.com/yohannesjoya" target={"_blank"}>
            <i class="fa-brands fa-github"></i>
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.linkedin.com/in/yodege/">
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
