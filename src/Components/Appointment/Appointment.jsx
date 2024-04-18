import React from "react"; 
import "./Appointment.css"; 

const Appointment = () => {
  return (
    <div className="appointment-page">
      <p>"A Women who cuts her hairs is about to change her life"</p>
      <div className="owner-name">
        <h2>-Seren Leuer</h2>
      </div>
      <a href="/appointment" className="appointment-button">
      APPOINTMENT
      </a>
    </div>
  );
};

export default Appointment;
