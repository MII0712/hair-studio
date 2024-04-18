import React from "react";
import "./NavBar.css";
import logo from "../../Assets/signature.png"; 

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="links">
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Our Team</a>
        <a href="#">Prices</a>
        <a href="#">Contact Us</a>
      </div>
    </div>
  );
}

export default Navbar;
