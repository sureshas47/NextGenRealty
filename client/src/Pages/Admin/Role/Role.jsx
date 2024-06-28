import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";

// Dummy data (replace with actual data or fetch from backend)
const dummyData = [
  {
    _id: 1,
    Name: "Agent",
  },
  {
    _id: 2,
    Name: "User",
  },
];

function Role() {
  const navigateTo = useNavigate();
  const handleClick = (e) => {
    navigateTo("/admin/role-add");
  };
  return (
    <>
      <Row className="mt-5 g-0">
        <Col xs="auto">
          <Button variant="primary" size="md" onClick={handleClick}>
            Add Category
          </Button>
        </Col>
      </Row>
      <Row className="table-responsive mt-5">
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Role Id</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((role, index) => (
              <tr key={role._id}>
                <td>{role._id}</td>
                <td>{role.Name}</td>
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

export default Role;
