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
import Dashboard from "../Pages/Admin/Dashboard";
import AdminLayout from "../Components/Layout/AdminLayout";
import Properties from "../Pages/Admin/Properties/Properties";
import Address from "../Pages/Admin/Address";
import Agent from "../Pages/Admin/Agent/Agent";
import Categories from "../Pages/Admin/Category/Category";
import Role from "../Pages/Admin/Role/Role";
import AddProperty from "../Pages/Admin/Properties/AddProperty";
import AddAgent from "../Pages/Admin/Agent/AddAgent";
import AddCategory from "../Pages/Admin/Category/AddCategory";
import AddRole from "../Pages/Admin/Role/AddRole";
import PropertiesPage from "../Pages/PropertiesPage";
import EditProperty from "../Pages/Admin/Properties/EditProperty";
import Users from "../Pages/Admin/Users";
import PropertiseDescription from "../Pages/PropertiseDescription";
import Checkout from "../Pages/Checkout";
import UserDashboard from "../Pages/UserDashboard";
import PrivateRoute from "./protectedRoutes";
import ListBookings from "../Pages/Admin/Bookings/ListBokings";

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
          <Route path="/properties/" element={<PropertiesPage />} />
          <Route path="/properties/:id" element={<PropertiseDescription />} />
          {/* private route */}
          <Route
            path="/user-dashboard"
            element={
              <PrivateRoute>
                <UserDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/checkout"
            element={
              <PrivateRoute>
                <Checkout />
              </PrivateRoute>
            }
          />
        </Route>

        <Route element={<AdminLayout />}>
          <Route path="admin/dashboard" element={<Dashboard />} />
          <Route path="admin/properties" element={<Properties />} />
          <Route path="admin/address" element={<Address />} />
          <Route path="admin/agent" element={<Agent />} />
          <Route path="admin/category" element={<Categories />} />
          <Route path="admin/role" element={<Role />} />
          <Route path="admin/property-add" element={<AddProperty />} />
          <Route path="admin/property-edit/:id" element={<EditProperty />} />
          <Route path="admin/agent-add" element={<AddAgent />} />
          <Route path="admin/category-add" element={<AddCategory />} />
          <Route path="admin/role-add" element={<AddRole />} />
          <Route path="admin/users" element={<Users />} />
          <Route path="admin/bookings" element={<ListBookings />} />
        </Route>
      </Routes>
    </>
  );
}

export default MyRoutes;
