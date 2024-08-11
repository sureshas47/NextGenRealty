import React, { useEffect, useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);
  const navigateTo = useNavigate();

  const BASE_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`${BASE_URL}users`);
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  // const handleClick = (e) => {
  //   navigateTo("/admin/user-add");
  // };

  return (
    <>
      <Row className="my-4 g-0">
        <h3>Users</h3>
        <Col xs="auto">
          {/* <Button variant="primary" size="md" onClick={handleClick}>
            Add User
          </Button> */}
        </Col>
      </Row>
      <Row className="table-responsive">
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>S.N</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Registration Date</th>
              <th>User Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.UserName}</td>
                <td>{user.Email}</td>
                <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                <td>{user.UserRoleId ? user.UserRoleId.RoleName : "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
    </>
  );
}

export default Users;
