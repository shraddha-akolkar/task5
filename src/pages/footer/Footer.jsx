import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";

const Footer = () => {
  return (

    <div>
      <footer className="footer section-space">
        <div className="side-space">
          <div className="row align-items-center gy-2">

            <div className="col-12 col-lg-6 text-center text-lg-start">
              <p className="footer-left mb-0">
                Copyright {new Date().getFullYear()}, All Rights Reserved with Sahyadri Hospitals, Pune.
              </p>
            </div>

            <div className="col-12 col-lg-6 text-center text-lg-end">
              <div className="footer-right">
                <a href="#">Privacy Policy</a>
                <span className="divider"> | </span>
                <a href="#">Medical Disclaimer</a>
              </div>
            </div>

          </div>
        </div>
      </footer>

   
      <div className="mobile-cta">
        <a  className="cta-btn bottom-btn call">
          Call Now
        </a>
        <a  className="cta-btn bottom-btn book">
          Book Now
        </a>
      </div>
    </div>
  );
};

export default Footer;