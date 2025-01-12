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
      desc: "För dig som vill få en djupare förståelse för din medicinering och skapa en trygg grund för din hälsa. Tjänsten inleds med ett grundligt möte (60 min) där vi går igenom syfte, dosering samt för- och nackdelar med dina läkemedel utifrån dina frågor och behov. Efter mötet får du en skriftlig sammanställning som hjälper dig att förstå din medicinering och som kan användas i dialogen med din läkare – en värdefull resurs för din hälsoresa.",
      price: "från 2200 sek",
    },
    {
      key: 2,
      src: "pris-img-2.png",
      alt: "pris-img-2",
      title: "Hälsokonsultation med fokus på naturliga lösningar",
      desc: "Utforska naturliga metoder för att stärka din hälsa på ett hållbart sätt. Under denna individuella konsultation (60 min) diskuterar vi hur kost, livsstilsförändringar och örter kan bli en del av din vardag för att komplettera din hälsorutin. Du får en anpassad plan med vägledning och inspiration, utformad för att stötta ditt välmående och dina långsiktiga mål.",
      price: "från 1500 sek",
    },
    {
      key: 3,
      src: "pris-img-3.png",
      alt: "pris-img-3",
      title: "Uppföljande konsultation",
      desc: "Ett uppföljande möte (45 min) för att utvärdera dina framsteg och justera din hälsoplan. Med regelbunden uppföljning får du stöd och vägledning för att skapa hållbara förändringar som passar dina behov och mål.",
      price: "från 1000 sek",
    },
    {
      key: 4,
      src: "pris-img-4.png",
      alt: "pris-img-4",
      title: "Föreläsningar och Workshops",
      desc: "Inspirerande föreläsningar och workshops som ger insikter, väcker nyfikenhet och erbjuder praktiska verktyg för att främja hållbar hälsa och välmående. Välj bland befintliga teman eller låt oss skapa något skräddarsytt för just din organisation. ",
      price: "från 6500 sek",
    },
  ];

  const priser = [
    {
      price: "från 1800 sek",
    },
    {
      price: "från 1200 sek",
    },
    {
      price: "från 800 sek",
    },
    {
      price: "från 5700 sek",
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
          <p className="p-priser" style={{ textAlign: "center" }}>
            Alla priser som anges inkluderar moms. Kontakta mig gärna för mer
            information eller för att få en offert anpassad efter dina behov.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Priser;
