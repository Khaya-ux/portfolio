import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
const Navbar = () => {
  return (
    <div class="navbar">
      <img src={logo} alt="Logo" class="logo" />
      <ul className="nav-menu">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      <div className="nav-connect">connect with me</div>
    </div>
  );
};

export default Navbar;
