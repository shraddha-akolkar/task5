import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.webp";
import Phone from "../../assets/svg/Phone";
import Calender from "../../assets/svg/Calender";
import AppointmentModal from "../../components/Modal/Appoinmnet";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" ? window.innerWidth > 1024 : true
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const desktopView = window.innerWidth > 1024;
      setIsDesktop(desktopView);
      if (desktopView) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header className={`navbar-wrapper ${scrolled ? "navbar-sticky" : ""}`}>
        <div>
          <div className="row align-items-center">

         
            <div className="col-6 col-lg-3">
              <img src={logo} alt="logo" className="nav-logo" />
            </div>

         
            {isDesktop && (
              <div className="col-lg-5">
                <ul className="nav-menu">
                  <li><a href="#appointment">Appointment</a></li>
                  <li><a href="#treatments">Treatments</a></li>
                  <li><a href="#doctors">Doctors</a></li>
                  <li><a href="#why-us">Why Us?</a></li>
                </ul>
              </div>
            )}

          
            {isDesktop && (
              <div className="col-lg-4 ms-lg-auto">
                <div className="nav-actions">
                  <button
                    className="book-btnn"
                    onClick={() => setShowModal(true)}
                  >
                    <Calender /> Book Appointment
                  </button>

                  <button className="call-btn">
                    <Phone /> Call Now
                  </button>
                </div>
              </div>
            )}

        
            {!isDesktop && (
              <div className="col-6 ms-auto d-flex justify-content-end align-items-center gap-2">
                <button
                  className="book-btnn"
                  onClick={() => setShowModal(true)}
                >
                  <Calender /><span>Book</span>
                </button>

                <button className="call-btn">
                  <Phone />
                </button>

                <button
                  className={`hamburger ${menuOpen ? "open" : ""}`}
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            )}

          </div>
        </div>

   
        <div className={`mobile-menu ${!isDesktop && menuOpen ? "mobile-menu--open" : ""}`}>
          <ul className="mobile-nav-menu">
            <li onClick={() => setMenuOpen(false)}>Appointment</li>
            <li onClick={() => setMenuOpen(false)}>Treatments</li>
            <li onClick={() => setMenuOpen(false)}>Doctors</li>
            <li onClick={() => setMenuOpen(false)}>Why Us?</li>
          </ul>

          <div className="mobile-nav-actions">
            <button
              className="book-btnn w-100"
              onClick={() => {
                setShowModal(true);
                setMenuOpen(false);
              }}
            >
              Book Appointment
            </button>

            <button className="call-btn w-100">Call Now</button>
          </div>
        </div>
      </header>

  
      <AppointmentModal
        show={showModal}
        handleClose={() => setShowModal(false)}
      />
    </>
  );
};

export default Navbar;