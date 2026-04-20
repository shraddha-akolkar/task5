import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer side-space section-space">
      <div className="container-fluid ">
        <div className="row align-items-center">
          
          <div className="col-md-6 col-12 ">
            <p className="footer-left mb-0">
              Copyright 2026, All Rights Reserved with Sahyadri Hospitals, Pune.
            </p>
          </div>

         <div className="col-md-6 col-12 text-md-end text-center">
  <div className="footer-right">
    <a href="#">Privacy Policy</a>
    <span className="mx-2">|</span>
    <a href="#">Medical Disclaimer</a>
  </div>
</div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;