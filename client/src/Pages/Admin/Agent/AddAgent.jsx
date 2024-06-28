import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function AddAgent() {
  const [agent, setAgent] = useState({
    name: "",
    description: "",
    fbLink: "",
    instaLink: "",
    twitterLink: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAgent({ ...agent, [name]: value });
  };

  const handleImageChange = (e) => {
    setAgent({ ...agent, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to add the agent (placeholder)
    console.log("Agent added:", agent);
  };

  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <h2 className="font-weight-bold text-primary mb-5">Add Agent</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Name
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  name="name"
                  value={agent.name}
                  onChange={handleChange}
                  placeholder="Enter agent name"
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
                  value={agent.description}
                  onChange={handleChange}
                  placeholder="Enter description"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Facebook
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  name="fbLink"
                  value={agent.fbLink}
                  onChange={handleChange}
                  placeholder="Enter Facebook link"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Instagram
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  name="instaLink"
                  value={agent.instaLink}
                  onChange={handleChange}
                  placeholder="Enter Instagram link"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Twitter
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  name="twitterLink"
                  value={agent.twitterLink}
                  onChange={handleChange}
                  placeholder="Enter Twitter link"
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
                  Add Agent
                </Button>
              </Col>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default AddAgent;
