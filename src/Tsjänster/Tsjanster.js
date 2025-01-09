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
      desc: "Känner du dig osäker på dina läkemedel? Få insikt och trygghet genom en genomgång som är anpassad efter dina behov",
    },
    {
      src: "flower_heart.png",
      alt: "flower_heart",
      title: "Hälsokonsultation med fokus på naturliga lösningar",
      desc: "Utforska vägar till bättre balans och välmående genom kost, livsstil och naturliga alternativ. Ta kontroll över din hälsa – boka en hälsokonsultation idag!",
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
      desc: "<ul><li>Gratis första möte (30 minuter): Online eller via telefon, där vi diskuterar dina hälsomål och vad som är viktigast för dig.</li>\n<li>Genomgång av dina läkemedel: Tillsammans går vi igenom de läkemedel som du vill veta mer om eller har frågor kring. Du bestämmer fokus, och vi lägger tid på det som känns mest relevant för dig.</li>\n<li>För- och nackdelar med din behandling: Vi går igenom fördelar, möjliga risker och andra alternativ som kan vara värda att diskutera med din läkare.</li>\n<li>Anpassade råd och stöd: Få anpassade insikter och förslag som stödjer dina hälsomål och hjälper dig i dialogen med din läkare.</li>\n<li>Skriftlig sammanfattning: Efter genomgången får du en tydlig och strukturerad sammanställning med information om dina läkemedel – inklusive indikationer, för- och nackdelar samt personliga tips.</li></ul>",
    },
    {
      title: "Hälsokonsultation med fokus på naturliga lösningar",
      desc: "Denna tjänst är perfekt för dig som vill förbättra din hälsa med ett holistiskt och naturligt fokus. Kanske har du redan gjort en läkemedelsgenomgång och vill nu ta nästa steg mot ett mer hållbart välmående. Här får du stöd och inspiration att göra medvetna val för en balanserad livsstil.<ul>\n<li>Utforska örter och naturliga lösningar: Få vägledning om hur du kan använda örter och andra naturliga alternativ som en del av din vardag, anpassat efter dina behov.</li>\n<li>Personliga uppföljningar: Regelbunden kontakt för att följa upp dina framsteg inom motion, kost och andra livsstilsförändringar, med justeringar baserade på dina mål och preferenser.</li>\n<li>Skräddarsydd kostrådgivning: Få individuellt anpassade kostråd som hjälper dig att stärka din hälsa genom rätt näring och hållbara matvanor.</li></ul>",
    },
    {
      title: "Föreläsningar",
      desc: "Bjud in mig till er organisation för inspirerande och informativa föreläsningar. Varje föreläsning är utformad för att ge insikter och praktiska verktyg som kan användas för att förbättra välmående och inspirera till medvetna val. Föreläsningarna kan även skräddarsys för att passa just era behov och intressen.",
      link: {
        to: "/forelasningar",
        text: "Utforska listan över mina föreläsningar här",
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
        <div className="row margin gap">
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
