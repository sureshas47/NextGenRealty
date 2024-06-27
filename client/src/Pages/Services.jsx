import React, { useEffect, useState } from "react";
import AOS from "aos";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    AOS.init();

    // Fetch the services data from an API or define it locally for now
    const fetchData = async () => {
      // This is a placeholder for actual data fetching
      const data = [
        {
          id: 1,
          imagePath: "../../public/images/img_2.jpg",
          name: "Service One",
          description:
            "Expert assistance in buying, selling and leasing commercial properties.",
        },
        {
          id: 2,
          imagePath: "../../public/images/img_2.jpg",
          name: "Property Management",
          description: "Professional property management services for all.",
        },

        {
          id: 3,
          imagePath: "../../public/images/img_2.jpg",
          name: "Quality Propertise",
          description: "Providing top-quality properties for your dream home.",
        },
        {
          id: 4,
          imagePath: "../../public/images/img_2.jpg",
          name: "Top Rated Agents",
          description:
            "Our top-rated agents will help you find your perfect home.",
        },
      ];
      setServices(data);
    };

    fetchData();
  }, []);

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
            {services.map((service, index) => (
              <div
                key={service.id}
                className="col-6 col-lg-3 mb-4"
                data-aos="fade-up"
                data-aos-delay={`${index * 100 + 300}`}
              >
                <div className="box-feature mb-1">
                  <img
                    src={service.imagePath}
                    alt="Service Image"
                    className="service-image mb-4 d-block img-fluid"
                  />
                  <h3 className="text-black mb-3 font-weight-bold">
                    {service.name}
                  </h3>
                  <p className="text-black-50">{service.description}</p>
                  <p>
                    <a href="#" className="learn-more">
                      Read more
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
