import React from "react";
import "./style.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const Shoppen = () => {
  return (
    <div>
      <NavBar />
      <div className="butik-container">
        <h1>BUTIK</h1>
        <h3 className="h3-butik">
          Vi skapar just nu ett unikt sortiment som förenar balans, välmående
          och hållbarhet – för dig och ditt hem.
        </h3>
        <h2 className="h2-butik h22">Snart i butiken:</h2>
        <p className="p-butik">
          ❥ Naturliga favoriter: Rökelser, teer, honung, ljus och tinkturer –
          varsamt utvalda för att främja lugn, balans och harmoni i vardagen.
        </p>
        <p className="p-butik">
          ❥ Hållbar inredning: Återbrukade krukor, ljusstakar och
          förvaringsaskar – unika föremål med en historia att berätta, fyllda
          med själ och karaktär.
        </p>
        <p className="p-butik">
          ❥ Unika detaljer: Konst och små inredningsdetaljer som omvandlar ditt
          hem till en oas av värme, inspiration och personlighet.
        </p>
        <div className="row row-cs">
          <div className="col-12 col-lg-4 col-md-5 col-cs">
            <video className="video-sh" autoPlay loop playsInline>
              <source src="candles.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="col-12 col-lg-8 col-md-7">
            <h3 className="h3-butik h33">
              Livskrafts butik är mer än bara en webbshop – det är en plats där
              varje produkt bär på en berättelse. Varje föremål är utvalt med
              kärlek, omtanke och respekt för både dig och naturen. Vårt mål är
              att skapa något som inte bara är vackert att se på, utan också
              meningsfullt att äga.
            </h3>
          </div>
        </div>

        <h1 className="h1-butik h33">Håll dig uppdaterad!</h1>
        <p className="p-butik" style={{ textAlign: "justify" }}>
          Följ oss på{" "}
          <a className="a-butik" href="https://www.instagram.com/livskraft.eu/" target="_blank">
            Instagram
          </a>{" "}
          för att vara först med att få veta när butiken öppnar ⎔❦⎔
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Shoppen;
