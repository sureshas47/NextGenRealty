import React, { useEffect, useState } from "react";
import AOS from "aos";
import axios from "axios";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "aos/dist/aos.css";

const PropertyItem = ({ property }) => (
  <div className="property-item" style={{ margin: "1rem" }}>
    <a href="property-single.html" className="img">
      <img
        src={`/images/${property.Image}`}
        alt="Property Image"
        width={400}
        height={400}
        className="img-fluid"
      />
    </a>
    <div className="property-content">
      <div className="price mb-2">
        <span>${property.Price}</span>
      </div>
      <div>
        <span className="city d-block mb-3">{property.PropertyName}</span>
        <span className="d-block mb-2 text-black-50">
          {`${property.AddressID.Street}, ${property.AddressID.City}, ${property.AddressID.Province}, ${property.AddressID.Country}`}
        </span>
        <div className="specs d-flex mb-4">
          <span className="d-block d-flex align-items-center me-3">
            <span>{property.BedsCount} beds</span>
          </span>
          <span className="d-block d-flex align-items-center">
            <span>{property.BathCount} baths</span>
          </span>
        </div>
        <a href="/properties/all" className="btn btn-primary py-2 px-3">
          See details
        </a>
      </div>
    </div>
  </div>
);

const Properties = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    AOS.init();

    const fetchProperties = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/properties"
        );
        setProperties(response.data);
      } catch (error) {
        console.error("There was an error fetching the properties!", error);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div className="section">
      <div className="container">
        <div className="row mb-5 align-items-center">
          <div className="col-lg-6">
            <h2 className="font-weight-bold text-primary heading mb-5 mb-lg-0">
              Latest Properties
            </h2>
          </div>
          <div className="col-lg-6 text-lg-end">
            <p>
              <a
                href="#"
                target="_blank"
                className="btn btn-primary text-white py-3 px-4"
              >
                View all properties
              </a>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Splide
              options={{
                type: "loop",
                perPage: 3,
                perMove: 1,
                autoplay: true,
                pauseOnHover: true,
                resetProgress: false,
                arrows: true,
                pagination: true,
                gap: "1rem", // Add gap between slides
                breakpoints: {
                  1200: {
                    perPage: 2,
                  },
                  768: {
                    perPage: 1,
                  },
                },
              }}
              className="property-slider"
            >
              {properties.map((property) => (
                <SplideSlide key={property._id}>
                  <PropertyItem property={property} />
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;
