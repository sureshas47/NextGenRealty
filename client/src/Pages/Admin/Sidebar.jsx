import React, { useState } from "react";
import {
  CSidebar,
  CNavTitle,
  CSidebarBrand,
  CSidebarHeader,
  CSidebarNav,
  CSidebarToggler,
  CNavItem,
  CNavGroup,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import {
  cilPuzzle,
  cilLocationPin,
  cilBookmark,
  cilUser,
  cilMinus,
  cilApplications,
  cilLayers,
  cilHamburgerMenu,
  cilAccountLogout,
} from "@coreui/icons";
import { Link } from "react-router-dom";

function Sidebar() {
  const [visible, setVisible] = useState(false);

  const toggleSidebar = () => {
    setVisible(!visible);
  };

  return (
    <>
      <CSidebar className={`border-end`} position="fixed" visible={!visible}>
        <CSidebarHeader className="border-bottom">
          <Link to={"/admin/dashboard"}>
            <CSidebarBrand>Admin Dashboard</CSidebarBrand>
          </Link>
          <CSidebarToggler onClick={toggleSidebar} className="d-sm-down-none" />
        </CSidebarHeader>
        <CSidebarNav>
          <CNavTitle>NextGen - Management</CNavTitle>
          <CNavItem>
            <Link to="/admin/properties" className="nav-link">
              <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Property
            </Link>
          </CNavItem>
          <CNavItem>
            <Link to="/admin/address" className="nav-link">
              <CIcon customClassName="nav-icon" icon={cilLocationPin} /> Address
            </Link>
          </CNavItem>
          <CNavItem>
            <Link to="/admin/booking" className="nav-link">
              <CIcon customClassName="nav-icon" icon={cilBookmark} /> Booking
            </Link>
          </CNavItem>
          <CNavGroup
            toggler={
              <>
                <CIcon customClassName="nav-icon" icon={cilUser} /> User
              </>
            }
          >
            <CNavItem>
              <Link to="/admin/user" className="nav-link">
                <CIcon customClassName="nav-icon mx-1" icon={cilMinus} />
                User
              </Link>
            </CNavItem>
            <CNavItem>
              <Link to="/admin/agent" className="nav-link">
                <CIcon customClassName="nav-icon mx-1" icon={cilMinus} />
                Agent
              </Link>
            </CNavItem>
          </CNavGroup>
          <CNavItem>
            <Link to="/admin/category" className="nav-link">
              <CIcon customClassName="nav-icon" icon={cilApplications} />{" "}
              Category
            </Link>
          </CNavItem>
          <CNavItem>
            <Link to="/admin/role" className="nav-link">
              <CIcon customClassName="nav-icon" icon={cilLayers} /> Role
            </Link>
          </CNavItem>
          <CNavItem>
            <Link to="/admin/role" className="nav-link">
              <CIcon customClassName="nav-icon" icon={cilAccountLogout} />{" "}
              Logout
            </Link>
          </CNavItem>
        </CSidebarNav>
      </CSidebar>
      <div className="mt-5" onClick={toggleSidebar}>
        {" "}
        <CIcon
          customClassName="nav-icon "
          width={50}
          height={50}
          size="sm"
          icon={cilHamburgerMenu}
        />
      </div>
    </>
  );
}

export default Sidebar;
