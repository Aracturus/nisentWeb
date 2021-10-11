import React from "react";
import logo from "./images/logo.png";
import './navbar.css'

// import { NavLink } from "react-router-dom";

const Navbar = () => { 

  document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-actives');
          $target.classList.toggle('is-actives');
  
        });
      });
    }
  
  });
    
  return (
    <>
      {/* <div className="container-fluid px-5 py-3 nav-background">
        <nav className="navbar navbar-expand-lg navbar-dark">
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
      </div> */}



<nav className="navbar navbar-menu  is-black" id="nav-bar" role="navigation" aria-label="main navigation">
                <div className="container ">

                  <div className="navbar-brand navbar-start ">
                    <a href="/"className="navbar-item" href="/">
                      <img src={logo} width="180" height="40"/>
                    </a>

                    <a href="/"role="button" className="navbar-burger  navbar-end" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                      <span aria-hidden="true"></span>
                      <span aria-hidden="true"></span>
                      <span aria-hidden="true"></span>
                    </a>
                  </div>

                  <div id="navbarBasicExample" className="navbar-menu is-hoverable" >
                    <div className="navbar-end has-text-danger-dark" >
                      <a href="/"className="navbar-item " >
                      Products
                      </a>

                      <a href="/"className="navbar-item ">
                      Digitalization
                      </a>

                      <div className="navbar-item has-dropdown is-hoverable" >
                        <a href="/"className="navbar-link is-arrowless ">
                        Engineering
                        </a>

                        <div className="navbar-dropdown  ">
                          <a href="/"className="navbar-item ">
                            Engineering Services
                          </a>
                          <a href="/"className="navbar-item">
                            Rotor Dynamics
                          </a>
                          <a href="/"className="navbar-item" >
                            Surge Dynamics
                          </a>
                          <a href="/"className="navbar-item">
                            Reverse Engineering
                          </a>
                          <a href="/"className="navbar-item">
                            Retrofit &amp; Upgrade
                          </a>
                        </div>
                      </div><div className="navbar-item has-dropdown is-hoverable">
                        <a href="/"className="navbar-link is-arrowless " >
                        Plant Services
                        </a>

                        <div className="navbar-dropdown ">
                          <a href="/"className="navbar-item">
                            Operation &amp; Maintanence
                          </a>
                          <a href="/"className="navbar-item">
                            Condition Monitoring
                          </a>
                          <a href="/"className="navbar-item">
                            Plant Turnaroung
                          </a>
                          <a href="/"className="navbar-item">
                            Field Performance Test
                          </a>
                          <a href="/"className="navbar-item">
                            Engineered Spare Parts
                          </a>
                        </div>
                      </div>
                      <a href="/"className="navbar-item ">
                      Perspectives
                      </a>
                      <div className="navbar-item has-dropdown is-hoverable">
                        <a href="/"className="navbar-link is-arrowless ">
                        Company
                        </a>

                        <div className="navbar-dropdown">
                          <a href="/"className="navbar-item">
                            About Us
                          </a>
                          <a href="/"className="navbar-item ">
                            Career
                          </a>
                          <a href="/"className="navbar-item">
                            Contact us
                          </a>
                        </div>
                      </div>
                    </div>

                    
                  </div>
                </div>

            </nav>

            
    </>
  );
};

export default Navbar;
