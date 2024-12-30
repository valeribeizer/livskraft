import React from "react";
import './style.css';
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const OmOss = () => {
    return (
      <div>
        <NavBar />
        <div className="om-oss-container">
          <h1>OM OSS</h1>
          <div className="row">
            <div className="col-lg-6 align-self-end">
              <p className="p-om-oss">
                Välkommen till Livskraft – en plats där vetenskap möter
                naturliga metoder för hållbar hälsa. Som apotekare med djup
                förståelse för läkemedlens kraft och begränsningar är min
                uppgift att guida dig – från att granska och optimera din
                medicinering till att utforska naturliga lösningar som stärker
                både kropp och sinne. <br />
                <br />I dagens vård prioriteras ofta snabba lösningar framför
                tid för samtal och stöd. Detta lämnar många utan den helhetsvård
                som krävs för långsiktig hälsa. Hos Livskraft handlar det om att
                gå djupare, att skapa en balans där rätt läkemedel möter
                hållbara livsstilsförändringar. Här är läkemedel en del av
                lösningen, men aldrig hela svaret.
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