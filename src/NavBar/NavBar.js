import React from "react";
import { Link } from "react-router";
import "./style.css";

const NavBar = () => {
  return (
    <>
      <div className="navbar navbar-light bg-light d-none d-lg-block">
        <div className="container text-center">
          <Link to="/" className="navbar-brand mx-auto">
            <img className="logo" src="logo_nav.png" alt="logo" />
          </Link>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link to="/" className="navbar-brand mx-auto d-lg-none">
            <img className="logo" src="logo_nav.png" alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav w-100 justify-content-evenly">
              <li className="nav-item">
                <Link to="/om-oss" className="nav-link">
                  OM OSS
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/tjanster" className="nav-link">
                  TJÄNSTER
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/priser" className="nav-link">
                  PRISER
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/butik" className="nav-link">
                  BUTIK
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/faq" className="nav-link">
                  FAQ
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/kontakt" className="nav-link">
                  KONTAKT
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/blog" className="nav-link">
                  BLOGG
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link to="/" className="nav-link">
                  SW/ENG
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
