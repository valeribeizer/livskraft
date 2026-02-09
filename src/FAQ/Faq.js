import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import "./style.css";

const Faq = () => {
  const faqArr = [
    {
      key: "faq-1",
      question: "Vad gör en apotekare egentligen?",
      answer:
        "Apotekare är samhällets läkemedelsexperter, mitt särskilda intresse är klinisk farmaci – att granska läkemedelsbehandlingar, upptäcka risker och optimera så att nyttan blir större än biverkningarna. Det är den kunskap jag byggt Livskraft på.",
    },
    {
      key: "faq-2",
      question: "Vad behöver jag förbereda inför första mötet?",
      answer:
        "Du fyller i ett hälsoformulär och skickar din läkemedelslista (från 1177 eller apoteket). Om du använder kosttillskott, receptfria läkemedel eller naturläkemedel är det bra att skriva ner det också.",
    },
    {
      key: "faq-3",
      question: "Hur skiljer sig ditt arbetssätt från vården?",
      answer:
        "I vården fokuserar man ofta på det akuta. Jag kompletterar genom att se helheten, söka orsaker och lyfta hållbara, naturliga strategier som hjälper dig bygga goda hälsovanor som håller över tid.",
    },
    {
      key: "faq-4",
      question: "Kan du hjälpa mig minska mina läkemedel?",
      answer:
        "Jag visar hur du kan stötta kroppen på naturliga sätt som i många fall kan minska behovet av läkemedel. Min roll är att ge dig kunskap, analysera risker och biverkningar, och förbereda dig inför mötet med vården men alla beslut måste också fattas i samråd med din behandlande läkare.",
    },
    {
      key: "faq-5",
      question: "Hur skiljer det sig från att prata direkt med läkaren?",
      answer:
        "Läkare har ofta ont om tid. Jag tar mig tid att analysera dina personliga behov, dina läkemedel, granska risker och lyfta fram den senaste forskningen som är relevant för just dig. Det gör att du kan gå till vården mer förberedd, ställa rätt frågor och känna dig trygg i dina beslut.",
    },
    {
      key: "faq-6",
      question: "Är du specialist på alla sjukdomar?",
      answer:
        "Jag har inte specialistkompetens inom exempelvis psykiatri eller ovanliga sjukdomar. Som apotekare har jag en bred grund och särskilt fokus på de vanligaste läkemedlen och sjukdomarna. När det behövs hänvisar jag vidare till betrodda läkare och specialister inom respektive område.",
    },
    {
      key: "faq-7",
      question: "Kan jag boka för en närstående, t.ex. en förälder?",
      answer:
        "Ja, många bokar för sina närstående. Det viktiga är att personen själv ger samtycke och är delaktig.",
    },
    {
      key: "faq-8",
      question: "Är du emot läkemedel?",
      answer:
        "Nej. Jag är för rätt läkemedel – i rätt dos, vid rätt tidpunkt, till rätt person. Däremot är jag kritisk till överanvändning, när biverkningar inte tas på allvar och när man missar viktiga icke-farmakologiska alternativ.",
    },
    {
      key: "faq-9",
      question: "Vad tycker du om naturmedicin?",
      answer:
        "Naturmedicin är grunden till många av de läkemedel vi har idag. Tyvärr separeras läkemedel och naturmedicin ofta som om de vore motsatser – jag ser det tvärtom som två kunskapsfält som kan kombineras för att skapa mer hållbara lösningar.",
    },
    {
      key: "faq-10",
      question: "Hur sker betalningen?",
      answer:
        "Du får en faktura via e-post. Betalning sker smidigt månadsvis eller som engångsbelopp, beroende på tjänst.",
    },
    {
      key: "faq-11",
      question: "Hur hanterar du min integritet?",
      answer:
        "All information hanteras konfidentiellt och enligt GDPR. Dina uppgifter delas aldrig med tredje part.",
    },
    {
      key: "faq-12",
      question: "Vad är skillnaden mellan Second Opinion och Källan?",
      answer:
        "Second Opinion är en engångstjänst där du får en professionell granskning av din läkemedelssituation och råd för nästa steg. Källan är för dig som vill ha långsiktigt stöd, regelbunden uppföljning och hjälp i vardagen – ett djupare samarbete där vi bygger ett hållbart system tillsammans.",
    },
    {
      key: "faq-13",
      question: "Hur ofta har man kontakt i Källan?",
      answer:
        "Du har minst ett samtal i månaden och kontinuerligt chattstöd. Vid behov bokar vi också in hembesök, apoteksstöd eller vårdmöten – beroende på vilket paket du valt.",
    },
    {
      key: "faq-14",
      question: "Är du läkare?",
      answer:
        "Nej – jag är legitimerad apotekare med särskilt fokus på läkemedelsgranskning och integrativ hälsa. Jag ställer inga diagnoser eller ordinerar läkemedel, men hjälper dig att förstå din situation och samverkar gärna med din läkare.",
    },
  ];
  return (
    <div>
      <NavBar />
      <div className="faq-container">
        <h1>FAQ</h1>
        <div className="accordion accordion-flush" id="accordionFlushExample">
          {faqArr.map(({ question, answer, key }, index) => (
            <div className="accordion-item" key={key}>
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
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
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <p className="p-faq">{answer}</p>
                </div>
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
