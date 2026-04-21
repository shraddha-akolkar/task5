import React from 'react'
import "./Choose.css"
import dr1 from "../../assets/images/chooseimg1.webp"
const Choose = () => {
  return (
   <div className="choose side-space section-space">
  <div className="container-fluid choose-wrapper">


    <div className="choose-left-section">
      <h2 className='section-title'>
        Why Patients Choose <span>Sahyadri?</span>
      </h2>

      <p>Sahyadri Hospitals is trusted as one of the <strong>best neurology hospitals in Nashik</strong>,We offer expert care for stroke, epilepsy, migraine, Parkinson’s, dementia, spine disorders, and neuromuscular diseases. Every patient receives personalised treatment based on their symptoms, medical history, and recovery goals.</p>
      <p>Our International and Local Patient Services team helps you connect with the right neurologist in Nashik, provides transparent cost estimates, and assists with appointments, diagnostics, hospital processes, and rehabilitation planning.</p>
      <p>With advanced neurodiagnostic technology <strong>the best neurologists in Nashik</strong>, and a strong patient-first approach, Sahyadri ensures accurate diagnosis and effective treatment at every stage.</p>
      <p>Our team will help match you with the best specialists and most appropriate services</p>

      <ul className='two-col-list'>
        <li>Guidance to choose the right neurologist for your condition</li>
        <li>Transparent and affordable neurology treatment plans</li>
        <li>Complete support before, during, and after treatment</li>
        <li>Access to modern neuro-diagnostic and rehabilitation facilities</li>
      </ul>

      <button className="choose-btn">Book A Consultation Now</button>
    </div>

 
    <div className="right-section">
      <img src={dr1} alt="doctor" />
    </div>

  </div>
</div>
  )
}

export default Choose
