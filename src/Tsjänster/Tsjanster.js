import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import TsjansterInfo from "../Tsjänster Info/TsjansterInfo";
import "./style.css";
import Footer from "../Footer/Footer";

const Tsjanster = () => {
  const tsjansterArr_1 = [
    {
      src: "jar.png",
      alt: "jar",
      title: "Läkemedelsgenomgång",
      desc: "Känner du dig osäker på dina läkemedel? Få insikt och trygghet genom en individuell genomgång anpassad efter dina behov.",
    },
    {
      src: "flower_heart.png",
      alt: "flower_heart",
      title: "Hälsokonsultation med fokus på naturliga lösningar",
      desc: "Utforska vägar till bättre balans och välmående genom kost, livsstil och naturliga alternativ.",
    },
    {
      src: "white_flower.png",
      alt: "white_flower",
      title: "Uppföljande konsultation",
    },
    {
      src: "book.png",
      alt: "book",
      title: "Föreläsningar",
      desc: "Boka en föreläsning för ditt företag eller organisation.",
    },
  ];

  const tsInfoArr_1 = [
    {
      title: "Läkemedelsgenomgång",
      desc: "<ul><li>Inledande samtal (30 minuter): Online eller via telefon, där vi diskuterar dina hälsomål och vad som är viktigast för dig.</li>\n<li>Genomgång av dina läkemedel (60 minuter): Vi går igenom de läkemedel du vill veta mer om, med fokus på det som känns mest relevant för dig.</li>\n<li>För- och nackdelar med din behandling: Få hjälp att förstå syftet med dina läkemedel, möjliga risker och alternativ att diskutera med din läkare.</li>\n<li>Skriftlig sammanställning: En tydlig rapport som ger överblick över dina läkemedel och fungerar som ett stöd i dialogen med din läkare.</li>\n<li>Uppföljande samtal (30 minuter): För att gå igenom framsteg och diskutera eventuella frågor eller justeringar.</li></ul>",
      pris: "Pris: Från 2 200 SEK",
      key: 0,
    },
    {
      title: "Hälsokonsultation med fokus på naturliga lösningar",
      desc: "<ul>\n<li>Inledande samtal (30 minuter): Online eller via telefon, där vi diskuterar dina hälsomål och vad som är viktigast för dig..</li>\n<li>Skriftlig sammanställning: Efter konsultationen får du en personlig handlingsplan som sammanfattar rekommenderade livsstilsförändringar, kostråd och naturliga alternativ, anpassat efter dina specifika behov och mål.</li>\n<li>Uppföljande samtal (30 minuter): För att gå igenom framsteg och diskutera eventuella frågor eller justeringar.</li></ul>",
      pris: "Pris: Från 1 500 SEK",
      key: 1,
    },
    {
      title: "Uppföljande konsultation",
      desc: "Ett uppföljande möte för att utvärdera dina framsteg, justera din plan och ge fortsatt stöd på din hälsoresa. Perfekt för att säkerställa att förändringarna är hållbara och anpassade till dina mål.<ul>\n<li>Tid: 45-60 minuter</li>\n<li>Vi går igenom vad som fungerar bra, vad som kan justeras, och hur vi bäst stöttar dig i dina långsiktiga hälsomål.</li></ul>",
      pris: "Pris: Från 1 000 SEK",
      key: 2,
    },
    {
      title: "Föreläsningar",
      desc: "Bjud in mig till er organisation för inspirerande och informativa föreläsningar. Varje föreläsning är utformad för att ge insikter och praktiska verktyg som kan användas för att förbättra välmående och inspirera till medvetna val. Föreläsningarna kan även skräddarsys för att passa just era behov och intressen.\n\nPopulära teman:\n\n<ul><li>“Naturligtvis! Vägar till hälsa utan onödiga piller”</li>\n<li>“Rättigheter på apoteket – visste du att du har dem?”</li></ul>",
      pris: "Pris: Från 6 500 SEK",
      link: {
        to: "/forelasningar",
        text: "Utforska listan över mina föreläsningar här",
        className: "link-tsInfo",
      },
      key: 3,
    },
  ];

  const [isTsInfoOpen, setTsInfoOpen] = useState(false);
  const [tsInfoContent, setTsInfoContent] = useState("");

  const handleBoxClick = (content) => {
    setTsInfoContent(content);
    setTsInfoOpen(true);
  };

  const closeTsInfo = () => {
    setTsInfoOpen(false);
    setTsInfoContent("");
  };

  return (
    <div>
      <NavBar />
      <div className="ts-container">
        <h1>TJÄNSTER</h1>
        <div className="row margin gap">
          {tsjansterArr_1.map(({ src, alt, title, desc }, index) => (
            <div
              className="col col-lg-8"
              key={index}
              onClick={() => handleBoxClick(tsInfoArr_1[index])}
            >
              <div className="row align">
                <div className="col-4 align-1">
                  <img className="ts-img" src={src} alt={alt} loading="lazy" />
                </div>
                <div className="col-8">
                  <h2 className="h2-ts">{title}</h2>
                  <p className="p-ts">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <TsjansterInfo
        isOpen={isTsInfoOpen}
        content={tsInfoContent}
        onClose={closeTsInfo}
      />
      <Footer />
    </div>
  );
};

export default Tsjanster;
