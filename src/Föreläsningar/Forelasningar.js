import React from "react";
import "./style.css";
import { Link } from "react-router";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const Forelasningar = () => {
  const forelasningarArr = [
    {
      name: "“Naturligtvis! Vägar till hälsa utan onödiga piller”",
      desc: "Utforska hur örter, kost, motion och andra naturliga metoder kan stärka din hälsa och minska behovet av läkemedel.",
      key: 1,
    },
    {
      name: "“Apotekaren: Den dolda hjälten i vården”",
      desc: "En öppen diskussion om apotekarens roll och hur deras expertis kan bidra till bättre hälsa och effektivare vård.",
      key: 2,
    },
    {
      name: "“Rättigheter på apoteket – visste du att du har dem?”",
      desc: "Vad kunder har rätt att veta och hur de kan få ut mest av mötet med sin apotekare.",
      key: 3,
    },
    {
      name: "“Läkemedelsgenomgång för dummies – bli klok på dina piller”",
      desc: "En djupdykning i läkemedelsgenomgångar, läkemedelsoptimering och hur rätt justeringar kan göra stor skillnad.",
      key: 4,
    },
    {
      name: "“Livskraft: Från frustration till vision”",
      desc: "Din resa till att starta Livskraft och ditt mål att sätta långsiktig hälsa och naturliga lösningar i centrum.",
      key: 5,
    },
  ];

  return (
    <div>
      <NavBar />
      <div className="forelasningar-container">
        <h1>FÖRELÄSNINGAR</h1>
        <div class="accordion accordion-flush" id="accordionFlushExample">
          {forelasningarArr.map(({ name, desc, key }, index) => (
            <div class="accordion-item" key={index}>
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#${key}`}
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  {name}
                </button>
              </h2>
              <div
                id={key}
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  <p className="p-forelasningar">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="btn_main">
          <Link
            to="/fa-stod"
            className="btn-link"
            state={{ source: "bokningsforfragan" }}
          >
            BOKNINGSFÖRFRÅGAN
          </Link>
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Forelasningar;
