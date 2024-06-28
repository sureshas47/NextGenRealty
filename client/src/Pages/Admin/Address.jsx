import React from "react";
import { Button, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";

const dummyData = [
  {
    _id: "1",
    Country: "USA",
    Province: "California",
    City: "Los Angeles",
    Street: "123 Main St",
    HouseNo: "Apt 101",
  },
  {
    _id: "2",
    Country: "Canada",
    Province: "Ontario",
    City: "Toronto",
    Street: "456 Elm St",
    HouseNo: "Unit 202",
  },
];

function Address() {
  return (
    <Row className="table-responsive mt-5">
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Country</th>
            <th>Province</th>
            <th>City</th>
            <th>Street</th>
            <th>House No</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((address, index) => (
            <tr key={address._id}>
              <td>{address.Country}</td>
              <td>{address.Province}</td>
              <td>{address.City}</td>
              <td>{address.Street}</td>
              <td>{address.HouseNo}</td>
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
  );
}

export default Address;
