import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function AddProperty() {
  const [property, setProperty] = useState({
    propertyName: "",
    description: "",
    price: "",
    bedsCount: "",
    bathCount: "",
    agent: "",
    category: "",
    address: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProperty({ ...property, [name]: value });
  };

  const handleImageChange = (e) => {
    setProperty({ ...property, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Property added:", property);
  };

  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <h2 className="font-weight-bold text-primary mb-5">Add Property</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Property Name
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  name="propertyName"
                  value={property.propertyName}
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
                  name="description"
                  value={property.description}
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
                  name="price"
                  value={property.price}
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
                  name="bedsCount"
                  value={property.bedsCount}
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
                  name="bathCount"
                  value={property.bathCount}
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
                  type="text"
                  name="agent"
                  value={property.agent}
                  onChange={handleChange}
                  placeholder="Enter agent name"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Category
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  name="category"
                  value={property.category}
                  onChange={handleChange}
                  placeholder="Enter category"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Address
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  name="address"
                  value={property.address}
                  onChange={handleChange}
                  placeholder="Enter address"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Image
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="file"
                  name="image"
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
