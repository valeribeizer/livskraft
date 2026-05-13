import React from "react";
import CardPageLayout from "./CardPageLayout";

const SkiftetPage = () => (
  <CardPageLayout
    title="- Skiftet -"
    subtitle="Wheel of Fortune (X)"
    ctaTo="/"
    ctaLabel="Utforska Livskraft"
  >
    <p className="card-page-text">Ingenting förblir som det är.</p>
    <p className="card-page-text">
      Det som inte fungerar idag behöver inte vara ditt för alltid.
    </p>
    <p className="card-page-text">
      Skiftet kan ske genom ett enda samtal, ett beslut, ett nytt perspektiv,
      en ny fråga som förändrar allt.
    </p>
    <p className="card-page-text">
      Kan skiftet vara det kortet du håller i just nu?
    </p>
  </CardPageLayout>
);

export default SkiftetPage;
