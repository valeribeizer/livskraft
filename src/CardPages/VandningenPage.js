import React from "react";
import CardPageLayout from "./CardPageLayout";

const VandningenPage = () => (
  <CardPageLayout
    splashCardId="vandningen"
    title="- Vändningen -"
    ctaTo="/"
    ctaLabel="Utforska Livskraft"
  >
    <p className="card-page-text">
      Det här kortet handlar om det som blir möjligt när du slutar hålla
      fast.
    </p>
    <p className="card-page-text">
      Kanske är det en behandling som inte längre tjänar dig…
    </p>
    <p className="card-page-text">
      Kanske är det en övertygelse om att du inte duger som du är…
    </p>
    <p className="card-page-text">
      Vändningen kräver att du lägger ner det som skaver, därefter följer
      transformationen.
    </p>
  </CardPageLayout>
);

export default VandningenPage;
