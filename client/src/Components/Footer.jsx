import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="site-footer" style={{ padding: "40px" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-4 d-flex flex-column align-items-left text-left text-lg-start mb-lg-0">
            <div className="widget mb-3">
              <h3 style={{ color: "#bdbdbd" }}>Contact</h3>
              <address>123 University Ave</address>
              <ul className="list-unstyled links">
                <li>
                  <a href="tel:+6167778678">+6167778678</a>
                </li>
                <li>
                  <a href="mailto:hello@NextGenRealty.ca">
                    hello@NextGenRealty.ca
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 d-flex flex-column align-items-left text-left text-lg-start mb-lg-0">
            <div className="widget mb-3">
              <h3 style={{ color: "#bdbdbd" }}>Useful Links</h3>
              <ul className="list-unstyled links">
                <li>
                  <Link to="/about">About us</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 d-flex flex-column align-items-left text-left text-lg-start mb-lg-0">
            <div className="widget mb-3">
              <h3 style={{ color: "#bdbdbd" }}>Social Platforms</h3>
              <ul className="list-unstyled social list-inline dark-hover">
                <li className="list-inline-item">
                  <Link to="#">
                    <span className="icon-instagram"></span>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <span className="icon-twitter"></span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <span className="icon-facebook"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <p>Copyright &copy; 2024 || NextGen Realty</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
