import React from "react";
// import NavBar from "../NavBar/NavBar";
// import Footer from "../Footer/Footer";
// import { Link } from "react-router";
import "./style.css";

const OmMig = () => {
  return (
    <div>
      <div className="om-container">
        <h1 className="h1-mig">PERSONEN BAKOM LIVSKRAFT</h1>
        {window.innerWidth > 560 ? (
          <div className="row row-custom">
            <div className="col-12 col-md-7 col-lg-8">
              <p className="p-om">
                Jag heter Eunice och är legitimerad apotekare med särskilt fokus på läkemedelsgranskning och integrativ hälsa. Mitt arbete rör sig i gränslandet mellan apotek, vård och naturmedicin – där många idag saknar stöd.
                <br />
                <br />
                Jag erbjuder rådgivning inom ramen för friskvård, för dig som vill:
                <br />
                ✓ förstå din medicinering
                <br />
                ✓ minska onödig belastning på kroppen
                <br />
                ✓ upptäcka dolda risker
                <br />
                ✓ stötta kroppen med naturens resurser
                <br />
                <br />
                Om något ligger utanför mitt expertisområde, hänvisar jag vidare till betrodda kontakter inom vård eller hälsa.
              </p>
            </div>
            <div className="col-12 col-md-5 col-lg-4 col-om-mig">
              <img
                className="om-mig-img-1"
                src="om-mig-img-1.png"
                alt="om-mig-img-1"
                loading="lazy"
              />
            </div>
          </div>
        ) : (
          <div className="row row-custom">
            <div className="col-12 col-md-7 col-lg-8">
              <p className="p-om">
                Jag heter Eunice och är legitimerad apotekare med särskilt fokus på läkemedelsgranskning och integrativ hälsa. Mitt arbete rör sig i gränslandet mellan apotek, vård och naturmedicin – där många idag saknar stöd.
                <br />
                <br />
                Jag erbjuder rådgivning inom ramen för friskvård, för dig som vill:
                <br />
                ✓ förstå din medicinering
                <br />
                ✓ minska onödig belastning på kroppen
                <br />
                ✓ upptäcka dolda risker
                <br />
                ✓ stötta kroppen med naturens resurser
                <br />
                <br />
                Om något ligger utanför mitt expertisområde, hänvisar jag vidare till betrodda kontakter inom vård eller hälsa.
              </p>
            </div>
            <div className="col-12 col-md-5 col-lg-4 col-om-mig">
              <img
                className="om-mig-img-1"
                src="om-mig-img-1.png"
                alt="om-mig-img-1"
                loading="lazy"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OmMig;
