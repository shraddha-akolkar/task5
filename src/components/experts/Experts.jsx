import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "./Experts.css";

import img1 from "../../assets/images/Dhananjay.jpg"; 
import img2 from "../../assets/images/ShripalShah.webp";
import img3 from "../../assets/images/Rahul.jpg";
import img4 from "../../assets/images/Sumant.jpg";
import img5 from "../../assets/images/Amit.jpg";

import SideArrow from "../../assets/svg/SideArrow";

const doctors = [
  {
    name: "Dr. Dhananjay Duberkar",
    img: img1,
    desc: "MD (Medicine), DM..."
  },
  {
    name: "Dr. Rahul Baviskar",
    img: img2,
    desc: "MD (Internal Medicine)..."
  },
  {
    name: "Dr. Sumant Biyani",
    img: img3,
    desc: "MD (Internal Medicine)..."
  },
  {
    name: "Dr. Amit Yeole",
    img: img4,
    desc: "MD (Internal Medicine)..."
  },
  {
    name: "Dr. Shripal Shah",
    img: img5,
    desc: "Interventional Neurologist"
  }
];

const Experts = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="experts section-space side-space" id="doctors">
      <div>

  
        <h2 className="section-title text-center mb-2">
          Our <span>Neurology Experts</span>
        </h2>

        <p className="text-center location-text mb-4">Nashik</p>

        <div className="experts-wrapper">

          <button className="nav-btn left" ref={prevRef}>
            <SideArrow />
          </button>

          <Swiper
  modules={[Navigation]}
  loop={true}
  spaceBetween={16}
  slidesPerView={2} 
  breakpoints={{
    576: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    992: { slidesPerView: 4 },
    1200: { slidesPerView: 5 },
  }}
            onSwiper={(swiper) => {
              setTimeout(() => {
                if (!swiper || swiper.destroyed) return;
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              });
            }}
          >
            {doctors.map((doc, i) => (
              <SwiperSlide key={i}>
                <div className="expert-card">

            
                  <div className="expert-img">
                    <img src={doc.img} alt={doc.name} />

                    <button className="consult-btn">
                      Consult <br /> Now
                    </button>
                  </div>

                
                  <h4>{doc.name}</h4>
                  <p>{doc.desc}</p>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

         
           <button className="nav-btn right" ref={nextRef}>
          <span >
            <SideArrow />
          </span>
        </button>

        </div>

      </div>
    </section>
  );
};

export default Experts;