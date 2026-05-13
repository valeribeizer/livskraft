import React from "react";
import CardPageLayout from "./CardPageLayout";

const KarnanPage = () => (
  <CardPageLayout
    splashCardId="karnan"
    title="- Kärnan -"
    ctaTo="/"
    ctaLabel="Utforska Livskraft"
  >
    <p className="card-page-text">
      Mitt i all information, alla råd och alla åsikter om vad du borde göra
      – finns det en fråga som bara du kan svara på.
    </p>
    <p className="card-page-text">Vad vill du egentligen?</p>
    <p className="card-page-text">
      Inte vad som är enklast, billigast eller minst ifrågasatt.
    </p>
    <p className="card-page-text">
      Utan det som faktiskt stämmer med hur du vill ha det.
    </p>
    <p className="card-page-text">
      Börja där och om du behöver stöd för att nå dit…
    </p>
  </CardPageLayout>
);

export default KarnanPage;
