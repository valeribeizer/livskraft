import React from "react";
import CardPageLayout from "./CardPageLayout";

const KallanPage = () => (
  <CardPageLayout
    title="- Källan -"
    subtitle="The High Priestess (II)"
    ctaTo="/"
    ctaLabel="Utforska Livskraft"
  >
    <p className="card-page-text">Det finns något i dig som vet.</p>
    <p className="card-page-text">
      Inte det du lärt dig eller fått berättat för dig – utan det du känt men
      kanske inte vågat lita på.
    </p>
    <p className="card-page-text">
      Källan är den rösten - den är tyst, men den ljuger aldrig.
    </p>
    <p className="card-page-text">Din uppgift är att sluta ignorera den.</p>
  </CardPageLayout>
);

export default KallanPage;
