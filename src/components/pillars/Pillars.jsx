import React from "react";
import "./Pillars.css";

import pillar1 from "../../assets/images/pillar1.webp";
import pillar2 from "../../assets/images/pillar2.webp";
import pillar3 from "../../assets/images/pillar3.webp";

const data = [
  {
    img: pillar1,
    title: "Medical Expertise with Technology",
    desc: "A dedicated medical coordinator assists you throughout your neurology treatment journey. This includes reports, follow-ups, insurance paperwork, and smooth hospital coordination."
  },
  {
    img: pillar2,
    title: "Comprehensive Neurology Care",
    desc: "A dedicated medical coordinator assists you throughout your neurology treatment journey. This includes reports, follow-ups, insurance paperwork, and smooth hospital coordination."
  },
  {
    img: pillar3,
    title: "Advanced Treatment Options",
    desc: "A dedicated medical coordinator assists you throughout your neurology treatment journey. This includes reports, follow-ups, insurance paperwork, and smooth hospital coordination."
  }
];

const Pillars = () => {
  return (
    <section className="pillars section-space  side-space">
      <div>

        <div className="text-center">
          <h2 className="section-title">
            3 Pillars Of <span>Neurology Care</span> Under 1 Roof
          </h2>
        </div>

        <div className="row  ">
          {data.map((item, i) => (
            <div className="col-12 col-md-6 col-lg-4" key={i}>
              <div className="pillar-card">

                <img src={item.img} alt="" />

                <div className="overlay">
                  <h4>{item.title}</h4>

                  <div className="desc">
                    <p>{item.desc}</p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pillars;