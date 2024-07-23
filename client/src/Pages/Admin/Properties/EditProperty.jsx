import React, { useState, useEffect } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance from "../../../../api/axiosInstance";

function EditProperty() {
  const { id } = useParams(); // Get property ID from URL params
  const navigate = useNavigate();

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

  const [agents, setAgents] = useState([]);
  const [categories, setCategories] = useState([]);
  const [addresses, setAddresses] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const agentsResponse = await axiosInstance.get("/agents");
      const categoriesResponse = await axiosInstance.get("/categories");
      const addressesResponse = await axiosInstance.get("/addresses");
      const propertyResponse = await axiosInstance.get(`/properties/${id}`);

      setAgents(agentsResponse.data);
      setCategories(categoriesResponse.data);
      setAddresses(addressesResponse.data);

      // Set property details from response
      setProperty({
        PropertyName: propertyResponse.data.PropertyName,
        Description: propertyResponse.data.Description,
        Price: propertyResponse.data.Price,
        BedsCount: propertyResponse.data.BedsCount,
        BathCount: propertyResponse.data.BathCount,
        AgentID: propertyResponse.data.AgentID,
        CategoryID: propertyResponse.data.CategoryID,
        AddressID: propertyResponse.data.AddressID,
        Image: propertyResponse.data.Image,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
      setErrorMessage("Failed to fetch property details.");
    }
  };

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
    formData.append("Image", property.Image);

    axiosInstance
      .put(`/properties/${id}`, formData)
      .then((response) => {
        setSuccessMessage("Property updated successfully!");
        setTimeout(() => {
          navigate("/admin/properties");
        }, 2000); // Redirect after 2 seconds
      })
      .catch((error) => {
        console.error("Error updating property:", error);
        setErrorMessage("Failed to update property.");
      });
  };

  return (
    <Container>
      <h2 className="font-weight-bold text-primary mb-5">Edit Property</h2>
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
      {successMessage && <Alert variant="success">{successMessage}</Alert>}
      <Form onSubmit={handleSubmit} enctype="multipart/form-data">
        {/* Form inputs for Property details */}
        <Form.Group className="mb-3">
          <Form.Label>Property Name</Form.Label>
          <Form.Control
            type="text"
            name="PropertyName"
            value={property.PropertyName}
            onChange={handleChange}
            placeholder="Enter property name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            name="Description"
            value={property.Description}
            onChange={handleChange}
            placeholder="Enter description"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            name="Price"
            value={property.Price}
            onChange={handleChange}
            placeholder="Enter price"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Beds Count</Form.Label>
          <Form.Control
            type="number"
            name="BedsCount"
            value={property.BedsCount}
            onChange={handleChange}
            placeholder="Enter number of beds"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Bath Count</Form.Label>
          <Form.Control
            type="number"
            name="BathCount"
            value={property.BathCount}
            onChange={handleChange}
            placeholder="Enter number of baths"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Agent</Form.Label>
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
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Category</Form.Label>
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
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Address</Form.Label>
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
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="text"
            name="Image"
            value={property.Image}
            onChange={handleChange}
            placeholder="Enter image name Eg. property.jpg"
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mb-2">
          Update Property
        </Button>
      </Form>
    </Container>
  );
}

export default EditProperty;
