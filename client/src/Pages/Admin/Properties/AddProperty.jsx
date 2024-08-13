import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../../api/axiosInstance";
import axios from "axios";

function AddProperty() {
  const [property, setProperty] = useState({
    PropertyName: "",
    Description: "",
    Price: "",
    BedsCount: "",
    BathCount: "",
    AgentID: "",
    CategoryID: "",
    AddressID: "",
    Image: "",
  });

  const BASE_URL = import.meta.env.VITE_API_URL;

  const [agents, setAgents] = useState([]);
  const [categories, setCategories] = useState([]);
  const [addresses, setAddresses] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const agentsResponse = await axios.get("/agents");
        const categoriesResponse = await axios.get("/categories");
        const addressesResponse = await axios.get("/addresses");

        setAgents(agentsResponse.data);
        setCategories(categoriesResponse.data);
        setAddresses(addressesResponse.data);
      } catch (error) {
        console.error("There was an error fetching data!", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProperty({ ...property, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${BASE_URL}properties`, property) // Send the property object
      .then((response) => {
        setSuccessMessage("Property added successfully!");
        setTimeout(() => {
          navigate("/admin/properties");
        }, 2000); // Redirect after 2 seconds
      })
      .catch((error) => {
        console.error("There was an error adding the property!", error);
      });
  };

  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <h2 className="font-weight-bold text-primary mb-5">Add Property</h2>
          {successMessage && <Alert variant="success">{successMessage}</Alert>}
          <Form onSubmit={handleSubmit} enctype="multipart/form-data">
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Property Name
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  name="PropertyName"
                  value={property.PropertyName}
                  onChange={handleChange}
                  placeholder="Enter property name"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Description
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  name="Description"
                  value={property.Description}
                  onChange={handleChange}
                  placeholder="Enter description"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Price
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="number"
                  name="Price"
                  value={property.Price}
                  onChange={handleChange}
                  placeholder="Enter price"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Beds Count
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="number"
                  name="BedsCount"
                  value={property.BedsCount}
                  onChange={handleChange}
                  placeholder="Enter number of beds"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Bath Count
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="number"
                  name="BathCount"
                  value={property.BathCount}
                  onChange={handleChange}
                  placeholder="Enter number of baths"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Agent
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  as="select"
                  name="AgentID"
                  value={property.AgentID}
                  onChange={handleChange}
                >
                  <option value="">Select agent</option>
                  {agents.map((agent) => (
                    <option key={agent._id} value={agent._id}>
                      {agent.Name}
                    </option>
                  ))}
                </Form.Control>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Category
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  as="select"
                  name="CategoryID"
                  value={property.CategoryID}
                  onChange={handleChange}
                >
                  <option value="">Select category</option>
                  {categories.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.CategoryName}
                    </option>
                  ))}
                </Form.Control>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Address
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  as="select"
                  name="AddressID"
                  value={property.AddressID}
                  onChange={handleChange}
                >
                  <option value="">Select address</option>
                  {addresses.map((address) => (
                    <option key={address._id} value={address._id}>
                      {`${address.HouseNo}, ${address.Street}, ${address.City}, ${address.Province}, ${address.Country}`}
                    </option>
                  ))}
                </Form.Control>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Image
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  name="Image"
                  value={property.Image}
                  placeholder="Enter image name Eg. property.jpg"
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Col sm={{ span: 10, offset: 2 }}>
                <Button variant="primary" type="submit" className="mb-2">
                  Add Property
                </Button>
              </Col>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default AddProperty;
