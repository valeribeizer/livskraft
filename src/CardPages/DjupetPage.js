import React from "react";
import CardPageLayout from "./CardPageLayout";

const DjupetPage = () => (
  <CardPageLayout
    title="- Djupet -"
    subtitle="The Moon (XVIII)"
    ctaTo="/"
    ctaLabel="Utforska Livskraft"
  >
    <p className="card-page-text">
      Något rör sig under ytan och du vet om det.
    </p>
    <p className="card-page-text">
      Kanske är det ett symptom du ignorerat, en känsla du inte riktigt
      vågat släppa fram, eller en oro som inte har ord än.
    </p>
    <p className="card-page-text">
      Det här kortet uppmanar dig att gå på djupet och låta dig få känna.
    </p>
    <p className="card-page-text">
      Det som gömmer sig försvinner inte av sig självt – men det kan
      förvandlas.
    </p>
    <p className="card-page-text">Ta din röst på djupt allvar.</p>
  </CardPageLayout>
);

export default DjupetPage;
