import React, { useEffect } from "react";
import AOS from "aos";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "aos/dist/aos.css";

const teamMembers = [
  {
    img: "../../public/images/img_2.jpg",
    name: "James Smith",
    position: "Founder & CEO",
    description:
      "James leads our team with a wealth of experience in real estate, specializing in both residential and commercial property transactions. His strategic vision drives our commitment to excellence and client satisfaction.",
    social: {
      twitter: "#",
      facebook: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    img: "../../public/images/img_2.jpg",
    name: "Carol Houston",
    position: "Senior Real Estate Agent",
    description:
      "Carol brings over a decade of experience in property sales and leasing. Her deep understanding of market trends and dedication to clients ensures successful outcomes for every transaction.",
    social: {
      twitter: "#",
      facebook: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    img: "../../public/images/img_2.jpg",
    name: "Synthia Cameron",
    position: "Marketing Director",
    description:
      "Synthia crafts and executes effective marketing strategies that highlight our properties and services. Her innovative approach attracts and engages clients, enhancing our brand's presence in the real estate market.",
    social: {
      twitter: "#",
      facebook: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    img: "../../public/images/img_2.jpg",
    name: "Davin Smith",
    position: "Client Relations Manager",
    description:
      "Davin ensures that our clients receive personalized support throughout their property journey. His exceptional communication skills and problem-solving abilities help us maintain strong relationships with our clients.",
    social: {
      twitter: "#",
      facebook: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
];

const TeamMember = ({ member }) => (
  <div className="testimonial">
    <img
      src={member.img}
      alt={member.name}
      className="img-fluid rounded-circle w-25 mb-4"
    />
    <h3 className="h5 text-primary">{member.name}</h3>
    <p className="text-black-50">{member.position}</p>
    <p>{member.description}</p>
    <ul className="social list-unstyled list-inline dark-hover">
      <li className="list-inline-item">
        <a href={member.social.twitter}>
          <span className="icon-twitter"></span>
        </a>
      </li>
      <li className="list-inline-item">
        <a href={member.social.facebook}>
          <span className="icon-facebook"></span>
        </a>
      </li>
      <li className="list-inline-item">
        <a href={member.social.linkedin}>
          <span className="icon-linkedin"></span>
        </a>
      </li>
      <li className="list-inline-item">
        <a href={member.social.instagram}>
          <span className="icon-instagram"></span>
        </a>
      </li>
    </ul>
  </div>
);

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="section">
        <div className="container">
          <div className="row text-left mb-5">
            <div className="col-12">
              <h2 className="font-weight-bold heading text-primary mb-4">
                About Us
              </h2>
            </div>
            <div className="col-lg-6">
              <p className="text-black-50">
                At NextGen Realty, we are committed to revolutionizing the real
                estate experience. Whether you're buying, selling, or leasing
                residential or commercial properties, our expert team is
                dedicated to guiding you through every step of the process with
                personalized service and market insights.
              </p>
              <p className="text-black-50">
                Our comprehensive services cover all aspects of property
                transactions, from finding the perfect home or office to
                ensuring a smooth closing process. We leverage advanced
                technology and market analysis to deliver exceptional results
                for our clients.
              </p>
              <p className="text-black-50">
                We pride ourselves on our deep industry knowledge and our
                commitment to client satisfaction. Our team is here to make your
                real estate journey as seamless and rewarding as possible.
              </p>
            </div>
            <div className="col-lg-6">
              <p className="text-black-50">
                With a focus on integrity and professionalism, NextGen Realty is
                your trusted partner in navigating the real estate market. Our
                extensive network and dedication to excellence set us apart in
                providing top-notch service and achieving optimal outcomes for
                our clients.
              </p>
              <p className="text-black-50">
                Whether you are looking to buy your dream home, sell a property,
                or find the ideal commercial space, our experienced team is here
                to assist you every step of the way. Experience the difference
                with NextGen Realty – where your real estate goals become
                reality.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section pt-0">
        <div className="container">
          <div className="row justify-content-between mb-5">
            <div className="col-lg-8 mb-5 mb-lg-0 order-lg-2">
              <div className="img-about dots">
                <img
                  src="../../public/images/interior2.jpg"
                  alt="Image-About"
                  className="img-fluid w-md-75 d-block mx-auto"
                />
              </div>
            </div>
            <div className="col-lg-4 order-lg-1">
              <div className="d-flex flex-column gap-3">
                <div className="d-flex feature-h">
                  <span className="wrap-icon me-3">
                    <span className="icon-home2"></span>
                  </span>
                  <div className="feature-text">
                    <h3 className="heading">Quality Properties</h3>
                    <p className="text-black-50">
                      We offer a diverse range of high-quality properties to
                      meet all your real estate needs, ensuring you find the
                      perfect fit.
                    </p>
                  </div>
                </div>
                <div className="d-flex feature-h">
                  <span className="wrap-icon me-3">
                    <span className="icon-person"></span>
                  </span>
                  <div className="feature-text">
                    <h3 className="heading">Top Rated Agents</h3>
                    <p className="text-black-50">
                      Our team of expert agents provides exceptional service and
                      market knowledge, making your real estate experience
                      seamless and successful.
                    </p>
                  </div>
                </div>
                <div className="d-flex feature-h">
                  <span className="wrap-icon me-3">
                    <span className="icon-security"></span>
                  </span>
                  <div className="feature-text">
                    <h3 className="heading">Easy and Safe</h3>
                    <p className="text-black-50">
                      We prioritize your safety and ease throughout the
                      transaction process, ensuring a secure and hassle-free
                      experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-between mt-5">
            <div className="col-lg-8 mb-5 mb-lg-0 order-lg-1">
              <div className="img-about dots">
                <img
                  src="../../public/images/inteior.jpg"
                  alt="Image-About"
                  className="img-fluid w-md-75"
                />
              </div>
            </div>
            <div className="col-lg-4 order-lg-2">
              <div className="d-flex feature-h">
                <span className="wrap-icon me-3">
                  <span className="icon-home2"></span>
                </span>
                <div className="feature-text">
                  <h3 className="heading">Quality Properties</h3>
                  <p className="text-black-50">
                    We offer a diverse range of high-quality properties to meet
                    all your real estate needs, ensuring you find the perfect
                    fit.
                  </p>
                </div>
              </div>
              <div className="d-flex feature-h">
                <span className="wrap-icon me-3">
                  <span className="icon-person"></span>
                </span>
                <div className="feature-text">
                  <h3 className="heading">Top Rated Agents</h3>
                  <p className="text-black-50">
                    Our team of expert agents provides exceptional service and
                    market knowledge, making your real estate experience
                    seamless and successful.
                  </p>
                </div>
              </div>
              <div className="d-flex feature-h">
                <span className="wrap-icon me-3">
                  <span className="icon-security"></span>
                </span>
                <div className="feature-text">
                  <h3 className="heading">Easy and Safe</h3>
                  <p className="text-black-50">
                    We prioritize your safety and ease throughout the
                    transaction process, ensuring a secure and hassle-free
                    experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section sec-testimonials bg-light">
        <div className="container">
          <div className="row mb-5 align-items-center">
            <div className="col-md-10">
              <h2 className="font-weight-bold heading text-primary mb-4 mb-md-0">
                The Team
              </h2>
            </div>
            <div className="col-md-2 text-md-between ">
              <div id="testimonial-nav">
                <span className="prev" data-controls="prev">
                  Prev
                </span>
                <span className="next my-sm-2 mx-sm-2" data-controls="next">
                  Next
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Splide
                options={{
                  type: "loop",
                  perPage: 3,
                  arrows: false,
                  pagination: false,
                  autoplay: true,
                  interval: 3000,
                  pauseOnHover: true,
                  gap: "2rem",
                  breakpoints: {
                    1200: {
                      perPage: 3,
                    },
                    768: {
                      perPage: 2,
                    },
                    576: {
                      perPage: 1,
                    },
                  },
                }}
              >
                {teamMembers.map((member, index) => (
                  <SplideSlide key={index}>
                    <TeamMember member={member} />
                  </SplideSlide>
                ))}
              </Splide>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
