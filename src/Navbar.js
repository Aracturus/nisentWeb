import React from "react";
import logo from "./images/logo.png";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid px-5 py-3 nav-background">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <NavLink
              className="navbar-brand"
              activeClassName="navbar-active-class"
              to="#"
            >
              <div>
                <img src={logo} alt="Home Logo" className="logoStyle" />
              </div>
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mt-lg-4 mb-lg-0 w-100 d-flex justify-content-end">
                <li className="nav-item ps-2">
                  <NavLink
                    className="nav-link pe-5"
                    to="/"
                    activeClassName="active-navbar"
                  >
                    Products
                  </NavLink>
                </li>
                <li className="nav-item ps-2">
                  <NavLink
                    className="nav-link pe-5"
                    to="/Products"
                    activeClassName="active-navbar"
                  >
                    Digitalization
                  </NavLink>
                </li>
                <li className="nav-item ps-2">
                  <NavLink className="nav-link pe-5 " to="#">
                    Engineering
                  </NavLink>
                  <ul
                    className="sub-menus"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <NavLink class="dropdown-item" to="#">
                        Engineering Services
                      </NavLink>
                    </li>
                    <li>
                      <NavLink class="dropdown-item" to="#">
                        Rotor Dynamics
                      </NavLink>
                    </li>
                    <li>
                      <NavLink class="dropdown-item" to="#">
                        Surge Dynamics
                      </NavLink>
                    </li>
                    <li>
                      <NavLink class="dropdown-item" to="#">
                        Reverse Engineering
                      </NavLink>
                    </li>
                    <li>
                      <NavLink class="dropdown-item" to="#">
                        Retrofit & upgrade
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="nav-item ps-2 pe-5">
                  <NavLink
                    className="nav-link"
                    to="#"
                    data-bs-toggle="dropdown"
                  >
                    Plant Services
                  </NavLink>
                  <ul className="sub-menus">
                    <li>
                      <NavLink class="dropdown-item" to="#">
                        Operation and Maintanence
                      </NavLink>
                    </li>
                    <li>
                      <NavLink class="dropdown-item" to="#">
                        Condition Monitoring
                      </NavLink>
                    </li>
                    <li>
                      <NavLink class="dropdown-item" to="#">
                        Plant Turnaround
                      </NavLink>
                    </li>
                    <li>
                      <NavLink class="dropdown-item" to="#">
                        Field Performance Test
                      </NavLink>
                    </li>
                    <li>
                      <NavLink class="dropdown-item" to="#">
                        Engineered Spare Parts
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="nav-item ps-2 pe-5">
                  <NavLink className="nav-link" to="#">
                    Perspectives
                  </NavLink>
                </li>
                <li className="nav-item ps-2">
                  <NavLink className="nav-link pe-5 me-lg--5 " to="#">
                    Company
                  </NavLink>
                  <ul className="sub-menus last">
                    <li>
                      <NavLink class="dropdown-item" to="#">
                        About Us
                      </NavLink>
                    </li>
                    <li>
                      <NavLink class="dropdown-item" to="#">
                        Careers
                      </NavLink>
                    </li>
                    <li>
                      <NavLink class="dropdown-item" to="#">
                        Contact Us
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
