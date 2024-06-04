import React from "react";

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
            <div className="site-navigation">
              <a href="Default.aspx" className="logo m-0 float-start">
                Ghar Sansar
              </a>
              <ul className="js-clone-nav d-none d-lg-inline-block text-start site-menu float-end">
                <li className="active">
                  <a href="Default.aspx">Home</a>
                </li>
                <li className="has-children">
                  <a href="Products.aspx">Properties</a>
                  <ul className="dropdown">
                    <li>
                      <a href="Products.aspx?categoryID=1">House</a>
                    </li>
                    <li>
                      <a href="Products.aspx?categoryID=2">Apartment</a>
                    </li>
                    <li>
                      <a href="Products.aspx?categoryID=3">Condo</a>
                    </li>
                    <li>
                      <a href="Products.aspx">View All</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="Services.aspx">Services</a>
                </li>
                <li>
                  <a href="About.aspx">About</a>
                </li>
                <li>
                  <a href="Contact.aspx">Contact Us</a>
                </li>
                <li>
                  <a href="Login.aspx">Login</a>
                </li>
                <li>
                  <a href="WishList.aspx">My WishList</a>
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
