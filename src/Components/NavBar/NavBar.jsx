import React, { useState } from "react";
import "./NavBar.css";
import logo from "../../Assets/signature.png";
import { IoMenu } from "react-icons/io5";

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className={isActive ? "links active" : "links"}>
        <a href="#hero">Home</a>
        <a href="#about">About Us</a>
        <a href="#team">Our Team</a>
        <a href="#prices">Prices</a>
        <a href="#contact">Contact Us</a>
      </div>
        <IoMenu className="IoMenu" onClick={toggleMenu}/>
    </div>
  );
}

export default Navbar;
