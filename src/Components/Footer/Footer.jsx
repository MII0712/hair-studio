import React from "react";
import "./Footer.css"; 
import footer_logo from "../../Assets/signature.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="left">
        <div className="contact-details">
          <h4>Contact Us</h4>
          <p>Phone: 123-456-7890</p>
          <p>Email: info@hairstudio.com</p>
        </div>
        <div className="contact-details">
          <h4>Address</h4>
          <p>123 Main Street, City</p>
        </div>
      </div>
      <div className="right">
        <img src={footer_logo} alt="Hair Studio" />
      </div>
    </footer>
  );
};

export default Footer;
