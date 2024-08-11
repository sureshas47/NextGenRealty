import React, { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import CIcon from "@coreui/icons-react";
import {
  cilPuzzle,
  cilLocationPin,
  cilBookmark,
  cilUser,
  cilMinus,
  cilApplications,
  cilLayers,
  cilAccountLogout,
  cilHamburgerMenu,
} from "@coreui/icons";
import { Link } from "react-router-dom";

function Sidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {!show && (
        <Button
          onClick={handleShow}
          style={{
            position: "fixed",
            top: "20px",
            left: "20px",
            zIndex: 1050,
            backgroundColor: "transparent",
            border: "none",
            padding: 0,
            color: "black",
          }}
        >
          <CIcon
            customClassName="nav-icon"
            icon={cilHamburgerMenu}
            width={25}
            height={25}
          />
        </Button>
      )}

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="start"
        style={{ width: "300px" }}
      >
        <Offcanvas.Header closeButton>
          <Link className="text-decoration-none" to={"/admin/dashboard"}>
            <Offcanvas.Title>Admin Dashboard</Offcanvas.Title>
          </Link>
        </Offcanvas.Header>
        <div
          style={{
            borderBottom: "1px solid #ddd",
            margin: "0 1rem",
          }}
        />
        <Offcanvas.Body>
          <ul className="nav flex-column">
            <li className="nav-item d-flex align-items-center mb-2">
              <Link
                to="/admin/properties"
                className="nav-link d-flex align-items-center"
              >
                <CIcon
                  customClassName="nav-icon me-2"
                  icon={cilPuzzle}
                  width={30}
                  height={30}
                />
                Property
              </Link>
            </li>
            <li className="nav-item d-flex align-items-center mb-2">
              <Link
                to="/admin/address"
                className="nav-link d-flex align-items-center"
              >
                <CIcon
                  customClassName="nav-icon me-2"
                  icon={cilLocationPin}
                  width={30}
                  height={30}
                />
                Address
              </Link>
            </li>
            <li className="nav-item d-flex align-items-center mb-2">
              <Link
                to="/admin/bookings"
                className="nav-link d-flex align-items-center"
              >
                <CIcon
                  customClassName="nav-icon me-2"
                  icon={cilBookmark}
                  width={30}
                  height={30}
                />
                Booking
              </Link>
            </li>
            <li className="nav-item d-flex align-items-center mb-2">
              <Link
                to="/admin/users"
                className="nav-link d-flex align-items-center"
              >
                <CIcon
                  customClassName="nav-icon me-2"
                  icon={cilUser}
                  width={30}
                  height={30}
                />
                User
              </Link>
            </li>
            <li className="nav-item d-flex align-items-center mb-2">
              <Link
                to="/admin/agent"
                className="nav-link d-flex align-items-center"
              >
                <CIcon
                  customClassName="nav-icon me-2"
                  icon={cilMinus}
                  width={30}
                  height={30}
                />
                Agent
              </Link>
            </li>
            <li className="nav-item d-flex align-items-center mb-2">
              <Link
                to="/admin/category"
                className="nav-link d-flex align-items-center"
              >
                <CIcon
                  customClassName="nav-icon me-2"
                  icon={cilApplications}
                  width={30}
                  height={30}
                />
                Category
              </Link>
            </li>
            <li className="nav-item d-flex align-items-center mb-2">
              <Link
                to="/admin/role"
                className="nav-link d-flex align-items-center"
              >
                <CIcon
                  customClassName="nav-icon me-2"
                  icon={cilLayers}
                  width={30}
                  height={30}
                />
                Role
              </Link>
            </li>
            <li className="nav-item d-flex align-items-center mb-2">
              <Link to="/logout" className="nav-link d-flex align-items-center">
                <CIcon
                  customClassName="nav-icon me-2"
                  icon={cilAccountLogout}
                  width={30}
                  height={30}
                />
                Logout
              </Link>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Sidebar;
