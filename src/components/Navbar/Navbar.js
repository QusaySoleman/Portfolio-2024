import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="nav-content">
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="logo" href="#">
            Qusay B11-FD
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
            className="collapse navbar-collapse p-2"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact-section">Contact</a>
              </li>
            </ul>
            <div className="call-icon-box">
              <i className="call-icon bi bi-telephone-plus-fill me-3"></i>
              <div className="call-icon-phone-number">0993519890</div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
