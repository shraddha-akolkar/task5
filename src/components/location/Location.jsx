import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "./Location.css";

import img1 from "../../assets/images/location1.webp";
import NextArrow from "../../assets/svg/NextArrow";
import SideArrow from "../../assets/svg/SideArrow";

const locations = [
  { name: "Nashik", img: img1 },
  // { name: "Pune", img: img1 },
  // { name: "Aurangabad", img: img1 },
  // { name: "Kolhapur", img: img1 },
  // { name: "Karad", img: img1 },
  // { name: "Pune", img: img1 },
  // { name: "Aurangabad", img: img1 },
  // { name: "Kolhapur", img: img1 },
  // { name: "Karad", img: img1 },
];

const Location = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="location section-space side-space">
      <h2 className="section-title text-center">
        <span>Sahyadri</span> Neurology Care Locations
      </h2>

      <div className="location-wrapper">

        <button className="nav-btn left" ref={prevRef} aria-label="Previous">
          <SideArrow />
        </button>

        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onSwiper={(swiper) => {
            setTimeout(() => {
              if (!swiper || swiper.destroyed) return;
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            });
          }}
          slidesPerView={1}
          spaceBetween={24}
          breakpoints={{
            480: { slidesPerView: 1.5 },
            640: { slidesPerView: 2 },
            900: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
        >
          {locations.map((loc, index) => (
            <SwiperSlide key={index}>
              <div className="location-card">
                <img src={loc.img} alt={loc.name} />
                <div className="location-bottom">
                  <p>{loc.name}</p>
                  <span>
                    <NextArrow />
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="nav-btn right" ref={nextRef} aria-label="Next">
          <span style={{ display: "flex", transform: "rotate(180deg)" }}>
            <SideArrow />
          </span>
        </button>

      </div>
    </div>
  );
};

export default Location;