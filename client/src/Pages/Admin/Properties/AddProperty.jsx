import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../../api/axiosInstance";

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
    Image: null,
  });

  const [agents, setAgents] = useState([]);
  const [categories, setCategories] = useState([]);
  const [addresses, setAddresses] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const agentsResponse = await axiosInstance.get("/agents");
        const categoriesResponse = await axiosInstance.get("/categories");
        const addressesResponse = await axiosInstance.get("/addresses");

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

  const handleImageChange = (e) => {
    setProperty({ ...property, Image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("PropertyName", property.PropertyName);
    formData.append("Description", property.Description);
    formData.append("Price", property.Price);
    formData.append("BedsCount", property.BedsCount);
    formData.append("BathCount", property.BathCount);
    formData.append("AgentID", property.AgentID);
    formData.append("CategoryID", property.CategoryID);
    formData.append("AddressID", property.AddressID);
    formData.append("Image", property.Image); // Ensure Image is appended correctly

    // check what is there in form data data

    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }

    // know what is there in the image
    console.log(property.Image, "image");

    console.log(formData, "formData");
    axiosInstance
      .post("/properties", formData)
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
                  type="file"
                  name="Image"
                  onChange={handleImageChange}
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
