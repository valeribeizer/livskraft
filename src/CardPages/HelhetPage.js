import React from "react";
import CardPageLayout from "./CardPageLayout";

const HelhetPage = () => (
  <CardPageLayout
    splashCardId="helhet"
    title="- Helhet -"
    ctaTo="/"
    ctaLabel="Utforska Livskraft"
  >
    <p className="card-page-text">
      Du har burit något länge - sökt svar, provat dig fram men lyssnat på
      andra mer än på dig själv.
    </p>
    <p className="card-page-text">
      Det här kortet påminner dig om att du redan har det du behöver, att du
      äntligen börjar se helheten.
    </p>
    <p className="card-page-text">
      Din kropp, dina val, livets alla pusselbitar och din hälsa hör ihop.
    </p>
    <p className="card-page-text">Din uppgift är att samla ihop bitarna.</p>
  </CardPageLayout>
);

export default HelhetPage;
