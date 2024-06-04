import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import PageLayout from "../Components/Layout/PageLayout";
import Contact from "../Pages/Contact";

function MyRoutes() {
  return (
    <>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default MyRoutes;
