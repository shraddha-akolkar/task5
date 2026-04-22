import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="banner side-space">
      <div className="container-fluid ">

        <div className="row align-items-center banner-row">

            <div className="col-12 col-lg-6">
            <div className="banner-content">
              <h1>
                Welcome To <span>Sahyadri</span>
                <br />
                Neurology Care
              </h1>

              <p>Holistic Approach To Neurology Care.</p>

              <button>Connect with Our Specialists</button>
            </div>
          </div>

         
          <div className="col-lg-6 d-none d-lg-block"></div>

        </div>

      </div>
    </section>
  );
};

export default Banner;