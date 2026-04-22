import React from "react";
import "./BookNow.css";
import Arrow from "../../assets/svg/Arrow";

const BookNow = () => {
  return (
    <div className="booknow section-space side-space">
      <div>

        <div className="text-center booknow-heading">
          <p>We Would Be Happy To Help You</p>
        </div>

        <form>

          <div className="row g-3">

            <div className="col-lg-3">
              <input type="text" placeholder="Full Name*" className="form-control" />
            </div>

            <div className="col-lg-3">
              <input type="number" placeholder="Contact Number*" className="form-control" />
            </div>

            <div className="col-lg-3">
              <select className="form-control">
                <option>Nashik</option>
                <option>Pune</option>
              </select>
            </div>

            <div className="col-lg-3">
              <select className="form-control">
              

                <option>Dr. Shripal Shah</option>
                <option>Dr. ABC</option>
              </select>
            </div>

          </div>

          <div className="row mt-3">
            <div className="col-12 text-center">
              <button type="button" className="book-btn">
                Book A Consultation Now
              </button>
            </div>
          </div>

        </form>

      </div>
    </div>
  );
};

export default BookNow;