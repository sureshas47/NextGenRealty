import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { LuBedSingle } from "react-icons/lu";
import { LiaBathSolid } from "react-icons/lia";

const PropertyItem = ({ property }) => (
  <div className="col-md-6 col-lg-4 mb-4">
    <div className="property-item" data-aos="fade-up">
      <Link to={"/properties/" + property._id} className="img">
        <img
          src={`/images/${property.Image}`}
          alt="Property Image"
          width={400}
          height={400}
          className="img-fluid"
        />
      </Link>
      <div className="property-content">
        <div className="price mb-2">
          <span className="price-text">${property.Price.toLocaleString()}</span>
        </div>
        <div>
          <span className="city d-block mb-3">{property.PropertyName}</span>
          <span className="d-block mb-2 text-black-50">
            {property.AddressID.Street}, {property.AddressID.City},{" "}
            {property.AddressID.Country}
          </span>
          <div className="specs d-flex mb-4">
            <span className="d-block d-flex align-items-center me-3">
              <LuBedSingle size={25} className="me-1" />
              {property.BedsCount} Beds
            </span>

            <span className="d-block d-flex align-items-center me-3">
              <LiaBathSolid size={25} className="me-1" />
              {property.BathCount} Baths
            </span>
            <span className="d-block d-flex align-items-center text-warning">
              {property.CategoryID.CategoryName}
            </span>
          </div>
          <Link
            to={`/properties/${property._id}`}
            className="btn btn-primary py-2 px-3"
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  </div>
);

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState("");

  const BASE_URL = import.meta.env.VITE_API_URL;

  // extract category from query params

  const location = useLocation();
  const categoryParam = new URLSearchParams(location.search);
  console.log(categoryParam, ":query params");

  useEffect(() => {
    setCategory(categoryParam.get("category"));
  }, [categoryParam]);

  const getAllProperties = async () => {
    try {
      // pass category as query param
      const response = await axios.get(`${BASE_URL}properties`, {
        params: { category: categoryParam },
      });
      setProperties(response.data);
      setIsLoading(false);
      console.log(response.data, "res");
    } catch (error) {
      console.log("Error fetching properties:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    AOS.init();
    getAllProperties();
  }, [category]);

  console.log(properties);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="section">
      <div className="container">
        <div className="row mb-5 align-items-center">
          <div className="col-lg-6">
            <h2 className="font-weight-bold text-primary heading mb-5 mb-lg-0">
              Latest Properties
            </h2>
          </div>
        </div>
        <div className="row">
          {properties.map((property, index) => (
            <PropertyItem key={index} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Properties;
