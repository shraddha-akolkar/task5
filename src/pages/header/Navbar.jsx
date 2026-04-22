import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.webp";
import Phone from "../../assets/svg/Phone";
import Calender from "../../assets/svg/Calender";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

        
          <div className="col-8 col-lg-3">
            <img src={logo} alt="logo" className="nav-logo" />
          </div>

          <div className="col-lg-5 d-none d-lg-block">
            <ul className="nav-menu">
              <li className="active" href="#appointment">Appointment</li>
              <li href="#treatments">Treatments</li>
              <li href="#doctors">Doctors</li>
              <li href="#why-us">Why Us?</li>
            </ul>
          </div>

        
          <div className="col-lg-4 d-none d-lg-block">
            <div className="nav-actions">
              <button className="book-btnn"><Calender/>Book Appointment</button>
              <button className="call-btn"><Phone /> Call Now</button>
            </div>
          </div>

       
          <div className="col-4 d-lg-none d-flex justify-content-end">
            <button
              className={`hamburger ${menuOpen ? "open" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

        </div>
      </div>

   
      <div className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`}>
        <ul className="mobile-nav-menu">
          <li className="active" onClick={() => setMenuOpen(false)}>Appointment</li>
          <li onClick={() => setMenuOpen(false)}>Treatments</li>
          <li onClick={() => setMenuOpen(false)}>Doctors</li>
          <li onClick={() => setMenuOpen(false)}>Why Us?</li>
        </ul>
        <div className="mobile-nav-actions">
          <button className="book-btnn w-100">Book Appointment</button>
          <button className="call-btn w-100">Call Now</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;