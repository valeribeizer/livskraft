import React from "react";
import "./style.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const Faq = () => {
  const faqArr = [
    {
      key: 1,
      question:
        "Vad innebär en läkemedelsgenomgång, och vad kan jag förvänta mig hos Livskraft?",
      answer:
        "En läkemedelsgenomgång är en djupdykning i din läkemedelsbehandling för att säkerställa att varje medicin du tar verkligen bidrar till ditt välmående. Hos Livskraft tar vi oss tid att förstå din situation, gå igenom de läkemedel du har frågor om, och identifierar eventuella biverkningar eller interaktioner. Du får skräddarsydda råd för att optimera din behandling och stöd att utforska naturliga alternativ och livsstilsförändringar som kan minska ditt läkemedelsbehov. Målet är att du ska känna dig trygg och informerad – och ha en vårdplan där din hälsa alltid kommer först.",
    },
    {
      key: 2,
      question:
        "Behöver jag ha med min läkemedelslista till en läkemedelsgenomgång?",
      answer:
        "Ja, vi rekommenderar att du har en aktuell läkemedelslista för att göra genomgången så effektiv som möjligt. Du kan ladda ner din lista direkt från 1177.se genom att logga in och gå till “Läkemedelskollen”. Alternativt kan du få en utskrift av din läkemedelslista från ditt närmaste apotek – du kan enkelt ta en bild eller skanna in den för att ladda upp inför mötet. För receptfria mediciner och kosttillskott som du använder, kommer hälsoformuläret att innehålla en specifik fråga där du enkelt kan ange dessa.",
    },
    {
      key: 3,
      question:
        "Vilken annan information kan vara bra att ha med inför en läkemedelsgenomgång?",
      answer:
        "För att genomgången ska bli så grundlig som möjligt är det bra att ha dina senaste labbvärden, som njurfunktion (eGFR) och andra relevanta blodprover som blodtryck, kalium och hemoglobin. Dessa värden hjälper oss att bedöma om doseringen är lämplig och om läkemedlen passar din kropp. Du kan hitta dessa provsvar och journalanteckningar på 1177.se under dina vårduppgifter.",
    },
    {
      key: 4,
      question: "Hur förbereder jag mig bäst inför mitt första möte",
      answer:
        "Inför första mötet hos Livskraft kan du fylla i vårt hälsoformulär och ladda upp dina dokument (läkemedelslista och labbresultat). Formuläret innehåller specifika frågor om receptfria mediciner och kosttillskott, så du behöver inte ladda upp en separat lista för dessa. Detta hjälper oss att förbereda en skräddarsydd genomgång och fokusera på de områden som är viktigast för dig. \n\nVi rekommenderar också att du funderar på och skriver ner dina behov, önskemål och eventuella funderingar inför mötet. Detta ger en tydligare bild av vad du vill uppnå och säkerställer att vi täcker de områden som är viktigast för dig.",
    },
    {
      key: 5,
      question:
        "Vad är skillnaden mellan en läkemedelsgenomgång och en hälsokonsultation med naturliga lösningar?",
      answer:
        "En läkemedelsgenomgång fokuserar på att gå igenom dina aktuella läkemedel för att säkerställa att de är säkra, effektiva och ändamålsenliga för dig. Under en läkemedelsgenomgång identifierar vi eventuella biverkningar, interaktioner och onödiga läkemedel, samt ger råd om hur du kan optimera din behandling. Detta är särskilt användbart om du har frågor kring dina mediciner eller vill få en bättre förståelse för hur de fungerar. \n\nEn hälsokonsultation med naturliga lösningar är bredare och riktar sig till dig som vill förbättra din hälsa med hjälp av naturliga metoder, som örter, kost och livsstilsförändringar. Denna typ av konsultation är ett komplement till eller en fortsättning på läkemedelsgenomgången, där vi kan utforska sätt att stärka kroppen genom naturliga medel och göra långsiktiga förändringar för att minska ditt beroende av läkemedel.",
    },
    {
      key: 6,
      question:
        "Hur kan en naturlig hälsokonsultation hjälpa mig att minska mitt läkemedelsbehov?",
      answer:
        "En naturlig hälsokonsultation hjälper dig att ta små, men kraftfulla, steg mot ett långvarigt och naturligt välmående. Genom att arbeta med kroppens egna resurser och introducera metoder som näringsrik kost, örter och skräddarsydda livsstilsförändringar, kan vi skapa en grund för att gradvis minska behovet av läkemedel. Målet är att stärka kroppens naturliga balans och främja självläkning, där läkemedel endast blir ett komplement snarare än en huvudlösning. \n\nTillsammans utforskar vi hur dina vanor och rutiner kan justeras för att möta din kropps behov på ett sätt som är hållbart och harmoniskt, så att du känner dig både trygg och stärkt på din väg mot en friskare vardag.",
    },
    {
      key: 7,
      question:
        "Erbjuder Livskraft behandling eller rekommendationer för specifika sjukdomar?",
      answer:
        "Hos Livskraft erbjuder jag vägledning och insikter som kan komplettera din hälsoresa. Som apotekare har jag djup förståelse för läkemedel och deras effekter och är utbildad för att granska, analysera och optimera medicineringens säkerhet och effektivitet. Apotekare är samhällets läkemedelsexperter, och vårt uppdrag är att stödja och kvalitetssäkra den vård du får. I Sverige har denna roll ibland fallit i skymundan jämfört med andra länder, men jag ser min uppgift som att återupprätta detta förtroende. \n\nAll rådgivning här på Livskraft är tänkt att stärka din förståelse och ge dig verktyg som du kan ta vidare till din läkare, som är en viktig del av din vård. Skulle ditt ärende kräva specifik specialistkunskap, ser jag självklart till att du får vägledning till rätt vård. \n\nDenna väg är för dig som känner att din hälsa förtjänar fler dimensioner, där läkemedel och naturliga lösningar går hand i hand för att skapa en hållbar balans och ett långsiktigt välmående.",
    },
    {
      key: 8,
      question:
        "Kan jag boka en uppföljning efter en läkemedelsgenomgång eller hälsokonsultation?",
      answer:
        "Absolut, uppföljning är en hörnsten i din hälsoresa hos Livskraft. För att din behandlingsplan ska fungera långsiktigt är det viktigt att regelbundet utvärdera förändringar och justera utifrån dina behov. Detta är något som ofta saknas inom svensk vård, där kapacitetsbrist och ekonomiska utmaningar kan leda till att många patienter inte får den kontinuitet och uppföljning de förtjänar. \n\nFör en effektiv uppföljning rekommenderar vi att du tar nya labbprover hos din vårdcentral eller en pålitlig privat aktör – jag hjälper dig gärna med rekommendationer. Så kan vi tillsammans säkerställa att din kropp svarar väl på förändringarna och att du rör dig mot ett hållbart välmående. För att göra uppföljningen smidig har vår hemsida en särskild bokningslänk för återkommande kunder, så att du enkelt kan boka när du är redo att ta nästa steg.",
    },
    {
      key: 9,
      question:
        "Vilken typ av produkter säljer ni i shoppen, och hur kan de stödja min hälsa?",
      answer:
        "I vår shop hittar du noggrant utvalda produkter som stödjer både din hälsa och en hållbar livsstil. Vi erbjuder ekologiska teer från pålitliga producenter, kända för sina naturliga ingredienser och hälsofrämjande egenskaper. Dessa teer kan bidra till lugn och balans i vardagen och ge stunder av njutning och återhämtning. Jag hjälper dig gärna att välja de produkter som bäst stödjer just dina hälsomål – till exempel ett rogivande kvällste eller en stärkande örtblandning för fokus och energi. \n\nVi har även svensk honung från lokala biodlare, uppskattad för sina antibakteriella egenskaper och sitt rika näringsinnehåll. Bivaxprodukter som ljus och bivaxdukar är också en del av vårt sortiment, perfekta för dig som vill minska plastanvändningen i hemmet och skapa en harmonisk, giftfri miljö. \n\nAlla produkter är handplockade med omtanke för både din hälsa och miljön, så att du kan känna dig trygg med vad du väljer att ta hem.",
    },
    {
      key: 10,
      question:
        "Kan jag få en skriftlig sammanfattning av min läkemedelsgenomgång?",
      answer:
        "Ja, självklart! En skriftlig sammanfattning ingår i varje läkemedelsgenomgång hos Livskraft. Den innehåller en tydlig översikt av dina läkemedel, deras syfte, för- och nackdelar samt skräddarsydda tips baserade på vår genomgång. Dokumentationen gör det enkelt att gå tillbaka till rekommendationerna och är en värdefull resurs att ta med till din läkare. Vårt mål är att skapa en trygg och tydlig väg för din hälsa.",
    },
    {
      key: 11,
      question:
        "Vilka typer av föreläsningar erbjuder Livskraft, och hur bokar jag?",
      answer:
        "Livskraft erbjuder en rad inspirerande föreläsningar, utformade för att väcka nyfikenhet och öppna dörrar till nya perspektiv på hälsa. Välj mellan teman som naturlig hälsa, läkemedelsoptimering, eller hur farmaceuter spelar en avgörande roll i vården – eller låt mig skapa en skräddarsydd föreläsning som passar just din publik och organisation. \n\nMin ambition är att göra varje föreläsning till en upplevelse som inspirerar till nya insikter och samtal. Använd bokningsformuläret på hemsidan för att höra av dig, så diskuterar vi tillsammans hur vi kan forma föreläsningen för att ge din publik största möjliga värde.",
    },
    {
      key: 12,
      question:
        "Kan jag få stöd för livsstilsförändringar, och hur kan det komplettera min läkemedelsbehandling?",
      answer:
        "Absolut! På Livskraft handlar vår resa inte bara om läkemedel – det är ett utforskande av små justeringar som kan göra stor skillnad för ditt välmående. Livsstilförändringar kan skapa en balans där både kropp och själ får det stöd de behöver. Genom små steg kan vi hjälpa läkemedel att göra sitt bästa jobb och stödja din kropp på vägen. \n\nVill du ha inspiration till att skapa en grund där naturliga metoder och läkemedel möts, är du varmt välkommen att utforska hur vi kan bygga en långsiktig och harmonisk hälsoresa tillsammans.",
    },
    {
      key: 13,
      question:
        "Hur fungerar nätverket av experter, och hur kan det hjälpa mig?",
      answer:
        "Livskraft har ett nätverk av betrodda experter inom olika områden, såsom nutrition, mental hälsa och fysisk rehabilitering, som delar vår filosofi om naturlig hälsa och hållbara metoder. Om din situation kräver specifik kunskap utöver vad jag erbjuder, ser jag till att rekommendera dig vidare till någon i detta nätverk. Genom detta kan du få tillgång till helhetsstöd, där vi tillsammans skapar en hälsoresa som är anpassad efter just dina behov och mål.",
    },
    {
      key: 14,
      question:
        "Hur säkerställer ni min integritet och säkerhet för mina hälsodata?",
      answer:
        "Din integritet och säkerhet är av högsta prioritet hos Livskraft. All information du delar med mig hanteras enligt GDPR, vilket innebär att vi följer strikta riktlinjer för att skydda din personliga data. Jag använder endast säkra, krypterade system för att lagra och hantera din information, och ingen känslig data delas med tredje part utan ditt samtycke. Du kan känna dig trygg med att din information behandlas med största respekt och sekretess.",
    },
    {
      key: 15,
      question:
        "Vilka betalningsmetoder erbjuder ni, och kan jag få ett kvitto för min bokning?",
      answer:
        "Vi erbjuder flera bekväma betalningsalternativ, inklusive Swish, kortbetalning och banköverföring. Kvittot skickas automatiskt till din e-post efter betalningen, så du enkelt kan spara det för dina egna anteckningar eller för att använda i kontakt med din försäkring om det behövs.",
    },
    {
      key: 16,
      question:
        "Vad kostar en läkemedelsgenomgång eller hälsokonsultation hos Livskraft?",
      answer:
        "Priset för en läkemedelsgenomgång och hälsokonsultation varierar beroende på omfattningen av dina behov och önskemål. Du kan hitta aktuella priser på vår hemsida under bokningssidan, och vi erbjuder även paketpriser för dig som önskar kontinuerligt stöd. Om du har några frågor om prissättningen är du alltid välkommen att kontakta oss direkt.",
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
