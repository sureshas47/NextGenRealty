import React, { useEffect, useState } from "react";
import AOS from "aos";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "aos/dist/aos.css";
import { FaHeart } from "react-icons/fa";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { LuBedSingle } from "react-icons/lu";
import { LiaBathSolid } from "react-icons/lia";

const PropertiseDescription = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  const BASE_URL = import.meta.env.VITE_API_URL;

  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();

    const fetchProperty = async () => {
      try {
        const response = await axios.get(`${BASE_URL}properties/${id}`);
        setProperty(response.data);
      } catch (error) {
        console.error("Error fetching property details:", error);
      }
    };

    fetchProperty();
  }, [id]);

  const handleCheckout = () => {
    localStorage.setItem("selectedProperty", JSON.stringify(property));
    navigate("/checkout");
  };

  if (!property) {
    return <div>Loading...</div>;
  }

  return (
    <div className="section">
      <div className="container">
        <Row>
          <Col md={6} className="d-flex align-items-center">
            <div className="img" data-aos="fade-right">
              <img
                src={`/images/${property.Image}`}
                alt="Property Image"
                width={800}
                height={600}
                className="img-fluid"
              />
            </div>
          </Col>
          <Col md={6} className="d-flex flex-column justify-content-center">
            <div className="property-item" style={{ margin: "1rem" }}>
              <div className="property-content" data-aos="fade-left">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="price mb-2">
                    <span className="price-text">
                      ${property.Price.toLocaleString()}
                    </span>
                  </div>
                  <div className="wishlist">
                    <Link to={"/checkout"}>
                      {" "}
                      <FaHeart
                        className="heart-icon"
                        color="red"
                        style={{ fontSize: "2rem", cursor: "pointer" }}
                      />
                    </Link>
                  </div>
                </div>
                <h1 className="font-weight-bold text-primary heading mb-3">
                  {property.PropertyName}
                </h1>
                <span className="d-block mb-2 text-black-50">
                  {`${property.AddressID.Street}, ${property.AddressID.City}, ${property.AddressID.Province}, ${property.AddressID.Country}`}
                </span>
                <div className="specs d-flex mb-4">
                  <span className="d-block d-flex align-items-center me-3">
                    <span>
                      <LuBedSingle size={25} className="me-1" />
                      {property.BedsCount} Beds
                    </span>
                  </span>
                  <span className="d-block d-flex align-items-center">
                    <span>
                      {" "}
                      <LiaBathSolid size={25} className="me-1" />
                      {property.BathCount} Baths
                    </span>
                  </span>
                </div>
                <p className="fs-6">{property.Description}</p>
                <button
                  className="btn btn-primary btn-lg mt-3 px-4 py-3 w-100"
                  onClick={handleCheckout}
                >
                  Checkout
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default PropertiseDescription;
