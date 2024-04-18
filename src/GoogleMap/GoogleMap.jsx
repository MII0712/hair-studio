import React from "react";

function GoogleMaps() {
  return (
    <>
      <div className="responsive-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.585783312122!2d72.66764620000001!3d23.00225449999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e877c0cf53eb1%3A0xaa25a63db968adbc!2sSanidhya%20Arcade!5e0!3m2!1sen!2sin!4v1713159984000!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ height: "60vh", width: "100vw" }}
        ></iframe>
      </div>
    </>
  );
}

export default GoogleMaps;
