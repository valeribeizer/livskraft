import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Link } from "react-router";
import "./style.css";

const CardPageLayout = ({
  title,
  subtitle,
  children,
  ctaTo = "/kontakt",
  ctaLabel = "Kontakta mig",
}) => {
  return (
    <div className="card-page-layout">
      <NavBar />
      <main className="card-page-container">
        <h1>{title}</h1>
        {subtitle ? (
          <p className="card-page-subtitle">{subtitle}</p>
        ) : null}
        {children ? (
          <div className="card-page-body">{children}</div>
        ) : (
          <p className="card-page-text">
            Innehall for den har sidan kommer inom kort.
          </p>
        )}
        <Link to={ctaTo} className="btn_main card-page-btn">
          {ctaLabel}
        </Link>
      </main>
      <Footer />
    </div>
  );
};

export default CardPageLayout;
