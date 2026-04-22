import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "./Condition.css";

import img1 from "../../assets/images/cond1.webp";
import img2 from "../../assets/images/cond2.webp";
import img3 from "../../assets/images/cond3.webp";
import img4 from "../../assets/images/cond4.webp";
import img5 from "../../assets/images/cond5.webp";

import SideArrow from "../../assets/svg/SideArrow";

const data = [
  {
    img: img1, title: "Stroke Care",
    desc: "A dedicated medical coordinator assists you throughout your neurology treatment journey. This includes reports, follow-ups"

  },
  {
    img: img2, title: "Epilepsy and Seizure Disorders",
    desc: "A dedicated medical coordinator assists you throughout your neurology treatment journey. This includes reports, follow-ups"


  },
  {
    img: img3, title: "Headache and Migraine Disorders",
    desc: "A dedicated medical coordinator assists you throughout your neurology treatment journey. This includes reports, follow-ups"

  },
  {
    img: img4, title: "Parkinson’s Disease and Movement Disorders",
    desc: "A dedicated medical coordinator assists you throughout your neurology treatment journey. This includes reports, follow-ups"

  },
  {
    img: img5, title: "Spine and Nerve Disorders",
    desc: "A dedicated medical coordinator assists you throughout your neurology treatment journey. This includes reports, follow-ups"

  },
  {
    img: img2, title: "Epilepsy and Seizure Disorders",
    desc: "A dedicated medical coordinator assists you throughout your neurology treatment journey. This includes reports, follow-ups"

  },
  {
    img: img3, title: "Headache and Migraine Disorders",
    desc: "A dedicated medical coordinator assists you throughout your neurology treatment journey. This includes reports, follow-ups"

  },
  {
    img: img4, title: "Parkinson’s Disease and Movement Disorders",
    desc: "A dedicated medical coordinator assists you throughout your neurology treatment journey. This includes reports, follow-ups"

  },
];

const Conditions = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="conditions section-space side-space">
      <div className="container-fluid ">

        <h2 className="section-title text-center mb-5">
          <span>Neurology</span> Conditions We Treat
        </h2>

        <div className="conditions-wrapper">


          <button className="nav-btn left" ref={prevRef}>
            <SideArrow />
          </button>

          <Swiper
            modules={[Navigation]}
            loop={true}
            spaceBetween={2}
            slidesPerView={1.3}
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
            {data.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="condition-card">

                <img src={item.img} alt="" />

                <div className="overlay">
                  <h4>{item.title}</h4>

                  <div className="desc">
                    <p>{item.desc}</p>
                  </div>
                </div>

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

export default Conditions;