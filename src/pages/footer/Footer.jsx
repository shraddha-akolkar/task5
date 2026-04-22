import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";

const Footer = () => {
  return (
 <footer className="footer side-space section-space">
  <div>

    <div className="row align-items-center gy-2">

  
      <div className="col-12 col-md-6">
        <p className="footer-left mb-0 text-center text-md-start">
          Copyright {new Date().getFullYear()}, All Rights Reserved with Sahyadri Hospitals, Pune.
        </p>
      </div>

     
      <div className="col-12 col-md-6">
        <div className="footer-right text-center text-md-end">
          <a href="#">Privacy Policy</a>
          <span className="divider">|</span>
          <a href="#">Medical Disclaimer</a>
        </div>
      </div>

    </div>

  </div>
</footer>
  );
};

export default Footer;