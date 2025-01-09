import React from "react";
import { Link } from "react-router";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import './style.css';

const OmOss = () => {
    return (
      <div>
        <NavBar />
        <div className="om-oss-container">
          <h1>OM OSS</h1>
          <div className="row">
            <div className="col-lg-6 align-self-end">
              <p className="p-om-oss">
                Välkommen till Livskraft – en plats där kunskap möter naturens
                visdom. Här vill jag ge dig verktyg och insikter för att göra
                medvetna val om din hälsa och ditt välmående. Genom utbildning
                om dina läkemedel och personligt anpassade
                livsstilsförändringar, förankrade i forskning och fakta, utgår
                vi från där du befinner dig idag – för att skapa förändringar
                som känns hanterbara, hållbara och meningsfulla. <br />
                <br />
                På Livskraft är mitt mål att inspirera dig att utforska nya
                vägar till balans, hållbarhet och långsiktig hälsa. Din resa
                börjar här – med nyfikenhet, kunskap och en vilja att ta
                kontroll över ditt välmående.
                <br />
                <br />
                Vill du veta mer om mig och vad som inspirerade mig att starta
                Livskraft?{" "}
                <Link to="/om-mig" style={{ color: "#3f3b36" }}>
                  Klicka här
                </Link>
              </p>
            </div>
            <div className="col-lg-6 d-flex justify-content-col padding-col">
              <img
                className="om-oss-img"
                src="om-oss-img.png"
                alt="om-oss"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
}

export default OmOss;