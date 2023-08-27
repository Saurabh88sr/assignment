import React from "react";
import logo from "../image/logo.svg";
import bellicon from "../image/bellicon.svg";

const Header = () => {
  return (
    <div className="nav">
      <img src={logo} alt="Logo" />
      <ul>
        <li>
          <label htmlFor="Filters">Filters</label>
          <select name="Filter" id="Filters"></select>
        </li>
        <li>About Us</li>
        <li>Blog</li>
      </ul>
      <a href="/" class="icon-button"><img className="bell" src={bellicon} alt="Bell Icon" /></a>
    </div>
  );
};

export default Header;
