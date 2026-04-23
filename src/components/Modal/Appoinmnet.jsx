import React from "react";
import "./Appoinmnet.css";

const AppointmentModal = ({ show, handleClose }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div
        className="modal-box"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={handleClose}>x</button>

        <h2>Book An Appointment</h2>

        <form>
          <input type="text" placeholder="Enter full name*" />
          <input type="text" placeholder="Enter mobile number*" />

          <select>
             <option>Select Location</option>
              <option>Nashik</option>
              <option>Pune</option>
            
          </select>

          <select>
           <option>Select Doctor</option>
              <option>Dr. Shripal Shah</option>
              <option>Dr. Dhananjay Duberkar</option>
              <option>Dr. Sumant Biyani</option>
              <option>Dr. Amit Yeole</option>
          </select>

          <button type="submit" className="submit-btn">
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentModal;