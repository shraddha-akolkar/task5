import React from "react";
import "./Choose.css";
import dr1 from "../../assets/images/chooseimg1.webp";

const Choose = () => {
  return (
    <section className="choose section-space side-space" id="why-us">
      <div>

        <div className="choose-wrapper">

          <div className="choose-left-section">

            <h2 className="section-title">
              Why Patients Choose <span>Sahyadri?</span>
            </h2>

            <div className="mobile-img">
              <img src={dr1} alt="doctor" />
            </div>

            <p>
              Sahyadri Hospitals is trusted as one of the <strong>best neurology hospitals in Nashik</strong>, we offer expert care for stroke, epilepsy, migraine, Parkinson’s, dementia, spine disorders, and neuromuscular diseases.
            </p>

            <p>
              Our International and Local Patient Services team helps you connect with the right neurologist in Nashik, provides transparent cost estimates, and assists with appointments, diagnostics, and rehabilitation planning.
            </p>

            <p>
              With advanced neurodiagnostic technology <strong>the best neurologists in Nashik</strong>, Sahyadri ensures accurate diagnosis and effective treatment.
            </p>

            <p>
              Our team will help match you with the best specialists and most appropriate services.
            </p>

            <ul className="choose-list">
              <li>Guidance to choose the right neurologist</li>
              <li>Transparent and affordable treatment plans</li>
              <li>Complete support before, during, and after treatment</li>
              <li>Access to modern diagnostic facilities</li>
            </ul>

            <button className="choose-btn">
              Book A Consultation Now
            </button>

          </div>

          <div className="right-section">
            <img src={dr1} alt="doctor" />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Choose;