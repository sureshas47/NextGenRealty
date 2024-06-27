import React, { useEffect } from "react";
import AOS from "aos";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "aos/dist/aos.css";

const teamMembers = [
  {
    img: "../../public/images/img_2.jpg",
    name: "James Smith",
    position: "Designer, Co-founder",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
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
    position: "Designer, Co-founder",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
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
    position: "Designer, Co-founder",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
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
    position: "Designer, Co-founder",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                enim pariatur similique debitis vel nisi qui reprehenderit
                totam? Quod maiores.
              </p>
              <p className="text-black-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                saepe, explicabo nihil. Est, autem error cumque ipsum
                repellendus veniam sed blanditiis unde ullam maxime veritatis
                perferendis cupiditate, at non esse!
              </p>
              <p className="text-black-50">
                Enim, nisi labore exercitationem facere cupiditate nobis quod
                autem veritatis quis minima expedita. Cumque odio illo iusto
                reiciendis, labore impedit omnis, nihil aut atque, facilis
                necessitatibus asperiores porro qui nam.
              </p>
            </div>
            <div className="col-lg-6">
              <p className="text-black-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                saepe, explicabo nihil. Est, autem error cumque ipsum
                repellendus veniam sed blanditiis unde ullam maxime veritatis
                perferendis cupiditate, at non esse!
              </p>
              <p className="text-black-50">
                Enim, nisi labore exercitationem facere cupiditate nobis quod
                autem veritatis quis minima expedita. Cumque odio illo iusto
                reiciendis, labore impedit omnis, nihil aut atque, facilis
                necessitatibus asperiores porro qui nam.
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
                  src="../../public/images/img_8.jpg"
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
                    <h3 className="heading">Quality properties</h3>
                    <p className="text-black-50">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nostrum iste.
                    </p>
                  </div>
                </div>
                <div className="d-flex feature-h">
                  <span className="wrap-icon me-3">
                    <span className="icon-person"></span>
                  </span>
                  <div className="feature-text">
                    <h3 className="heading">Top rated agents</h3>
                    <p className="text-black-50">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nostrum iste.
                    </p>
                  </div>
                </div>
                <div className="d-flex feature-h">
                  <span className="wrap-icon me-3">
                    <span className="icon-security"></span>
                  </span>
                  <div className="feature-text">
                    <h3 className="heading">Easy and safe</h3>
                    <p className="text-black-50">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nostrum iste.
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
                  src="../../public/images/img_8.jpg"
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
                  <h3 className="heading">Quality properties</h3>
                  <p className="text-black-50">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum iste.
                  </p>
                </div>
              </div>
              <div className="d-flex feature-h">
                <span className="wrap-icon me-3">
                  <span className="icon-person"></span>
                </span>
                <div className="feature-text">
                  <h3 className="heading">Top rated agents</h3>
                  <p className="text-black-50">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum iste.
                  </p>
                </div>
              </div>
              <div className="d-flex feature-h">
                <span className="wrap-icon me-3">
                  <span className="icon-security"></span>
                </span>
                <div className="feature-text">
                  <h3 className="heading">Easy and safe</h3>
                  <p className="text-black-50">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum iste.
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
                      perPage: 1,
                    },
                    768: {
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
