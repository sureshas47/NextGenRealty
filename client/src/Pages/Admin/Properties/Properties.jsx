import React from "react";
import Table from "react-bootstrap/Table";
import { Row, Button, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

// Dummy data (replace with actual data or fetch from server later)
const properties = [
  {
    _id: "1",
    PropertyName: "Sample Property 1",
    Description: "This is a sample property description.",
    Price: 100000,
    BedsCount: 3,
    BathCount: 2,
    AgentID: "agent1",
    Image: "property1.jpg",
    CategoryID: "category1",
    AddressID: "address1",
  },
  {
    _id: "2",
    PropertyName: "Sample Property 2",
    Description: "Another sample property description.",
    Price: 150000,
    BedsCount: 4,
    BathCount: 3,
    AgentID: "agent2",
    Image: "property2.jpg",
    CategoryID: "category2",
    AddressID: "address2",
  },
];

function Properties() {
  const navigateTo = useNavigate();
  const handleClick = (e) => {
    navigateTo("/admin/property-add");
  };
  return (
    <>
      <Row className="mt-5 g-0">
        <Col xs="auto">
          <Button variant="primary" size="md" onClick={handleClick}>
            Add Property
          </Button>
        </Col>
      </Row>

      <Row className="mt-5">
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Property Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Beds Count</th>
              <th>Bath Count</th>
              <th>Agent</th>
              <th>Category</th>
              <th>Address</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {properties.map((property, index) => (
              <tr key={property._id}>
                <td>{property.PropertyName}</td>
                <td>{property.Description}</td>
                <td>{property.Price}</td>
                <td>{property.BedsCount}</td>
                <td>{property.BathCount}</td>
                <td>{property.AgentID}</td>
                <td>{property.CategoryID}</td>
                <td>{property.Image}</td>
                <td>{property.AddressID}</td>
                <td>
                  <Button variant="info" className="me-2">
                    Edit
                  </Button>
                  <Button variant="danger">Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
    </>
  );
}

export default Properties;
