import React from "react";
import { Link } from "react-router";
import "./style.css";

const NavBar = () => {
  return (
    // <nav class="navbar navbar-expand-lg fixed-top bg-body-tertiary">
    //   <div class="container-fluid">
    //     <Link to="/"
    //       className="navbar-brand mx-auto position-absolute start-50 translate-middle-x"
    //       href="#"
    //     >
    //       <img className="logo" src="logo_nav.png" alt="logo" />
    //     </Link>
    //     <button
    //       class="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarContent"
    //       aria-controls="navbarContent"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span class="navbar-toggler-icon"></span>
    //     </button>
    //     <div class="collapse navbar-collapse" id="navbarContent">
    //       <ul class="navbar-nav w-100 justify-content-between">
    //         <li class="nav-item">
    //           <Link to="/om-oss" className="nav-link">
    //             OM OSS
    //           </Link>
    //         </li>
    //         <li class="nav-item">
    //           <Link to="/tsjanster" className="nav-link">
    //             TJÄNSTER
    //           </Link>
    //         </li>
    //         <li class="nav-item">
    //           <Link to="/priser" className="nav-link">
    //             PRISER
    //           </Link>
    //         </li>
    //         <li class="nav-item d-none d-lg-block flex-grow-1"></li>
    //         <li class="nav-item">
    //           <Link to="/faq" className="nav-link">
    //             FAQ
    //           </Link>
    //         </li>
    //         <li class="nav-item">
    //           <Link to="/kontakt" className="nav-link">
    //             KONTAKT
    //           </Link>
    //         </li>
    //         <li class="nav-item">
    //           <Link to="/blog" className="nav-link">
    //             BLOGG
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
    <>
      {/* Верхний уровень с NavBrand (десктоп) */}
      <div className="navbar navbar-light bg-light d-none d-lg-block">
        <div className="container text-center">
          <Link to='/' className="navbar-brand mx-auto">
            <img className="logo" src="logo_nav.png" alt="logo" />
          </Link>
        </div>
      </div>

      {/* Нижний уровень с NavLinks */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          {/* NavBrand для мобильной версии */}
          <Link to='/' className="navbar-brand mx-auto d-lg-none">
            <img className="logo" src="logo_nav.png" alt="logo" />
          </Link>

          {/* Toggle для мобильной версии */}
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

          {/* NavLinks */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav w-100 justify-content-between">
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
                <Link to="/shoppen" className="nav-link">
                  SHOPPEN
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
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
