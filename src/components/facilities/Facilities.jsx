import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Facilities.css";

import fact from "../../assets/images/facilities.webp";

import fact1 from "../../assets/images/care1.svg";
import fact2 from "../../assets/images/care2.svg";
import fact3 from "../../assets/images/care3.svg";
import fact4 from "../../assets/images/care4.svg";

const dataLeft = [
  {
    icon: fact1,
    title: "Stroke Treatment and Neurocritical Care",
    desc: "Emergency stroke care with clot-busting medicines, ICU monitoring, and rehabilitation."
  },
  {
    icon: fact2,
    title: "Epilepsy Evaluation and Management",
    desc: "Detailed EEG, MRI imaging, and expert medication management."
  }
];

const dataRight = [
  {
    icon: fact3,
    title: "Advanced Neuro-Diagnostics",
    desc: "EMG, NCV, EEG, CT scan, MRI and advanced neurological testing."
  },
  {
    icon: fact4,
    title: "Neuro-Rehabilitation and Physiotherapy",
    desc: "Rehabilitation for stroke recovery, movement disorders, and balance issues."
  }
];

const Facilities = () => {
  return (
    <section className="facilities  side-space">
      <div>

      
        <h2 className="section-title text-center mb-5">
          <span>Neurology treatments</span> facilities
        </h2>

        <div className="row align-items-center g-4">

      
          <div className="col-12 col-lg-4">
            <div className="facility-col">
              {dataLeft.map((item, i) => (
                <div className="facility-card" key={i}>
                  <img src={item.icon} alt="" />
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

       
          <div className="col-12 col-lg-4 text-center">
            <div className="facility-image">
              <img src={fact} alt="doctor" />
            </div>
          </div>

      
          <div className="col-12 col-lg-4">
            <div className="facility-col">
              {dataRight.map((item, i) => (
                <div className="facility-card" key={i}>
                  <img src={item.icon} alt="" />
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Facilities;