import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import Slider from "react-slick";
import "./style.css";
import Footer from "../Footer/Footer";

const Priser = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const priser_card = [
    {
      key: 1,
      src: "pris-img-1.png",
      alt: "pris-img-1",
      title: "Läkemedelsgenomgång",
      desc: "För dig som vill förstå din medicinering på djupet och skapa en trygg grund för din hälsa. Vi börjar med ett grundligt möte (60 min) där vi går igenom syfte, dosering, för- och nackdelar med dina läkemedel. Efter mötet får du en skriftlig sammanfattning med personliga rekommendationer, som blir en värdefull resurs att ta med till din läkare och en trygg följeslagare på din hälsoresa.",
      price: "fr 1800 sek",
    },
    {
      key: 2,
      src: "pris-img-2.png",
      alt: "pris-img-2",
      title: "Hälsokonsultation med fokus på naturliga lösningar",
      desc: "Upptäck kraften i naturliga metoder för att stödja din hälsa på ett hållbart sätt. I denna individuella konsultation (45 min) diskuterar vi naturliga hälsometoder och livsstilsförändringar som kan komplettera din behandling. Du får en anpassad plan med rekommendationer kring örter, kost och livsstil, utformad för att stärka ditt välmående.",
      price: "fr 1200 sek",
    },
    {
      key: 3,
      src: "pris-img-3.png",
      alt: "pris-img-3",
      title: "Uppföljande konsultation",
      desc: "Ett uppföljande möte (30 min) för att utvärdera dina framsteg och anpassa din behandlingsplan. Med regelbunden uppföljning får du stöd på vägen, så att vi tillsammans kan forma en långsiktig plan som fungerar för dig.",
      price: "fr 800 sek",
    },
    {
      key: 4,
      src: "pris-img-4.png",
      alt: "pris-img-4",
      title: "Föreläsningar och Workshops",
      desc: "Inspirerande föreläsningar och workshops som är utformade för att ge insikt, väcka nyfikenhet och erbjuda praktiska verktyg för en mer hållbar hälsa. Välj bland befintliga teman eller låt oss skräddarsy något unikt för din organisation. Kontakta oss gärna för ett prisförslag baserat på dina behov.",
      price: "fr 5700 sek",
    },
  ];

  const priser = [
    {
      price: "fr 1800 sek",
    },
    {
      price: "fr 1200 sek",
    },
    {
      price: "fr 800 sek",
    },
    {
      price: "fr 5700 sek",
    },
  ];

  const [flippedCardId, setFlippedCardId] = useState(null);

  const handleCardClick = (id) => {
    setFlippedCardId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div>
      <NavBar />
      <div className="priser-container">
        <h1>PRISER</h1>
        {window.innerWidth > 1180 ? (
          <div>
            <div className="row">
              {priser_card.map(({ src, alt, title, desc }, index) => (
                <div className="col-lg-3" key={index}>
                  <div
                    className={`card-container ${
                      flippedCardId === index ? "flipped" : ""
                    }`}
                    onClick={() => handleCardClick(index)}
                  >
                    <div
                      className="card"
                      style={{ backgroundImage: "url('/priser-bg.png')" }}
                    >
                      <div className="card-front">
                        <img
                          className="img-priser"
                          src={src}
                          alt={alt}
                          loading="lazy"
                        />
                        <h3 className="h3-priser">{title}</h3>
                      </div>
                      <div className="card-back">
                        <p className="p-priser">{desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="row">
              {priser.map(({ price }, index) => (
                <div className="col-lg-3" key={index}>
                  <h3 className="h3-pr">{price}</h3>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="slider-container">
            <Slider {...settings}>
              {priser_card.map(({ src, alt, title, desc, price }, index) => (
                <div key={index}>
                  <div
                    className={`card-container ${
                      flippedCardId === index ? "flipped" : ""
                    }`}
                    onClick={() => handleCardClick(index)}
                  >
                    <div
                      className="card"
                      style={{ backgroundImage: "url('/priser-bg.png')" }}
                    >
                      <div className="card-front">
                        <img
                          className="img-priser"
                          src={src}
                          alt={alt}
                          loading="lazy"
                        />
                        <h3 className="h3-priser">{title}</h3>
                      </div>
                      <div className="card-back">
                        <p className="p-priser">{desc}</p>
                      </div>
                    </div>
                    <h3 className="h3-pr">{price}</h3>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        )}
        <div className="row row-priser">
          <h2 className="h2-priser" style={{ textAlign: "center" }}>
            KONTAKTA FÖR OFFERT
          </h2>
          <p className="p-priser" style={{ textAlign: "center" }}>
            Alla priser inkluderar moms, och vi erbjuder smidiga
            betalningsalternativ som Swish, kortbetalning och banköverföring.
            Kvitto skickas automatiskt till din e-post för enkel dokumentation.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Priser;
