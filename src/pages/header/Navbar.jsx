import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.webp";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar-wrapper ${scrolled ? "navbar-sticky" : ""}`}>
      <div>
        <div className="row align-items-center ">

       
          <div className="col-6 col-lg-3">
            <img src={logo} alt="logo" className="nav-logo" />
          </div>

        
          <div className="col-lg-5 d-none d-lg-block">
            <ul className="nav-menu">
              <li className="active">Appointment</li>
              <li>Treatments</li>
              <li>Doctors</li>
              <li>Why Us?</li>
            </ul>
          </div>

   
          <div className="col-6 col-lg-4">
            <div className="nav-actions">
              <button className="book-btnn">Book Appointment</button>
              <button className="call-btn">Call Now</button>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;