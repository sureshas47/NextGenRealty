import React, { useEffect } from "react";
import "@splidejs/splide/dist/css/splide.min.css";
import useSplide from "../../hooks/useSplide"; // Assuming you have created this custom hook
import "aos/dist/aos.css";
import AOS from "aos";

const testimonials = [
  {
    img: "public/images/test1.png",
    name: "Ami Sharma",
    position: "Director, PQR Ltd.",
    text: "Thanks to YourCompany, we are now proud homeowners. Great team!",
  },
  {
    img: "public/images/test2.png",
    name: "Jessie Pinkman",
    position: "CEO, Gray Matters LLC.",
    text: "Thanks to YourCompany, we are now proud homeowners. Great team!",
  },
  {
    img: "public/images/test3.jpg",
    name: "Marrie Jackson",
    position: "Director, Wave Enterprises.",
    text: "Thanks to YourCompany, we are now proud homeowners. Great team!",
  },

  // Add more testimonial objects as needed
];

const TestimonialItem = ({ testimonial }) => (
  <div className="testimonial" data-aos="fade-up">
    <img
      src={testimonial.img}
      alt="Testimonial Image"
      className="img-fluid rounded-circle w-25 mb-4"
    />
    <h3 className="h5 text-primary mb-4">{testimonial.name}</h3>
    <p>{testimonial.text}</p>
    <p className="text-black-50">{testimonial.position}</p>
    <div className="rate">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="icon-star text-warning"></span>
      ))}
    </div>
  </div>
);

const Testimonials = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  // Use the custom Splide hook
  useSplide(".testimonial-slider", {
    type: "loop",
    perPage: 3,
    perMove: 1,
    autoplay: true,
    pauseOnHover: true,
    resetProgress: false,
    arrows: false,
    pagination: true,
    breakpoints: {
      1200: {
        perPage: 2,
      },
      768: {
        perPage: 2,
      },
    },
    gap: "2rem",
  });

  return (
    <div className="section sec-testimonials py-0">
      <div className="container mb-5">
        <div className="row mb-5 align-items-center">
          <div className="col-md-6">
            <h2 className="font-weight-bold heading text-primary mb-4 mb-md-0">
              Our Testimonials
            </h2>
          </div>
        </div>

        <div className="testimonial-slider-wrap">
          <div className="splide testimonial-slider">
            <div className="splide__track">
              <ul className="splide__list">
                {testimonials.map((testimonial, index) => (
                  <li className="splide__slide" key={index}>
                    <div className="item d-flex justify-content-center">
                      <TestimonialItem testimonial={testimonial} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
