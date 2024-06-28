import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Sidebar from "../../Pages/Admin/Sidebar";

function AdminLayout() {
  return (
    <>
      <Container fluid>
        <Row className="g-0">
          <Col sm={12} md={1} lg={2} className="d-flex flex-shrink-0">
            <Sidebar />
          </Col>

          <Col sm={12} md={11} lg={10}>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AdminLayout;
