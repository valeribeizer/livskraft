import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import "./style.css";
import ContactForm from "../СontactForm/ContactForm";
import SuccessMsg from "../SuccessMsg/SuccessMsg";
import Footer from "../Footer/Footer";

const HomeScreen = () => {
  const [isContactModelOpen, setContactModelOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  const handleClick = () => {
    setContactModelOpen(true);
  };

  const closeContactModel = () => {
    setContactModelOpen(false);
  };

  const handleSuccess = () => {
    setContactModelOpen(false); 
    setIsSuccessOpen(true); 
    setTimeout(() => setIsSuccessOpen(false), 3000);
  };

  const handleCloseSuccess = () => {
    setIsSuccessOpen(false);
  };

  return (
    <div>
      <NavBar />
      <div className="hs_container">
        <img
          className="hs_img"
          src="homescreen_img.png"
          alt="homescreen_img"
          loading="lazy"
        />
        <h1>FÄRRE LÄKEMEDEL, ÖKAT VÄLMÅENDE</h1>
        <p className="p-hs">
          “I en värld där läkemedel ofta är den första lösningen står Livskraft
          som en ledstjärna för de som är nyfikna på alternativen. Som apotekare
          ställer jag mig kritisk till övertron på farmaka – jag vill skapa en
          väg till långsiktigt välmående med individen i fokus” - Eunice O.
        </p>
        <button className="btn_main btn_hs" onClick={() => handleClick()}>
          FÅ STÖD
        </button>
      </div>
      {isContactModelOpen && (
        <ContactForm
          onSubmit={handleSuccess}
          onClose={closeContactModel}
          isOpen={isContactModelOpen}
        />
      )}
      {isSuccessOpen && <SuccessMsg onClose={handleCloseSuccess} />}
      <Footer />
    </div>
  );
};

export default HomeScreen;
