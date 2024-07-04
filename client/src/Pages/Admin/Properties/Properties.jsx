import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { Row, Button, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../../api/axiosInstance";

function Properties() {
  const [properties, setProperties] = useState([]);
  const navigateTo = useNavigate();

  useEffect(() => {
    axiosInstance
      .get("/properties")
      .then((response) => {
        setProperties(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the properties!", error);
      });
  }, []);

  const handleClick = () => {
    navigateTo("/admin/property-add");
  };

  const handleDelete = (id) => {
    axiosInstance
      .delete(`/properties/${id}`)
      .then((response) => {
        setProperties(properties.filter((property) => property._id !== id));
      })
      .catch((error) => {
        console.error("There was an error deleting the property!", error);
      });
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
              {/* <th>Image</th> */}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {properties.map((property) => (
              <tr key={property._id}>
                <td>{property.PropertyName}</td>
                <td>{property.Description}</td>
                <td>{property.Price}</td>
                <td>{property.BedsCount}</td>
                <td>{property.BathCount}</td>
                <td>{property.AgentID ? property.AgentID.Name : "N/A"}</td>
                <td>
                  {property.CategoryID
                    ? property.CategoryID.CategoryName
                    : "N/A"}
                </td>
                <td>
                  {property.AddressID
                    ? `${property.AddressID.HouseNo}, ${property.AddressID.Street}, ${property.AddressID.City}`
                    : "N/A"}
                </td>
                {/* <td>
                  {property.Image ? (
                    <img
                      src={property.Image}
                      alt={property.PropertyName}
                      width="100"
                    />
                  ) : (
                    "No Image"
                  )}
                </td> */}
                <td>
                  <Link to={`/admin/property-edit/${property._id}`}>
                    <Button variant="info" className="me-2">
                      Edit
                    </Button>
                  </Link>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(property._id)}
                  >
                    Delete
                  </Button>
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
