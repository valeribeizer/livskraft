import React from "react";
import "./style.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const Policy = () => {
  const policy = [
    {
      qw: "Vilka uppgifter samlar vi in?",
      answ: "Vi samlar in följande typer av personuppgifter: \n\nKontaktinformation:\n- Namn, e-postadress och telefonnummer för att kunna kontakta dig och planera möten.\n\nHälsodata och livsstilsinformation:\n- Uppgifter om dina hälsomål, medicinsk bakgrund (exempelvis kroniska sjukdomar, läkemedel och eventuella biverkningar), kostvanor, träningsvanor och sömnproblem.\n\nBilagor:\n- Dokument som du väljer att ladda upp, exempelvis läkemedelslistor och labbresultat.\n\nStatistik:\n- Anonymiserad data från hälsoformulär och avslutade konsultationer för att analysera tjänsternas effektivitet påindivid- och samhällsnivå.",
    },
    {
      qw: "Hur använder vi dina uppgifter?",
      answ: "Vi behandlar dina personuppgifter för följande ändamål:\n\nTillhandahålla tjänster:\n- Genomföra läkemedelsgenomgångar och hälsokonsultationer baserade pådina behov.\n\nStatistik och tjänsteutveckling:\n- Skapa anonymiserad statistik för att utvärdera tjänsters effektivitet och förbättra vår verksamhet.\n\nKommunikation:\n- Kontakta dig för att boka eller följa upp konsultationer och besvara frågor.\n\nLagstadgade krav:\n- Dokumentera relevanta uppgifter enligt Patientlagen och annan tillämplig lagstiftning.",
    },
    {
      qw: "Rättslig grund för behandling",
      answ: "Vi behandlar dina personuppgifter baserat på:\n\nSamtycke: \n- Vi inhämtar ditt uttryckliga samtycke för att behandla dina uppgifter.\n\nLagkrav: \n- Vi följer Patientlagen (2014:821) och andra tillämpliga regler för att säkerställa en trygg och kvalitativ hantering av dina uppgifter.\n\nRiktlinjer från svenska myndigheter:\n- Vi följer Socialstyrelsens och Läkemedelsverkets riktlinjer där det är tillämpligt.",
    },
    {
      qw: "Hur skyddar vi dina uppgifter?",
      answ: "Vi använder oss av GDPR-kompatibla system för att hantera och lagra dina uppgifter påett säkert sätt. Detta inkluderar:\n\nKryptering:\n- All lagring och dataöverföring är krypterad.\n\nBegränsad åtkomst:\n- Endast behörig personal har tillgång till dina uppgifter.\n\nAnonymisering:\n- Statistik baseras påanonymiserade data, där ingen enskild individ kan identifieras.",
    },
    {
      qw: "Hur länge sparar vi dina uppgifter?",
      answ: "Personuppgifter:\n- Lagring sker endast sålänge det är nödvändigt för att uppfylla ändamålen med behandlingen. Uppgifter raderas inom 12 månader efter avslutad kontakt, om inte längre lagring krävs enligt lag.\n\nJournalföring:\n- Uppgifter som dokumenteras enligt Patientlagen sparas i minst 10 år. Journalen ska innehålla:\n1. Medicinsk bakgrund och relevanta diagnoser.\n2. Läkemedelsgenomgångar och rekommenderade åtgärder.\n3. Eventuella biverkningar och hur dessa har hanterats.\n4. Information om överenskomna åtgärder och hänvisningar till andra vårdgivare.\n5. Datum och signatur av ansvarig utförare.",
    },
    {
      qw: "Delning av uppgifter",
      answ: "Vi delar inte dina personuppgifter med tredje part utan ditt uttryckliga samtycke, förutom:\n- Om det krävs enligt lag.\n- Vid begäran från dig att dela uppgifter med din vårdgivare.",
    },
    {
      qw: "Anpassningar och tillgänglighet",
      answ: "Vi strävar efter att göra våra tjänster tillgängliga för alla, oavsett särskilda behov. Exempel pådetta inkluderar:\n- Språkstöd vid behov.\n- Anpassningar för fysisk tillgänglighet eller andra personliga behov.\n\nKontakta oss gärna i förväg för att diskutera eventuella anpassningar.",
    },
    {
      qw: "Dina rättigheter",
      answ: "Du har rätt att:\n- Begära tillgång till dina personuppgifter.\n- Begära rättelse av felaktiga eller ofullständiga uppgifter.\n- Begära radering av uppgifter som inte måste sparas enligt lag.\n- Återkalla ditt samtycke när som helst.\n- Invända mot eller begära begränsning av behandlingen.\n- Ta del av journalanteckningar och lämna synpunkter påvården i enlighet med svensk lag.\n\nFör att utöva dina rättigheter, kontakta oss på info@livskraft.eu.",
    },
    {
      qw: "Cookies och spårning",
      answ: "Vår webbplats använder cookies för att förbättra användarupplevelsen och analysera besökarstatistik. Du kan hantera dina cookie-inställningar i din webbläsare.",
    },
    {
      qw: "Kontakt",
      answ: "Om du har frågor om denna integritetspolicy eller hur vi hanterar dina uppgifter, kontakta oss på:\n\n- E-post: info@livskraft.eu\n- Telefon: 073-810 28 28\n\nOm du anser att vi har hanterat dina uppgifter felaktigt kan du lämna ett klagomål till Integritetsskyddsmyndigheten (IMY) via deras webbplats: www.imy.se.",
    },
  ];

  return (
    <div>
      <NavBar />
      <div className="policy-container">
        <h1 className="h1-policy">Integritetspolicy för Livskraft</h1>
        <p className="p-policy-1">Senast uppdaterad: 29-December-2024</p>
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
