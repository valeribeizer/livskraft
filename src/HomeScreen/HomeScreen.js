import React from "react";
import NavBar from "../NavBar/NavBar";
import "./style.css";
import Footer from "../Footer/Footer";
import { Link } from "react-router";

const HomeScreen = () => {
  return (
    <div>
      <NavBar />
      <div className="hs_container">
        <img
          className="hs_img"
          src="homescreen_img.png"
          alt="homescreen_img"
          loading="lazy"
        />
        <h1 className="h1-hs">
          Ett lugnt ankare i din hälsovardag – för dig, eller någon du bryr dig
          om
        </h1>
        <p className="p-hs">
          Med legitimation som apotekare, djup medicinsk kunskap och ett tränat
          öga för subtila signaler hjälper jag dig att fatta kloka, medvetna
          beslut om din kropp och ditt välmående. Tänk dig en egen husapotekare
          – en advokat för din hälsa. Någon som ser helheten, ifrågasätter det
          rutinmässiga när det skaver och står på din sida när det behövs som
          mest.
        </p>
        <button className="btn_main btn_hs">
          <Link
            to="/fa-stod"
            className="btn-link"
            state={{ source: "fa-stod" }}
          >
            BOKA EN PRIVAT KONSULTATION
          </Link>
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default HomeScreen;
