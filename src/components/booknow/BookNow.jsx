import React from "react";
import "./BookNow.css";

const BookNow = () => {
  return (
    <div className="booknow section-space side-space" id="appointment">
      <div>

        <div className="text-center booknow-heading">
          <p>We Would Be Happy To Help You</p>
        </div>

        <form>

          <div className="input-fields">

            <input type="text" placeholder="Full Name*" className="form-control" />

            <input type="number" placeholder="Contact Number*" className="form-control" />

            <select className="form-control">
              <option>Select Location</option>
              <option>Nashik</option>
              <option>Pune</option>
            </select>

            <select className="form-control">
              <option>Select Doctor</option>
              <option>Dr. Shripal Shah</option>
              <option>Dr. Dhananjay Duberkar</option>
              <option>Dr. Sumant Biyani</option>
              <option>Dr. Amit Yeole</option>
             
            </select>

          </div>

          <div className="text-center mt-4">
            <button type="button" className="book-btn">
              Book A Consultation Now
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};

export default BookNow;