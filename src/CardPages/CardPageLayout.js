import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Link } from "react-router";
import "./style.css";

const CardPageLayout = ({ title }) => {
  return (
    <div>
      <NavBar />
      <main className="card-page-container">
        <h1>{title}</h1>
        <p className="card-page-text">
          Innehall for den har sidan kommer inom kort.
        </p>
        <Link to="/kontakt" className="btn_main card-page-btn">
          Kontakta mig
        </Link>
      </main>
      <Footer />
    </div>
  );
};

export default CardPageLayout;
