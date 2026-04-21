import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Care.css";

import img from "../../assets/images/care.webp";

import care1 from "../../assets/images/care1.svg"
import care2 from "../../assets/images/care2.svg"
import care3 from "../../assets/images/care3.svg"
import care4 from "../../assets/images/care4.svg"

const careData = [
  {
    icon: care1,
    title: "Collaborative Approach",
    desc: "Every treatment plan is finalised after discussion among neurologists, neurosurgeons, radiologists, physiotherapists, and rehabilitation specialists to ensure the best outcome for the patient."
  },
  {
      icon: care2,
    title: "Integrated Neurology Clinic",
    desc: "All neurological services are available under one roof including diagnostics, epilepsy monitoring, stroke care, spine evaluation, neuromuscular testing, and rehabilitation."
  },
  {
      icon: care3,
    title: "Rehabilitation Support",
    desc: "We provide physiotherapy, speech therapy, stroke rehab, gait training, and long-term neuro-rehabilitation to help patients regain function and independence."
  },
  {
      icon: care4,
    title: "Advanced Treatment Options",
    desc: "Patients receive access to the latest techniques for stroke management, epilepsy care, movement disorder treatment, neuroimmunology, and nerve and muscle testing."
  }
];

const Care = () => {
  return (
    <div className="neuro side-space section-space">
      <div className="container-fluid">

        <div className="row">

          {/* LEFT */}
          <div className="col-lg-6">
            <div className="row g-4 neuro-left">
              {careData.map((item, index) => (
                <div className="col-6" key={index}>
                  <div className="card-box">
                    <img src={item.icon} alt="" />
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}

              <div className="center-dot"></div>

            </div>
          </div>

          {/* RIGHT */}
          <div className="col-lg-6 neuro-right">
            <h2 className="section-title care-heading">
              <span>Sahyadri</span> Neurology Care
            </h2>
            <p className="sub">
              The Comprehensive Neurology Department at Sahyadri Hospital
            </p>

            <img src={img} alt="neuro" />
          </div>

        </div>

      </div>
    </div>
  );
};

export default Care;