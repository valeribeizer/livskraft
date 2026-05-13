import React from "react";
import CardPageLayout from "./CardPageLayout";

const TroskelnPage = () => (
  <CardPageLayout
    splashCardId="troskeln"
    title="- Tröskeln -"
    ctaTo="/"
    ctaLabel="Utforska Livskraft"
  >
    <p className="card-page-text">
      Något håller på att förändras, eller behöver det.
    </p>
    <p className="card-page-text">
      Det kan kännas obekvämt – att ifrågasätta något du trott på länge.
    </p>
    <p className="card-page-text">
      Det här kortet påminner dig om att trösklar är inte farliga, de är
      nödvändiga.
    </p>
    <p className="card-page-text">Är du redo att kliva över?</p>
  </CardPageLayout>
);

export default TroskelnPage;
