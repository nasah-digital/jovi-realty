import React from "react";
import './header.css';
import { Link, NavLink } from "react-router-dom";
import mailIcon from "../../../../assets/Images/mail.png";
import callIcon from "../../../../assets/Images/call.png";
import logo from "../../../../assets/Images/jovi-reality-logo.png";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/property-management", label: "Rental Services" },
  { to: "/property-listing/buy", label: "Buy" },
  { to: "/sell", label: "Sell" },
  { to: "/property-listing/rent", label: "Rent" },
  { to: "/find-an-agent", label: "Find an Agent" },
  { to: "/news-and-resources", label: "Resources" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  return (
    <>
      {/* Topbar */}
      <div className="topbar text-white">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="topbar-links-con">
            <NavLink to="mailto:hello@jovirealty.com">
              <div className="topbar-link">
                <img src={mailIcon} alt="mail icon" />
                <p>hello@jovirealty.com</p>
              </div>
            </NavLink>
            <NavLink to="tel:604.202.2929">
              <div className="topbar-link">
                <img src={callIcon} alt="phone icon" />
                <p>604.202.2929</p>
              </div>
            </NavLink>
          </div>
          <div className="top-bar-btn">
            <Link to="#">
              <button className="btn btn-primary">
                Find Your Home <i className="bi bi-arrow-right-short"></i>
              </button>
            </Link>
            <Link to="#">
              <button className="btn btn-secondary">
                Login <i className="bi bi-arrow-right-short"></i>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-xl bg-white">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">
            <img src={logo} alt="Logo" className="me-2" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mainNavbar">
            {/* Mobile Logo and Close Button */}
            <div className="d-xl-none mobile-nav-header">
              <Link className="mobile-logo" to="/">
                <img src={logo} alt="Logo" height="30" />
              </Link>
              <button
                type="button"
                className="btn-close"
                data-bs-toggle="collapse"
                data-bs-target="#mainNavbar"
                aria-label="Close"
              ></button>
            </div>

            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              {navItems.map((item, index) => (
                <li className="nav-item" key={index}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                    to={item.to}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="ms-lg-3 mt-4 mt-lg-0">
              <Link to="/join-jovi" className="no-underline">
                <button className="btn btn-primary">
                  Join Jovi <i className="bi bi-arrow-right-short"></i>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;