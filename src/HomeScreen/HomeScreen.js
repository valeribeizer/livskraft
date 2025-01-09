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
          Är du redo att få svar på dina frågor om hälsa och välmående?
        </h1>
        <p className="p-hs">
          I en tid där hälsa ofta känns som ett mysterium, erbjuder Livskraft en
          plats för klarhet. Som legitimerad apotekare drivs jag av en passion
          för att ge dig verktyg och kunskap att göra medvetna val om din hälsa
          och ditt välbefinnande.
        </p>
        <button className="btn_main btn_hs">
          <Link to="/fa-stod" className="btn-link">
            FÅ STÖD
          </Link>
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default HomeScreen;
