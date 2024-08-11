import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Sidebar from "../../Pages/Admin/Sidebar";

function AdminLayout() {
  return (
    <>
      <Container fluid>
        <Row className="g-0">
          <Col sm={12} md={1} lg={1} style={{ width: "50px" }}>
            <Sidebar />
          </Col>

          <Col sm={12} md={11} lg={11} className="mt-5 mt-md-0">
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AdminLayout;
