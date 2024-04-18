import React from "react";
import "./Prices.css"; 

const PricesPage = () => {
  return (
    <div className="prices-page">
      <h1>PRICES</h1>
      <p className="category">
        Our stylists are trained in a wide variety of skills and techniques.Our continuing eduction program ensures our entire team is constantly up-to-date on trends in the U.S. and around the world.
      </p>
      <div className="grid-container">
        <div className="grid-item">
          <p>For men - $26+</p>
        </div>
        <div className="grid-item">
          <p>For women - $40+</p>
        </div>
        <div className="grid-item">
          <p>For children - $20+</p>
        </div>
        <div className="grid-item">
          <p>DevaCuts - $95+</p>
        </div>
        <div className="grid-item">
          <p>Hydrating Cuts - $58+</p>
        </div>
        <div className="grid-item">
          <p>Colorize - $200+</p>
        </div>
      </div>
    </div>
  );
};

export default PricesPage;
