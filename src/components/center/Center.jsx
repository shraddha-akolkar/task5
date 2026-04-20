import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Center.css";

import img1 from "../../assets/images/center1.svg";

const Center = () => {
  return (
    <div className="center side-space section-space">
      <div className="container-fluid">

        <div className="text-center center-top">
          <h2 className="section-title">
            Center At <span>Glance</span>
          </h2>
          <p>
            Our goal is to serve neurology patients with the best available
            treatments in an atmosphere of competence, compassion, and integrity.
          </p>
        </div>

        <div className="row center-bottom">

  <div className="grid-item">
    <div className="bottom">
      <img src={img1} alt="" />
      <h4>State-of-the-Art Neurology and Stroke Facility</h4>
    </div>
  </div>

  <div className="grid-item">
    <div className="bottom">
      <img src={img1} alt="" />
      <h4>Neurology and Rehabilitation Daycare Available</h4>
    </div>
  </div>

  <div className="grid-item">
    <div className="bottom">
      <img src={img1} alt="" />
      <h4>Digital X-Ray, CT Scan, and MRI Facility</h4>
    </div>
  </div>

  <div className="grid-item">
    <div className="bottom">
      <img src={img1} alt="" />
      <h4>Expertise and Experience with 24x7 Support</h4>
    </div>
  </div>

  <div className="grid-item">
    <div className="bottom">
      <img src={img1} alt="" />
      <h4>Excellent Operation Theatres for Neuro Procedures</h4>
    </div>
  </div>

</div>

      </div>
    </div>
  );
};

export default Center;