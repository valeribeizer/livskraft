import React from "react";
import "./style.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const Faq = () => {
  const faqArr = [
    {
      key: 1,
      question: "Vad innebär en läkemedelsgenomgång hos Livskraft?",
      answer:
        "En läkemedelsgenomgång är en genomgång av dina läkemedel för att skapa en tydlig bild av deras syfte och användning. Vi diskuterar dina frågor, identifierar eventuella biverkningar eller interaktioner och ger dig verktyg för att optimera din behandling. Genomgången sker främst via digitala möten för att göra det enkelt och smidigt för dig. Du får en skriftlig sammanställning som kan användas i dialog med din läkare.",
    },
    {
      key: 2,
      question: "Behöver jag ta med min läkemedelslista?",
      answer:
        "Ja, en aktuell läkemedelslista är viktig för genomgången. Du kan enkelt hämta den från 1177.se eller få en utskrift på ditt apotek. För receptfria läkemedel och kosttillskott innehåller vårt hälsoformulär specifika frågor där du enkelt kan ange dessa. Listan kan laddas upp digitalt inför mötet.",
    },
    {
      key: 3,
      question: "Hur förbereder jag mig inför ett möte?",
      answer:
        "Inför mötet fyller du i vårt digitala hälsoformulär och laddar upp dokument som läkemedelslista och eventuella labbresultat. Fundera gärna på dina hälsomål och frågor inför mötet – detta hjälper oss att fokusera på det som är viktigast för dig.",
    },
    {
      key: 4,
      question: "Erbjuder Livskraft fysiska möten?",
      answer:
        "Ja, även om våra tjänster primärt erbjuds digitalt, finns det möjlighet att boka ett fysiskt möte i vissa fall. Kontakta mig för att diskutera vad som passar bäst för dig.",
    },
    {
      key: 5,
      question:
        "Vad är skillnaden mellan en läkemedelsgenomgång och en hälsokonsultation?",
      answer:
        "Läkemedelsgenomgång: Fokus på dina aktuella läkemedel för att säkerställa att de används optimalt och säkert.\n\nHälsokonsultation: Ett bredare perspektiv med fokus på naturliga lösningar som örter, kost och livsstilsförändringar.",
    },
    {
      key: 6,
      question: "Kan jag boka en uppföljning?",
      answer:
        "Ja, uppföljning är en viktig del av din resa. Tillsammans utvärderar vi dina framsteg och justerar din plan vid behov. Även uppföljningar sker primärt digitalt för att göra processen så enkel som möjligt.",
    },
    {
      key: 7,
      question: "Vilka produkter säljer ni i shoppen?",
      answer:
        "Vår shop erbjuder noggrant utvalda produkter som ekologiska teer, svensk honung och återbrukade inredningsdetaljer. Alla produkter är handplockade med fokus på hållbarhet och välbefinnande.",
    },
    {
      key: 8,
      question:
        "Kan jag få en skriftlig sammanfattning av min läkemedelsgenomgång?",
      answer:
        "Ja, en skriftlig sammanfattning ingår och innehåller en tydlig översikt av dina läkemedel, deras syfte samt tips och insikter från vår genomgång.",
    },
    {
      key: 9,
      question: "Vilka typer av föreläsningar erbjuder Livskraft?",
      answer:
        "Vi erbjuder föreläsningar om naturlig hälsa, läkemedelsoptimering och apotekarens roll i vården. Föreläsningarna sker digitalt, men vi kan även anordna fysiska föreläsningar vid förfrågan. Kontakta mig för mer information!",
    },
    {
      key: 10,
      question: "Hur hanterar ni min integritet?",
      answer:
        "All information hanteras enligt GDPR. Vi använder säkra och krypterade system och delar aldrig din data med tredje part utan ditt uttryckliga samtycke.",
    },
    {
      key: 11,
      question: "Vad kostar era tjänster?",
      answer:
        "Priserna för mina tjänster, inklusive läkemedelsgenomgångar, hälsokonsultationer, uppföljningar och föreläsningar, börjar från de belopp som anges i sektionen 'Priser' i huvudmenyn på hemsidan.\n\nJag tror på att hälsa ska vara tillgänglig för alla. Om du har ett stort behov av mina tjänster men ekonomin är en utmaning, tveka inte att höra av dig. Vi kan tillsammans hitta en lösning och anpassa priset efter dina förutsättningar – för mig är det viktigaste att kunna hjälpa dig på din resa mot ett bättre välmående.",
    },
  ];
  return (
    <div>
      <NavBar />
      <div className="faq-container">
        <h1>FAQ</h1>
        <div class="accordion accordion-flush" id="accordionFlushExample">
          {faqArr.map(({ question, answer, key }, index) => (
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
                  {question}
                </button>
              </h2>
              <div
                id={key}
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body"><p className="p-faq">{answer}</p></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Faq;
