import React from "react";
import logo from "./images/logo.png";
import Main from "./Main";
const Navbar = () => {
  return (
    <>
      <div className="container-fluid px-5 py-3 nav-background">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <div>
                <img src={logo} alt="Home Logo" className="logoStyle" />
              </div>
            </a>
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
                  <a className="nav-link pe-5" href="#">
                    Products
                  </a>
                </li>
                <li className="nav-item ps-2">
                  <a className="nav-link pe-5" href="#">
                    Digitalization
                  </a>
                </li>
                <li className="nav-item ps-2">
                  <a className="nav-link pe-5 " href="#">
                    Engineering
                  </a>
                  <ul
                    className="sub-menus"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a class="dropdown-item" href="#">
                        Engineering Services
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Rotor Dynamics
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Surge Dynamics
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Reverse Engineering
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Retrofit & upgrade
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item ps-2 pe-5">
                  <a className="nav-link" href="#" data-bs-toggle="dropdown">
                    Plant Services
                  </a>
                  <ul className="sub-menus">
                    <li>
                      <a class="dropdown-item" href="#">
                        Operation and Maintanence
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Condition Monitoring
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Plant Turnaround
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Field Performance Test
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Engineered Spare Parts
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item ps-2 pe-5">
                  <a className="nav-link" href="#">
                    Perspectives
                  </a>
                </li>
                <li className="nav-item ps-2">
                  <a className="nav-link pe-5 me-lg--5 " href="#">
                    Company
                  </a>
                  <ul className="sub-menus last">
                    <li>
                      <a class="dropdown-item" href="#">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Careers
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <Main />
    </>
  );
};

export default Navbar;
