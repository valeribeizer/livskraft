import React from "react";
import NavBar from "../NavBar/NavBar";
import "./style.css";
import Footer from "../Footer/Footer";
import OmMig from "../Om mig/OmMig";
import Klientroster from "../Klientroster/Klientroster";

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
          Tänk dig en egen husapotekare – en advokat för din hälsa
        </h1>
        <p className="p-hs p-hs-intro">
          Känner du dig osäker på om dina läkemedel verkligen passar dig?
        </p>
        <p className="p-hs p-hs-intro">
          Har du oklara symptom eller biverkningar som ingen verkar ta på
          allvar?
        </p>
        <p className="p-hs p-hs-intro">
          Vill du veta hur du kan stötta kroppen naturligt och minska behovet
          av din nuvarande medicinering?
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeD26SQCEJ3EyCzavucHDpMPkjjtp5u1dYOTDA7LYX8OtTBlw/viewform"
          className="btn_main btn_hs btn-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Få en farmaceutisk vägledning
        </a>
      </div>
      <Klientroster />
      <OmMig />
      <Footer />
    </div>
  );
};

export default HomeScreen;
