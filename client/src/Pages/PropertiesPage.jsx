import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

const properties = [
  {
    id: 1,
    img: "../../public/images/img_2.jpg",
    price: "$133.00",
    city: "Ulric Baird",
    address: "1A 123 Main Street, Toronto, Ontario, Canada",
    beds: "1 bed",
    baths: "1 bath",
  },
  {
    id: 2,
    img: "../../public/images/img_2.jpg",
    price: "$555.00",
    city: "Aubrey Boyd",
    address: "2B 456 Elm Avenue, Ottawa, Ontario, Canada",
    beds: "12 beds",
    baths: "12 baths",
  },
  {
    id: 3,
    img: "../../public/images/img_2.jpg",
    price: "$230,000.00",
    city: "Cozy Apartment in Kitchener",
    address: "12L 789 Pine Lane, Kitchener, Ontario, Canada",
    beds: "1 bed",
    baths: "1 bath",
  },
  {
    id: 4,
    img: "../../public/images/img_2.jpg",
    price: "$400,000.00",
    city: "Charming House in Windsor",
    address: "11K 123 Elm Lane, Windsor, Ontario, Canada",
    beds: "3 beds",
    baths: "2 baths",
  },
  {
    id: 5,
    img: "../../public/images/img_2.jpg",
    price: "$320,000.00",
    city: "Luxury Apartment in Brampton",
    address: "9I 789 Oak Lane, Brampton, Ontario, Canada",
    beds: "2 beds",
    baths: "2 baths",
  },
  {
    id: 6,
    img: "../../public/images/img_2.jpg",
    price: "$380,000.00",
    city: "Spacious House in Markham",
    address: "8H 123 Cedar Street, Markham, Ontario, Canada",
    beds: "4 beds",
    baths: "3 baths",
  },
  {
    id: 7,
    img: "../../public/images/img_2.jpg",
    price: "$150,000.00",
    city: "Modern Condo in Mississauga",
    address: "7G 123 Maple Street, Mississauga, Ontario, Canada",
    beds: "2 beds",
    baths: "1 bath",
  },
  {
    id: 8,
    img: "../../public/images/img_2.jpg",
    price: "$500,000.00",
    city: "Spacious Villa in Niagara Falls",
    address: "6F 456 Oak Avenue, Niagara Falls, Ontario, Canada",
    beds: "5 beds",
    baths: "4 baths",
  },
  {
    id: 9,
    img: "../../public/images/img_2.jpg",
    price: "$220,000.00",
    city: "Cozy Bungalow in Kingston",
    address: "5E 789 Cedar Road, Kingston, Ontario, Canada",
    beds: "3 beds",
    baths: "2 baths",
  },
  {
    id: 10,
    img: "../../public/images/img_2.jpg",
    price: "$300,000.00",
    city: "Modern Loft in London",
    address: "4D 123 Birch Street, London, Ontario, Canada",
    beds: "2 beds",
    baths: "2 baths",
  },
];

const PropertyItem = ({ property }) => (
  <div className="col-md-6 col-lg-4 mb-4">
    <div className="property-item" data-aos="fade-up">
      <a href="property-single.html" className="img">
        <img
          src={property.img}
          alt="Property Image"
          width={400}
          height={400}
          className="img-fluid"
        />
      </a>
      <div className="property-content">
        <div className="price mb-2">
          <span>{property.price}</span>
        </div>
        <div>
          <span className="city d-block mb-3">{property.city}</span>
          <span className="d-block mb-2 text-black-50">{property.address}</span>
          <div className="specs d-flex mb-4">
            <span className="d-block d-flex align-items-center me-3">
              <span>{property.beds}</span>
            </span>
            <span className="d-block d-flex align-items-center">
              <span>{property.baths}</span>
            </span>
          </div>
          <a className="btn btn-primary py-2 px-3">See details</a>
        </div>
      </div>
    </div>
  </div>
);

const Properties = () => {
  useEffect(() => {
    AOS.init();
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
          {properties.map((property, index) => (
            <PropertyItem key={index} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Properties;
