import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import PageLayout from "../Components/Layout/PageLayout";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PasswordReset from "../Pages/ResetPassword";
import Otp from "../Pages/Otp";
import Services from "../Pages/Services";

function MyRoutes() {
  return (
    <>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/otp-verify" element={<Otp />} />
          <Route path="/password/reset" element={<PasswordReset />} />
          <Route path="/services" element={<Services />} />
        </Route>
      </Routes>
    </>
  );
}

export default MyRoutes;
