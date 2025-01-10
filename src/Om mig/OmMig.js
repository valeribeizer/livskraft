import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Link } from "react-router";
import "./style.css";

const OmMig = () => {
  return (
    <div>
      <NavBar />
      <div className="om-container">
        <h1>PERSONEN BAKOM LIVSKRAFT</h1>
        <div className="row row-custom">
          <div className="col-12 col-md-6 col-lg-6">
            <p className="p-om">
              Hälsa är en av livets största gåvor – och mysterier. Ibland kan vi
              påverka den genom våra val, ibland är sjukdom bortom vår kontroll.
              Men oavsett var vi börjar finns det alltid utrymme för läkning,
              balans och förståelse.
              <br />
              <br />
              Jag heter Eunice och är legitimerad apotekare med en masterexamen
              i farmaci. Under mina två år på apotek mötte jag många människor
              med långa medicinlistor och små, men viktiga, frågor. Jag såg hur
              vården ofta saknade tid för det viktigaste – samtalet. Där föddes
              idén till Livskraft.
            </p>
          </div>
          <div className="col-12 col-md-6 col-lg-6 col-om-mig">
            <img
              className="om-mig-img-1"
              src="om-mig-img-1.png"
              alt="om-mig-img-1"
              loading="lazy"
            />
          </div>
        </div>
        {window.innerWidth > 560 ? (
          <div className="row row-custom custom-marg">
            <div className="col-12 col-md-4 col-lg-4">
              <img
                className="om-mig-img"
                src="om-mig-img.png"
                alt="om-mig-img"
                loading="lazy"
              />
            </div>
            <div className="col-12 col-md-8 col-lg-8">
              <p className="p-om">
                Idag arbetar jag med kliniska prövningar på ett
                läkemedelsföretag och har fått en ännu djupare insikt i
                läkemedlens möjligheter och begränsningar. Men det som driver
                mig är önskan att hjälpa på ett mer hållbart och meningsfullt
                sätt. Livskraft är mitt sätt att förena vetenskap och natur –
                att se hela människan och inte bara symtomen. Som mamma till en
                tvååring vet jag hur viktigt det är att hitta balans i livet och
                skapa utrymme för det som verkligen betyder något. Den energin
                vill jag dela med dig här på Livskraft. Min vision är att hjälpa
                dig hitta din väg till färre läkemedel, mer välmående och en
                hälsa som håller – för livet.
                <br />
                <br />
                Min vision med Livskraft är att göra hälsan både förståelig och
                tillgänglig. Genom att kombinera min expertis som apotekare med
                en holistisk syn på välmående, erbjuder jag vägledning för att
                hjälpa dig navigera dina läkemedel, utforska naturliga lösningar
                och skapa en hållbar hälsa som håller över tid.
                <br />
                <br />
                Livskraft handlar om att se hela människan – dina mål,
                utmaningar och möjligheter – och ge dig verktygen att ta
                kontroll över din egen hälsoresa.
              </p>
              <p className="p1-om">
                Utforska mina
                <Link to="/tjanster" className="om-link">
                  tjänster
                </Link>
                här och ta första steget mot en hållbar hälsa.
              </p>
            </div>
          </div>
        ) : (
          <div className="row row-custom custom-marg">
            <div className="col-12 col-lg-8">
              <p className="p-om">
                Idag arbetar jag med kliniska prövningar på ett
                läkemedelsföretag och har fått en ännu djupare insikt i
                läkemedlens möjligheter och begränsningar. Men det som driver
                mig är önskan att hjälpa på ett mer hållbart och meningsfullt
                sätt. Livskraft är mitt sätt att förena vetenskap och natur –
                att se hela människan och inte bara symtomen. Som mamma till en
                tvååring vet jag hur viktigt det är att hitta balans i livet och
                skapa utrymme för det som verkligen betyder något. Den energin
                vill jag dela med dig här på Livskraft. Min vision är att hjälpa
                dig hitta din väg till färre läkemedel, mer välmående och en
                hälsa som håller – för livet.
                <br />
                <br />
                Min vision med Livskraft är att göra hälsan både förståelig och
                tillgänglig. Genom att kombinera min expertis som apotekare med
                en holistisk syn på välmående, erbjuder jag vägledning för att
                hjälpa dig navigera dina läkemedel, utforska naturliga lösningar
                och skapa en hållbar hälsa som håller över tid.
                <br />
                <br />
                Livskraft handlar om att se hela människan – dina mål,
                utmaningar och möjligheter – och ge dig verktygen att ta
                kontroll över din egen hälsoresa.
              </p>
              <p className="p1-om">
                Utforska mina
                <Link to="/tjanster" className="om-link">
                  tjänster
                </Link>
                här och ta första steget mot en hållbar hälsa.
              </p>
            </div>
            <div className="col-12 col-lg-4 col-om-mig-1">
              <img
                className="om-mig-img"
                src="om-mig-img.png"
                alt="om-mig-img"
                loading="lazy"
              />
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default OmMig;
