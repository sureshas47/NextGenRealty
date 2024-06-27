import React from "react";

const Footer = () => {
  return (
    <div className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 d-flex flex-column align-items-center text-center text-lg-start mb-3 mb-lg-0">
            <div className="widget">
              <h3>Contact</h3>
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
          <div className="col-lg-4 d-flex flex-column align-items-center text-center text-lg-start mb-3 mb-lg-0">
            <div className="widget">
              <h3>Useful Links</h3>
              <ul className="list-unstyled links">
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 d-flex flex-column align-items-center text-center text-lg-start mb-3 mb-lg-0">
            <div className="widget">
              <h3>Links</h3>
              <ul className="list-unstyled links">
                <li>
                  <a href="#">Our Vision</a>
                </li>
                <li>
                  <a href="#">About us</a>{" "}
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
              </ul>
              <ul className="list-unstyled social list-inline dark-hover">
                <li className="list-inline-item">
                  <a href="#">
                    <span className="icon-instagram"></span>
                  </a>
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
        <div className="row mt-3 justify-content-center">
          <div className="col-12 text-center">
            <p>Copyright &copy; 2024 || NextGen Realty</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
