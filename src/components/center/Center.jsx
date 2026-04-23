import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Center.css";

import img1 from "../../assets/images/center1.svg";
import img2 from "../../assets/images/center2.svg";
import img3 from "../../assets/images/center3.svg";
import img4 from "../../assets/images/center4.svg";
import img5 from "../../assets/images/center5.svg";


const Center = () => {
  return (
    <section className="center section-space side-space">
      <div>

        <div className="text-center center-top">
          <h2 className="section-title">
            Center At <span>Glance</span>
          </h2>
          <p className="center-desc">
            Our goal is to serve neurology patients with the best available
            treatments in an atmosphere of competence, compassion, and integrity.
          </p>
        </div>

<div className="row justify-content-center g-4">
          <div className="col-6 col-md-4 col-lg">
            <div className="center-item">
              <img src={img1} alt="" />
              <h4>State-of-the-Art Neurology and Stroke Facility</h4>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg">
            <div className="center-item">
              <img src={img2} alt="" />
              <h4>Neurology and Rehabilitation Daycare Available</h4>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg">
            <div className="center-item">
              <img src={img3} alt="" />
              <h4>Digital X-Ray, CT Scan, and MRI Facility</h4>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg">
            <div className="center-item">
              <img src={img4} alt="" />
              <h4>Expertise and Experience with 24x7 Support</h4>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg">
            <div className="center-item">
              <img src={img5} alt="" />
              <h4>Excellent Operation Theatres for Neuro Procedures</h4>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Center;