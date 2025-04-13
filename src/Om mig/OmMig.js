import React from "react";
// import NavBar from "../NavBar/NavBar";
// import Footer from "../Footer/Footer";
// import { Link } from "react-router";
import "./style.css";

const OmMig = () => {
  return (
    <div>
      {/* <NavBar /> */}
      <div className="om-container">
        <h1 className="h1-mig">PERSONEN BAKOM LIVSKRAFT</h1>
        {window.innerWidth > 560 ? (
          <div className="row row-custom">
            <div className="col-12 col-md-7 col-lg-8">
              <p className="p-om-1">
                "Hälsa är en av livets största gåvor – och mysterier. Ibland kan
                vi påverka den genom våra val, medan andra gånger är sjukdom
                bortom vår kontroll. Oavsett var vi befinner oss finns det
                alltid utrymme för läkning och förståelse."
                <br />
                <br />
              </p>
              <p className="p-om">
                Jag heter Eunice och är legitimerad apotekare med en
                masterexamen i farmaci. Under mina år på apotek mötte jag
                människor med långa medicinlistor och många frågor. I en
                vårdapparat där tiden ofta var knapp för de viktiga samtalen om
                hälsa växte min frustration - men också en idé.
                <br />
                <br />
                Idag arbetar jag inom kliniska prövningar och har fördjupat min
                förståelse för läkemedel och deras potential. Samtidigt är jag
                övertygad om att läkemedel bara är en del av lösningen. Hållbar
                hälsa kräver en helhetssyn och vägledning som gör hälsa både
                begriplig och tillgänglig.
              </p>
              <p className="p-om">
                Det var ur en längtan efter något mer som Livskraft växte fram.
                Ett mer hållbart sätt att leva, tänka och ta hand om sig själv –
                där läkemedel inte är det enda svaret, utan en del av en större
                helhet.
                <br />
                <br />
                Med min farmaceutiska expertis i grunden, och en nyfikenhet på
                hur kroppen och livet samspelar, vill jag erbjuda en plats för
                klarhet, strategi och omsorg. Där du får kraften att fatta medvetna beslut, hitta tillbaka
                till din rytm – och skapa ett liv där hälsa känns självklart.
              </p>
              {/* <p className="p1-om">
                Om detta resonemang väcker något inom dig, är du varmt välkommen
                att utforska mina{" "}
                <Link to="/tjanster" className="om-link">
                  tjänster
                </Link>{" "}
                .
              </p> */}
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
              <p className="p-om-1">
                "Hälsa är en av livets största gåvor – och mysterier. Ibland kan
                vi påverka den genom våra val, medan andra gånger är sjukdom
                bortom vår kontroll. Oavsett var vi befinner oss finns det
                alltid utrymme för läkning och förståelse."
                {/* <br />
                <br /> */}
              </p>
              <p className="p-om">
                Jag heter Eunice och är legitimerad apotekare med en
                masterexamen i farmaci. Under mina år på apotek mötte jag
                människor med långa medicinlistor och många frågor. I en
                vårdapparat där tiden ofta var knapp för de viktiga samtalen om
                hälsa växte min frustration - men också en idé.
                <br />
                <br />
                Idag arbetar jag inom kliniska prövningar och har fördjupat min
                förståelse för läkemedel och deras potential. Samtidigt är jag
                övertygad om att läkemedel bara är en del av lösningen. Hållbar
                hälsa kräver en helhetssyn och vägledning som gör hälsa både
                begriplig och tillgänglig.
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
            <div className="col-12 custom-marg">
              <p className="p-om">
                Det var ur en längtan efter något mer som Livskraft växte fram.
                Ett mer hållbart sätt att leva, tänka och ta hand om sig själv –
                där läkemedel inte är det enda svaret, utan en del av en större
                helhet.
                <br />
                <br />
                Med min farmaceutiska expertis i grunden, och en nyfikenhet på
                hur kroppen och livet samspelar, vill jag erbjuda en plats för
                klarhet, strategi och omsorg. Där du får kraften att fatta medvetna beslut, hitta tillbaka
                till din rytm – och skapa ett liv där hälsa känns självklart.
              </p>
              {/* <p className="p1-om">
                Om detta resonemang väcker något inom dig, är du varmt välkommen
                att utforska mina{" "}
                <Link to="/tjanster" className="om-link">
                  tjänster
                </Link>{" "}
                .
              </p> */}
            </div>
          </div>
        )}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default OmMig;
