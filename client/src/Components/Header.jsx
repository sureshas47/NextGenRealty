import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close">
            <span className="icofont-close js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>

      <nav className="site-nav">
        <div className="container">
          <div className="menu-bg-wrap">
            <div className="site-navigation d-flex align-items-center justify-content-between">
              <Link className="logo m-0 float-start" to="/">
                <img
                  className="img-fluid"
                  width={90}
                  height={80}
                  src="../../public/images/logo.svg"
                  alt="logo"
                />
              </Link>

              <ul className="js-clone-nav d-none d-lg-inline-block text-start site-menu float-end">
                <li className="active">
                  <a href="/">Home</a>
                </li>
                <li className="has-children">
                  <a href="#">Properties</a>
                  <ul className="dropdown">
                    <li>
                      <a href="#">House</a>
                    </li>
                    <li>
                      <a href="#">Apartment</a>
                    </li>
                    <li>
                      <a href="#">Condo</a>
                    </li>
                    <li>
                      <a href="Products.aspx">View All</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <a href="#">Login</a>
                </li>
                <li>
                  <a href="#">My WishList</a>
                </li>
              </ul>
              <a
                href="#"
                className="burger light me-auto float-end mt-1 site-menu-toggle js-menu-toggle d-inline-block d-lg-none"
                data-toggle="collapse"
                data-target="#main-navbar"
              >
                <span></span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
