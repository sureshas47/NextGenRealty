import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";

// Dummy data (replace with actual data or fetch from backend)
const dummyData = [
  {
    _id: "1",
    Name: "John Doe",
    Description: "Real estate agent specializing in residential properties.",
    FbLink: "https://facebook.com/johndoe",
    InstaLink: "https://instagram.com/johndoe",
    TwitterLink: "https://twitter.com/johndoe",
    Image: "https://example.com/johndoe.jpg",
  },
  {
    _id: "2",
    Name: "Jane Smith",
    Description: "Experienced agent with a focus on commercial real estate.",
    FbLink: "https://facebook.com/janesmith",
    InstaLink: "https://instagram.com/janesmith",
    TwitterLink: "https://twitter.com/janesmith",
    Image: "https://example.com/janesmith.jpg",
  },
  // Add more dummy data as needed
];

function Agent() {
  const navigateTo = useNavigate();
  const handleClick = (e) => {
    navigateTo("/admin/agent-add");
  };
  return (
    <>
      <Row className="mt-5 g-0">
        <Col xs="auto">
          <Button variant="primary" size="md" onClick={handleClick}>
            Add Agent
          </Button>
        </Col>
      </Row>
      <Row className="table-responsive mt-5">
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Description</th>
              <th>Facebook</th>
              <th>Instagram</th>
              <th>Twitter</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((agent, index) => (
              <tr key={agent._id}>
                <td>{index + 1}</td>
                <td>{agent.Name}</td>
                <td>{agent.Description}</td>
                <td>
                  <a
                    href={agent.FbLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                </td>
                <td>
                  <a
                    href={agent.InstaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </td>
                <td>
                  <a
                    href={agent.TwitterLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </td>
                <td>
                  <img
                    src={agent.Image}
                    alt={agent.Name}
                    style={{ width: "50px", height: "auto" }}
                  />
                </td>
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

export default Agent;
