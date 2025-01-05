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
      desc: "Är du osäker på dina läkemedel? Få en skräddarsydd läkemedelsanalys och en plan för bättre hälsa",
    },
    {
      src: "flower_heart.png",
      alt: "flower_heart",
      title: "Hälsokonsultation med fokus på naturliga lösningar",
      desc: "Ta kontroll över din hälsa - Boka en hälsokonsultation",
    },
    {
      src: "book.png",
      alt: "book",
      title: "Föreläsningar",
      desc: "Boka en föreläsning för ditt företag eller organisation",
    },
  ];

  const tsInfoArr_1 = [
    {
      title: "Läkemedelsgenomgång",
      desc: "<ul><li>Gratis första möte (30 minuter): Online eller via telefon för att diskutera dina hälsomål och identifiera vad som är viktigast för dig.</li>\n<li>Genomgång av dina läkemedel: Vi går igenom de läkemedel som känns mest relevanta för dig – de du har frågor kring eller vill veta mer om. Du bestämmer vad vi fokuserar på, så att vi undviker onödig genomgång av läkemedel du redan känner dig trygg med.</li>\n<li>För- och nackdelar med din behandling: Vi diskuterar fördelar, risker och möjliga alternativa behandlingar för dina utvalda läkemedel.</li>\n<li>Anpassade råd för att optimera din behandling: Få personliga råd som är anpassade till din situation och dina mål, och som du kan ta vidare till din läkare.</li>\n<li>Skriftlig sammanfattning: Efter genomgången får du en skriftlig sammanfattning med tydlig information om dina läkemedel – inklusive indikationer, för- och nackdelar samt personliga tips.</li></ul>",
    },
    {
      title: "Hälsokonsultation med fokus på naturliga lösningar",
      desc: "Denna tjänst är perfekt för dig som vill förbättra din hälsa utan att fokusera för mycket på läkemedel. Kanske har du redan gjort en läkemedelsgenomgång och vill nu ta ytterligare ett steg mot ett mer naturligt och hållbart välmående.<ul>\n<li>Användning av örter och naturliga lösningar: Få vägledning om hur du kan börja använda örter och andra naturliga lösningar som ett komplement till din livsstil.</li>\n<li>Personliga uppföljningar: Regelbunden kontakt för att följa upp dina framsteg kring motion och livsstilsförändringar, samt justera din hälsoplan baserat på dina mål.</li>\n<li>Specifik kostrådgivning: Skräddarsydda kostråd som hjälper dig att optimera din hälsa genom rätt näring och kostvanor.</li></ul>",
    },
    {
      title: "Föreläsningar",
      desc: "Bjud in mig till er organisation för att ta del av inspirerande föreläsningar. Jag erbjuder en djupdykning i ämnen som berör naturliga hälsolösningar, apotekarens roll i vården och hållbar hälsa. Varje föreläsning är designad för att ge värdefulla insikter och praktiska verktyg som främjar hälsa och välmående. Dessutom finns det möjlighet att skräddarsy föreläsningarna efter specifika intressen och behov.",
      link: {
        to: "/forelasningar",
        text: "Bekanta dig med listan över föreläsningar",
        className: "link-tsInfo",
      },
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
        <div className="row margin">
          {tsjansterArr_1.map(({ src, alt, title, desc }, index) => (
            <div
              className="col"
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
