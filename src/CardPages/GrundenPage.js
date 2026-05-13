import React from "react";
import CardPageLayout from "./CardPageLayout";

const GrundenPage = () => (
  <CardPageLayout
    splashCardId="grunden"
    title="- Grunden -"
    ctaTo="/"
    ctaLabel="Utforska Livskraft"
  >
    <p className="card-page-text">
      Efter en period av sökande och tvivel kommer det här kortet som en
      påminnelse om att det finns en stabilitet att bygga på.
    </p>
    <p className="card-page-text">
      Kraften finns redan inom dig och i de små, konsekventa val du gör varje
      dag.
    </p>
    <p className="card-page-text">
      Behöver du stöd med att lägga den grunden?
    </p>
  </CardPageLayout>
);

export default GrundenPage;
