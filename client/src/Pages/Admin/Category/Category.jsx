import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";

// Dummy data (replace with actual data or fetch from backend)
const dummyData = [
  {
    _id: 1,
    Name: "Cat 1",
  },
  {
    _id: 2,
    Name: "Cat 2",
  },
];

function Categories() {
  const navigateTo = useNavigate();
  const handleClick = (e) => {
    navigateTo("/admin/category-add");
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
              <th>Category Id</th>
              <th>Category Name</th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((cat, index) => (
              <tr key={cat._id}>
                <td>{cat._id}</td>
                <td>{cat.Name}</td>
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

export default Categories;
