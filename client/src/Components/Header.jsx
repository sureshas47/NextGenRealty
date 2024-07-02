import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../src/global.css";

function Header() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(localStorage.getItem("email"));
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to handle logout
  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem("UserName");
    // Clear user state
    setUser(null);
    // Navigate to home page
    navigate("/");
  };

  // useEffect to fetch user data from localStorage on component mount
  useEffect(() => {
    const userData = localStorage.getItem("UserName");
    if (userData) {
      setUser(userData);
      setIsLoggedIn(true);
    }
  }, [user, isLoggedIn]);

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#1e288e", alignItems: "center" }}
    >
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo and mobile menu toggler */}
        <Link className="navbar-brand" to="/">
          <img
            className="img-fluid"
            width={90}
            height={80}
            src="../../public/images/logo.svg"
            alt="logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation links */}
        <div
          className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link text-white"
                to="/"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle text-white"
                to="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Properties
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link
                    className="dropdown-item"
                    to="/properties/house"
                    onClick={() => setMenuOpen(false)}
                  >
                    House
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/properties/apartment"
                    onClick={() => setMenuOpen(false)}
                  >
                    Apartment
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/properties/condo"
                    onClick={() => setMenuOpen(false)}
                  >
                    Condo
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/properties/all"
                    onClick={() => setMenuOpen(false)}
                  >
                    View All
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white"
                to="/services"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white"
                to="/about"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white"
                to="/contact"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
            {/* Conditional rendering for user authentication */}
            {user ? (
              <li className="nav-item d-flex align-items-center">
                <span className="nav-link text-white me-2">
                  Logged in as <span style={{ color: "#ff9900" }}>{user}</span>
                </span>
                <Link className="nav-link text-white" onClick={handleLogout}>
                  Logout
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link
                  className="nav-link text-white"
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
