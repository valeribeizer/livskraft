import React from "react";
import CardPageLayout from "./CardPageLayout";

const FlodetPage = () => (
  <CardPageLayout
    title="- Flödet -"
    subtitle="The Empress (III)"
    ctaTo="/"
    ctaLabel="Utforska Livskraft"
  >
    <p className="card-page-text">Kroppen är inte din motståndare.</p>
    <p className="card-page-text">
      Den är inte ett problem att lösa eller en maskin att optimera.
    </p>
    <p className="card-page-text">
      Den är levande, cyklisk och klok på ett sätt som inga provvärden kan
      mäta fullt ut.
    </p>
    <p className="card-page-text">
      När du slutar kämpa emot den och börjar samarbeta med den – då börjar
      något lossna.
    </p>
    <p className="card-page-text">
      Din uppgift är att lära dig samarbeta med din kropp.
    </p>
  </CardPageLayout>
);

export default FlodetPage;
