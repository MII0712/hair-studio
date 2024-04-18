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
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Our Team</a>
        <a href="#">Prices</a>
        <a href="#">Contact Us</a>
      </div>
        <IoMenu className="IoMenu" onClick={toggleMenu}/>
    </div>
  );
}

export default Navbar;
