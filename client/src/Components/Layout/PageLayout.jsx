import React from "react";
import Header from "../Header";
import { Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Hero from "../Hero";

function PageLayout() {
  return (
    <>
      <Header />
      <Hero />
      <Container>
        <Row>
          {/* outlet autometically renders its children from the parent route */}
          <Outlet />
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default PageLayout;
