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
      title: "Livskraft: Helhet",
    },
    {
      src: "flower_heart.png",
      alt: "flower_heart",
      title: "Livskraft: Källan",
    },
    {
      src: "white_flower.png",
      alt: "white_flower",
      title: "Livskraft: Apothecary",
    },
    // {
    //   src: "book.png",
    //   alt: "book",
    //   title: "Föreläsningar",
    // },
  ];

  const tsInfoArr_1 = [
    {
      title: "Livskraft: Helhet",
      p_desc:
        "En 3-månaders vägledning som hjälper dig att fatta medvetna beslut om din hälsa och etablera hållbara rutiner.",
      desc: "<ul><li>Inledande konsultation (90 min) – Vi går igenom din hälsosituation, dina behov och mål</li>\n<li>Skriftlig sammanställning av individuella rekommendationer</li>\n<li>Huvudsaklig vägledning (60 min, ca en vecka senare) – Fördjupning och konkreta steg att ta upp med din läkare</li>\n<li>Stöd inför kontakt med vården – Jag hjälper dig att formulera frågor och mål inför läkarbesök. Alla medicinska beslut sker alltid i samråd med din läkare.</li>\n<li>Löpande uppföljningar varannan vecka i 3 månader (30 min per gång) – Justeringar baserat på dina resultat.</li></ul>",
      pris: "Pris:<br /><p className='p-tsInfo'>Basnivå: 25 000 kr<br />Fördjupad vägledning (mer komplexa behov, fler läkemedel, tätare kontakt): 45 000 kr</p>",
      btn_text: "BOKA HÄR",
      key: 0,
    },
    {
      title: "Livskraft: Källan",
      p_desc:
        "En exklusiv 6-månaders hälsovägledning för dig som vill optimera ditt välmående, skapa nya, hållbara vanor och minska din läkemedelsanvändning.",
      desc: "<ul><li>Djupgående hälsokartläggning och analys (120 min).</li>\n<li>Skräddarsydd plan och individuella rekommendationer.</li>\n<li>Personlig vägledning varannan vecka i 6 månader (60 min per gång).</li>\n<li>Obegränsad chatt- och mailsupport mellan mötena.</li>\n<li>Löpande anpassning av din plan efter framsteg och behov</li>\n<li>Stöd i kontakt med vården – Jag hjälper dig att förbereda inför läkarbesök och kan, om du önskar, delta vid ett (1) tillfälle som medicinskt stöd. Alla behandlingsbeslut tas i samråd med din läkare.</li></ul>",
      pris: "Pris:<br /><p className='p-tsInfo'>125 000 kr</p>",
      btn_text: "ANSÖK HÄR",
      key: 1,
    },
    {
      title: "Livskraft: Apothecary",
      p_desc:
        "En högst personlig tjänst där jag fungerar som din privata husapotekare. För dig som vill ha en personlig hälsorådgivare för hela familjen och högsta möjliga service.",
      desc: "<ul><li>Skräddarsydd plan för hela familjen – optimerad hälsa och naturliga lösningar.</li>\n<li>Privata hembesök och/eller personlig tillgänglighet vid behov.</li>\n<li>Fullt stöd i kontakt med vården – Jag kan delta vid upp till tre (3) läkarbesök per halvår, inklusive förberedelse, uppföljning och kommunikation. Du får ett medicinskt ombud vid din sida, men all behandling sker i samråd med din läkare.</li>\n<li>Frekventa check-ins och fullständig diskretion.</li>\n<li>Löpande justeringar och rådgivning under 6–12 månader.</li></ul>",
      pris: "Pris:<br /><p className='p-tsInfo'>Från 250 000 kr (skräddarsydd offert beroende på behov)</p>",
      btn_text: "KONTAKTA MIG",
      key: 2,
    },
    // {
    //   title: "Föreläsningar",
    //   desc: "Bjud in mig till er organisation för inspirerande och informativa föreläsningar. Varje föreläsning är utformad för att ge insikter och praktiska verktyg som kan användas för att förbättra välmående och inspirera till medvetna val. Föreläsningarna kan även skräddarsys för att passa just era behov och intressen.\n\nPopulära teman:\n\n<ul><li>“Naturligtvis! Vägar till hälsa utan onödiga piller”</li>\n<li>“Rättigheter på apoteket – visste du att du har dem?”</li></ul>",
    //   pris: "Pris: Från 6 500 SEK",
    //   link: {
    //     to: "/forelasningar",
    //     text: "Utforska listan över mina föreläsningar här",
    //     className: "link-tsInfo",
    //   },
    //   key: 3,
    // },
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
          {tsjansterArr_1.map(({ src, alt, title }, index) => (
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
