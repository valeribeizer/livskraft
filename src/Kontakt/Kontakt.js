import React from "react";
import "./style.css";
import { Link } from "react-router";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const Kontakt = () => {
  return (
    <div>
      <NavBar />
      <div className="kt-container">
        <h1>KONTAKT</h1>
        <div className="kt-content">
          <img
            className="kt-img"
            src="kontakt_img.png"
            alt="kontakt"
            loading="lazy"
          />
          <button className="btn_main btn_hs">
            <Link
              to="/fa-stod"
              className="btn-link"
              state={{ source: "fa-stod" }}
            >
              KOM I KONTAKT
            </Link>
          </button>
          <a className="a-kontakt" href="mailto:info@livskraft.eu">
            <p className="p-kontakt">info@livskraft.eu</p>
          </a>
          <a href="https://www.instagram.com/livskraft.eu/">
            <img className="insta-icon" src="insta_icon.png" alt="insta" />
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Kontakt;
