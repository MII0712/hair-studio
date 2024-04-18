import React from "react";
import "./AboutUs.css";
import aboutus from '../../Assets/aboutus.png'

function AboutUs() {
  return (
    <div className="about-us-container">
      <div className="image-container">
        <img src={aboutus} alt="image-about"/>
      </div>
      <div className="content-container">
        <h1>About Us</h1>
        <p>
          Our carefully chosen and highly trained staff is here to exceed your
          expectations. The same goes for our elegant salon space – dedicated to
          guest comfort – and our devotion to innovation and artistry. We’re
          focused on making your day and continually raising the bar.
        </p>
        <p>
          Centrally located in the City of Temecula, Salon Charlotte Hair offers
          a variety of hair care, nail care, and skin care services that are
          delivered with kindness and professionalism. Family-owned and operated
          for over four decades, the atmosphere is warm, inviting, and
          professional. Salon Charlotte Hair strives to deliver timely,
          professional services with a flare for style and energy.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
