import React from "react";
import homelogo from "./images/homelogo.png";
import Main from "./Main";
const Navbar = () => {
  return (
    <>
      <div className="container-fluid px-5 py-3">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <div>
                <img src={homelogo} alt="Home Logo" />
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
              <ul className="navbar-nav me-auto mt-lg-4 mb-lg-0 ms-lg-4 w-100">
                <li className="nav-item ps-2">
                  <a className="nav-link active" aria-current="page" href="#">
                    Products
                  </a>
                </li>
                <li className="nav-item ps-2">
                  <a className="nav-link" href="#">
                    Solutions
                  </a>
                </li>
                <li className="nav-item ps-2">
                  <a className="nav-link" href="#">
                    Applications
                  </a>
                </li>
                <li className="nav-item ps-2">
                  <a className="nav-link" href="#">
                    Resources
                  </a>
                </li>
                <li className="nav-item ps-2">
                  <a className="nav-link" href="#">
                    Blog
                  </a>
                </li>
                <div className="d-flex align-items-center justify-content-end w-100">
                  <li className="nav-item ps-2">
                    <a className="nav-link number" href="#">
                      <i class="fas fa-phone"></i> +91 9152030613
                    </a>
                  </li>
                  <li className="nav-item ps-2">
                    <a className="nav-link" href="#">
                      <button className="btn btn-light rounded-pill rounded-btn">or</button>
                    </a>
                  </li>
                  <li className="nav-item ps-2">
                    <a className="nav-link" href="#">
                      <button className="btn button-big btn-style">
                        Contact Us
                      </button>
                    </a>
                  </li>
                  <li className="nav-item ps-2">
                    <a className="nav-link" href="#">
                      <button className="btn button-big btn-style-btn">
                        Partner with Us
                      </button>
                    </a>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <Main/>
    </>
  );
};

export default Navbar;
