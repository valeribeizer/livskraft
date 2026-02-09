import React from "react";
import "./style.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const Policy = () => {
  const policy = [
    {
      qw: "Vilka uppgifter samlar vi in?",
      answ: "Vi samlar in följande typer av personuppgifter: \n\nKontaktinformation:\n- Namn, e-postadress och telefonnummer för att kunna kontakta dig och planera möten.\n\nAllmän hälsorelaterad information\n- Uppgifter om dina mål för välmående och livsstil.\n\nBilagor (valfritt):\n- Dokument eller information som du väljer att dela frivilligt, exempelvis kostplaner eller andra underlag kopplade till din hälsa.\n\nStatistik (anonymiserad):\n- Vi kan samla in anonymiserad data för att analysera och förbättra våra tjänster. Denna data innehåller inga personliga identifierbara uppgifter.",
    },
    {
      qw: "Hur använder vi dina uppgifter?",
      answ: "Vi behandlar dina personuppgifter för följande ändamål:\n\nTillhandahålla friskvårdstjänster:\n- Ge råd om livsstil, kost och stresshantering baserat på dina behov och mål.\n- Förse dig med utbildning kring dina läkemedel, så att du kan diskutera dem vidare med din läkare.\n\nKommunikation:\n- Kontakta dig för att boka eller följa upp konsultationer och besvara frågor.\n\nTjänsteutveckling:\n- Analysera anonymiserad data för att förbättra våra tjänster.",
    },
    {
      qw: "Rättslig grund för behandling",
      answ: "Vi behandlar dina personuppgifter baserat på:\n\nSamtycke:\n- Vi inhämtar ditt uttryckliga samtycke för att behandla dina uppgifter.\n\nGDPR:\n- Vi följer dataskyddsförordningen (GDPR) för att skydda din integritet och behandla data ansvarsfullt.",
    },
    {
      qw: "Hur skyddar vi dina uppgifter?",
      answ: "Vi använder oss av GDPR-kompatibla system för att hantera och lagra dina uppgifter påett säkert sätt. Detta inkluderar:\n\nKryptering:\n- All lagring och dataöverföring är krypterad.\n\nBegränsad åtkomst:\n- Endast behörig personal har tillgång till dina uppgifter.\n\nAnonymisering:\n- Statistik baseras påanonymiserade data, där ingen enskild individ kan identifieras.",
    },
    {
      qw: "Hur länge sparar vi dina uppgifter?",
      answ: "Personuppgifter:\n- Lagring sker endast sålänge det är nödvändigt för att uppfylla ändamålen med behandlingen. Uppgifter raderas inom 12 månader efter avslutad kontakt, om inte längre lagring krävs enligt lag.\n\nStatistik:\n- Anonymiserad data kan sparas längre för att analysera och förbättra tjänsterna.",
    },
    {
      qw: "Delning av uppgifter",
      answ: "Vi delar inte dina personuppgifter med tredje part utan ditt uttryckliga samtycke, förutom:\n- Om det krävs enligt lag (t.ex. myndighetsbegäran).",
    },
    {
      qw: "Anpassningar och tillgänglighet",
      answ: "Vi strävar efter att göra våra tjänster tillgängliga för alla, oavsett särskilda behov. Exempel pådetta inkluderar:\n- Språkstöd vid behov.\n- Anpassningar för fysisk tillgänglighet eller andra personliga behov.\n\nKontakta oss gärna i förväg för att diskutera eventuella anpassningar.",
    },
    {
      qw: "Dina rättigheter",
      answ: "Du har rätt att:\n- Begära tillgång till dina personuppgifter.\n- Begära rättelse av felaktiga eller ofullständiga uppgifter.\n- Begära radering av uppgifter som inte längre är nödvändiga.\n- Återkalla ditt samtycke när som helst.\n\nFör att utöva dina rättigheter, kontakta oss på info@livskraft.eu.",
    },
    {
      qw: "Cookies och spårning",
      answ: "Vår webbplats använder cookies för att förbättra användarupplevelsen och analysera besökarstatistik. Du kan hantera dina cookie-inställningar i din webbläsare.",
    },
    {
      qw: "Kontakt",
      answ: "Om du har frågor om denna integritetspolicy eller hur vi hanterar dina uppgifter, kontakta oss på:\n\n- E-post: info@livskraft.eu\n\nOm du anser att vi har hanterat dina uppgifter felaktigt kan du lämna ett klagomål till Integritetsskyddsmyndigheten (IMY) via deras webbplats: www.imy.se.",
    },
  ];

  return (
    <div>
      <NavBar />
      <div className="policy-container">
        <h1 className="h1-policy">Integritetspolicy</h1>
        <p className="p-policy-1">Senast uppdaterad: 07-Januari-2025</p>
        <p className="p-policy">
          Din integritet är viktig för oss påLivskraft. Denna integritetspolicy
          beskriver hur vi samlar in, använder, lagrar och skyddar dina
          personuppgifter när du använder våra tjänster, såsom
          läkemedelsgenomgångar och hälsokonsultationer, via vår hemsida
          (www.livskraft.eu).
        </p>
        {policy.map(({ qw, answ }, index) => (
          <div key={index}>
            <h2>{qw}</h2>
            <p className="p-policy">{answ}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Policy;
