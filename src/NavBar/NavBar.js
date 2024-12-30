import React from "react";
import { Link } from "react-router";
import "./style.css";

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg fixed-top bg-body-tertiary">
      <div class="container-fluid">
        <Link to="/"
          className="navbar-brand mx-auto position-absolute start-50 translate-middle-x"
          href="#"
        >
          <img className="logo" src="logo_nav.png" alt="logo" />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarContent">
          <ul class="navbar-nav w-100 justify-content-between">
            <li class="nav-item">
              <Link to="/om-oss" className="nav-link">
                OM OSS
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/tsjanster" className="nav-link">
                TJÄNSTER
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/priser" className="nav-link">
                PRISER
              </Link>
            </li>
            <li class="nav-item d-none d-lg-block flex-grow-1"></li>
            <li class="nav-item">
              <Link to="/faq" className="nav-link">
                FAQ
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/kontakt" className="nav-link">
                KONTAKT
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/blog" className="nav-link">
                BLOG
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
