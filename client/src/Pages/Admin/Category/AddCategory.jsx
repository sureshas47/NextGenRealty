import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function AddCategory() {
  const [category, setCategory] = useState({
    name: "",
  });

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategory({ ...category, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to add the category
    console.log("Category added:", category);
  };

  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <h2 className="font-weight-bold text-primary mb-5">Add Category</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Name
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  name="name"
                  value={category.name}
                  onChange={handleChange}
                  placeholder="Enter Category name"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Col sm={{ span: 10, offset: 2 }}>
                <Button variant="primary" type="submit" className="mb-2">
                  Add Category
                </Button>
              </Col>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default AddCategory;
