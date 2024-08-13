import React, { useState, useEffect } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LuBedSingle } from "react-icons/lu";
import { LiaBathSolid } from "react-icons/lia";

const Checkout = () => {
  const [property, setProperty] = useState(null);
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();

  const BASE_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const selectedProperty = JSON.parse(
      localStorage.getItem("selectedProperty")
    );
    setProperty(selectedProperty);
    const userId = localStorage.getItem("userId");
    setUserId(userId);
  }, []);

  const today = new Date().toISOString().split("T")[0];

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]+$/, "Phone number must be digits only")
      .min(10, "Phone number must be at least 10 digits")
      .max(10, "Phone number must be at most 10 digits")
      .required("Phone number is required"),
    bookingDate: Yup.date()
      .min(today, "Cannot select past dates")
      .required("Booking date is required"),
  });

  const handleBooking = async (values) => {
    const payload = { userId, propertyId: property._id, ...values };
    try {
      const booking = await axios.post(`${BASE_URL}booking`, payload);
      if (booking.status === 201) {
        console.log("Booking successful:", booking.data);
        toast.success("Congratulations! Booking successful 🚀.");
        setTimeout(() => {
          navigate("/user-dashboard");
        }, 2000);
      }
    } catch (error) {
      toast.error("Error booking property visit");
      console.error("Error booking property:", error);
    }
  };

  return (
    <div className="section">
      <div className="container">
        <ToastContainer autoClose={2000} />
        <Row>
          <Col md={6}>
            <h2>Schedule Your Visit</h2>
            <Formik
              initialValues={{
                name: "",
                email: "",
                phone: "",
                bookingDate: "",
              }}
              validationSchema={validationSchema}
              onSubmit={handleBooking}
            >
              {({ values, handleChange, handleSubmit, isValid }) => (
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="name" className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Field
                      type="text"
                      name="name"
                      as={Form.Control}
                      onChange={handleChange}
                      value={values.name}
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-danger"
                    />
                  </Form.Group>

                  <Form.Group controlId="email" className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Field
                      type="email"
                      name="email"
                      as={Form.Control}
                      onChange={handleChange}
                      value={values.email}
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-danger"
                    />
                  </Form.Group>

                  <Form.Group controlId="phone" className="mb-3">
                    <Form.Label>Phone</Form.Label>
                    <Field
                      type="text"
                      name="phone"
                      as={Form.Control}
                      onChange={handleChange}
                      value={values.phone}
                    />
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="text-danger"
                    />
                  </Form.Group>

                  <Form.Group controlId="bookingDate" className="mb-3">
                    <Form.Label>Booking Date</Form.Label>
                    <Field
                      type="date"
                      name="bookingDate"
                      as={Form.Control}
                      onChange={handleChange}
                      value={values.bookingDate}
                      min={today} // Prevent past dates
                    />
                    <ErrorMessage
                      name="bookingDate"
                      component="div"
                      className="text-danger"
                    />
                  </Form.Group>

                  <Button
                    variant="primary"
                    size="lg"
                    type="submit"
                    disabled={!isValid}
                    className="btn btn-primary btn-lg mt-3 px-4 py-3 w-100"
                  >
                    Book Now
                  </Button>
                </Form>
              )}
            </Formik>
          </Col>

          {property && (
            <Col md={6}>
              <div className="property-item" style={{ margin: "1rem" }}>
                <div className="img">
                  <img
                    src={`/images/${property.Image}`}
                    alt="Property Image"
                    width={400}
                    height={300}
                    className="img-fluid"
                  />
                </div>
                <div className="property-content">
                  <div className="price mb-2">
                    <span className="price-text">
                      ${property.Price.toLocaleString()}
                    </span>
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
                        <LuBedSingle /> {property.BedsCount} Beds
                      </span>
                    </span>
                    <span className="d-block d-flex align-items-center">
                      <span>
                        <LiaBathSolid /> {property.BathCount} Baths
                      </span>
                    </span>
                  </div>
                  <p className="fs-6">{property.Description}</p>
                </div>
              </div>
            </Col>
          )}
        </Row>
      </div>
    </div>
  );
};

export default Checkout;
