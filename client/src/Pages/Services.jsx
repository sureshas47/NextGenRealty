import React, { useEffect, useState } from "react";
import AOS from "aos";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState([]);
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    AOS.init();

    // Fetch the services data from an API or define it locally for now
    const fetchData = async () => {
      // This is a placeholder for actual data fetching
      const data = [
        {
          id: 1,
          imagePath: "/images/assistance.png",
          name: "24/7 Assistant ",
          description:
            "Expert assistance in buying, and selling all sorts of properties. Our team is available 24/7 to assist you with any queries or concerns, ensuring a smooth and hassle-free experience. Whether you are a first-time buyer or a seasoned investor, we provide personalized guidance to meet your unique needs.",
        },
        {
          id: 2,
          imagePath: "/images/propertymanagement.jpg",
          name: "Property Management",
          description:
            "Professional property management services for all. From tenant screening to rent collection, our comprehensive services are designed to maximize your investment returns while minimizing the day-to-day hassles. Trust us to manage your property efficiently and effectively.",
        },
        {
          id: 3,
          imagePath: "/images/quality.png",
          name: "Quality Properties",
          description:
            "Providing top-quality properties for your dream home. We handpick the best properties in prime locations, ensuring you get the quality you deserve. Our portfolio includes a diverse range of options to suit every taste and budget, all backed by our commitment to excellence.",
        },
        {
          id: 4,
          imagePath: "/images/toprated.jpg",
          name: "Top Rated Agents",
          description:
            "Our top-rated agents will help you find your perfect home. With extensive local knowledge and a track record of success, our agents are dedicated to delivering exceptional service. Whether you are buying, selling, or renting, our team is here to guide you every step of the way.",
        },
      ];
      setServices(data);
    };

    fetchData();
  }, []);

  const toggleReadMore = (id) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [id]: !prevExpanded[id],
    }));
  };

  return (
    <>
      <div className="section">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-9 text-center mt-5">
              <h1 className="heading" data-aos="fade-up">
                Services
              </h1>

              <nav
                aria-label="breadcrumb"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <ol className="breadcrumb text-center justify-content-center">
                  <li className="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li
                    className="breadcrumb-item active text-white-50"
                    aria-current="page"
                  >
                    Services
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="section bg-light">
        <div className="container">
          <div className="row">
            {services.map((service, index) => {
              const isExpanded = expanded[service.id];
              const description = isExpanded
                ? service.description
                : `${service.description.substring(0, 100)}...`;

              return (
                <div
                  key={service.id}
                  className="col-6 col-lg-3 mb-md-4 mb-xl-0"
                  data-aos="fade-up"
                  data-aos-delay={`${index * 100 + 300}`}
                >
                  <div className="box-feature mb-1">
                    <img
                      src={service.imagePath}
                      alt="Service Image"
                      className="service-image mb-4 img-fluid mx-auto"
                      style={{ objectFit: "fill" }}
                    />
                    <h3 className="text-black mb-3 font-weight-bold">
                      {service.name}
                    </h3>
                    <p className="text-black-50">{description}</p>
                    <p>
                      <Link
                        to="/services"
                        className="learn-more text-decoration-none"
                        onClick={() => toggleReadMore(service.id)}
                      >
                        {isExpanded ? "Read less" : "Read more"}
                      </Link>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
