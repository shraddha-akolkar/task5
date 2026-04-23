import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Facilities.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules"; 
import fact from "../../assets/images/facilities.webp";
import fact1 from "../../assets/images/fact1.svg";
import fact2 from "../../assets/images/fact2.svg";
import fact3 from "../../assets/images/fact3.svg";
import fact4 from "../../assets/images/fact4.svg";
import SideArrow from "../../assets/svg/SideArrow";

const dataLeft = [
  {
    icon: fact1,
    title: "Stroke Treatment and Neurocritical Care",
    desc: "Emergency stroke care with clot-busting medicines, stroke intervention, ICU monitoring, and specialist rehabilitation for long-term recovery."
  },
  {
    icon: fact2,
    title: "Epilepsy Evaluation and Management",
    desc: "Detailed EEG, video EEG, MRI brain imaging, and expert medication management for all types of seizures and refractory epilepsy."
  }
];

const dataRight = [
  {
    icon: fact3,
    title: "Advanced Neuro-Diagnostics",
    desc: "EMG, NCV, EEG, video EEG, CT scan, MRI brain and spine, and advanced neurological testing are available in one place."
  },
  {
    icon: fact4,
    title: "Neuro-Rehabilitation and Physiotherapy",
    desc: "Dedicated rehabilitation for stroke recovery, Parkinson's management, movement disorders, balance issues, and muscle weakness."
  }
];

const Facilities = () => {

  const prevRef = useRef(null);  
  const nextRef = useRef(null);

  
  return (
    <section className="facilities side-space">
      <div>
        <h2 className="section-title facilities-heading text-center">
          <span className="facilities-heading-accent">Neurology treatments</span>{" "}
          <span className="facilities-heading-dark">facilities</span>
        </h2>

    
        <div className="row facilities-row position-relative d-none d-lg-flex">
     
          <div className="col-md-6 col-lg-4 facilities-col-side left-side">            {dataLeft.map((item, i) => (
            <div className={`facility-card ${i === 1 ? 'move-inward' : ''}`} key={i}>
              <img src={item.icon} alt="" className="facility-card-icon" />
              <h4 className="text-center">{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
          </div>

         
          <div className="col-md-4 facilities-center-col">
            <div className="facilities-img-wrap">
              <img src={fact} alt="Doctor" className="facilities-img" />
            </div>
          </div>

      
          <div className="col-md-6 col-lg-4 facilities-col-side right-side">            {dataRight.map((item, i) => (
            <div className={`facility-card ${i === 1 ? 'move-inward' : ''}`} key={i}>
              <img src={item.icon} alt="" className="facility-card-icon" />
              <h4 className="text-center">{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
          </div>

        </div>

       
  <div className="facilities-slider d-lg-none">

  <div className="facilities-mobile-img">
    <div className="facilities-img-wrap">
      <img src={fact} alt="Doctor" className="facilities-img" />
    </div>
  </div>


  <div className="facilities-swiper-wrap">

    <button className="fact-nav left" ref={prevRef}>
      <SideArrow />
    </button>

    <Swiper
      modules={[Navigation]}
      loop={true}
      spaceBetween={16}
      slidesPerView={1}
      breakpoints={{
        576: { slidesPerView: 1.2 },
        768: { slidesPerView: 2 },
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
      {[...dataLeft, ...dataRight].map((item, i) => (
        <SwiperSlide key={i}>
          <div className="facility-card">
            <img src={item.icon} alt="" className="facility-card-icon"/>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

    <button className="fact-nav right" ref={nextRef}>
      <SideArrow />
    </button>

  </div>
</div>

      </div>
    </section>
  );
};

export default Facilities;