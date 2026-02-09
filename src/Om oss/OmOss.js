import React from "react";
// import { Link } from "react-router";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import './style.css';

const OmLivskraft = () => {
  return (
    <div className="om-oss-container">
      <div className="custom-wrapper">
        <NavBar />
      </div>
      <h1>OM LIVSKRAFT</h1>
      <div className="row">
        <div className="col-lg-5 align-self-end">
          <p className="p-om-oss">
            Välkommen till Livskraft – en plats där vetenskap möter naturens visdom. Här vill jag ge dig verktyg och insikter för att göra medvetna val om din hälsa och ditt välmående. Genom utbildning om dina läkemedel och personligt anpassade livsstilsförändringar, förankrade i både forskning och tradition, utgår vi från där du befinner dig idag – för att skapa förändringar som känns hanterbara, hållbara och meningsfulla. <br />
            <br />
            Under min tid i arbetslivet mötte jag människor med långa medicinlistor och många frågor och i en vårdapparat där tiden ofta var knapp för att hjälpa någon på riktigt växte min frustration - men också en djupare förståelse om att läkemedel bara är en del av lösningen. Hållbar hälsa kräver en helhetssyn, vägledning och uppföljning som gör hälsa både begriplig och tillgänglig. <br />
            <br />
            Det var ur en längtan efter något mer som Livskraft växte fram. Med min farmaceutiska expertis i grunden, och en nyfikenhet på hur kroppen och livet samspelar, vill jag erbjuda den omsorg som jag själv hade önskat få i kontakt med vården.
            <p className="p-om-oss-1">
              <br />
              <br />
              &quot;Hälsa är en av livets största gåvor – och mysterier. Ibland kan
              vi påverka den genom våra val, medan andra gånger är sjukdom
              bortom vår kontroll. Oavsett var vi befinner oss finns det
              alltid utrymme för läkning och förståelse.&quot;

            </p>

            {/* <br />
                <br />
                Vill du veta mer om mig och vad som inspirerade mig att starta
                Livskraft?{" "}
                <Link to="/om-mig" style={{ color: "#3f3b36" }}>
                  Klicka här
                </Link> */}
          </p>
        </div>
        {/* <div className="col-lg-5 d-flex justify-content-col padding-col">
              <img
                className="om-oss-img"
                src="om-oss-img.png"
                alt="om-oss"
                loading="lazy"
              />
            </div> */}
      </div>
      <div className="custom-wrapper">
        <Footer />
      </div>
    </div>
  );
}

export default OmLivskraft;