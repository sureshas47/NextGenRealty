import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@splidejs/splide/dist/css/splide.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import useSplide from "../hooks/useSplide";

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  useSplide(".hero-slide", {
    type: "loop",
    perPage: 1,
    perMove: 1,
    autoplay: true,
    pauseOnHover: true,
    resetProgress: false,
    arrows: false,
    pagination: true,
  });

  return (
    <>
      <div className="hero">
        <div className="hero-slide splide">
          <div className="splide__track">
            <ul className="splide__list">
              <li className="splide__slide">
                <div
                  className="img overlay"
                  style={{
                    backgroundImage: "url('../public/images/img_2.jpg')",
                  }}
                ></div>
              </li>
              <li className="splide__slide">
                <div
                  className="img overlay"
                  style={{
                    backgroundImage: "url('../public/images/img_8.jpg')",
                  }}
                ></div>
              </li>
              <li className="splide__slide">
                <div
                  className="img overlay"
                  style={{
                    backgroundImage: "url('../public/images/img_2.jpg')",
                  }}
                ></div>
              </li>
            </ul>
          </div>
        </div>

        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-9 text-center">
              <h1 className="heading" data-aos="fade-up">
                Easiest way to find your dream home
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
