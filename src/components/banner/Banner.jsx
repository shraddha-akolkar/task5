import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="banner side-space">
      <div className="container-fluid">
        <div className="row align-items-center banner-row">

          <div className="left-section">
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

        </div>
      </div>
    </section>
  );
};

export default Banner;