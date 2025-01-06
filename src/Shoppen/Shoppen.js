import React from "react";
import "./style.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const Shoppen = () => {
  return (
    <div>
      <NavBar />
      <div className="butik-container">
        <h1>BUTIK</h1>
        <h1 className="h1-butik">Livskraft Butik</h1>
        <h2 className="h2-butik">
          Snart här för att skapa harmoni i ditt hem 🌿
        </h2>
        <h3 className="h3-butik">
          Vi skapar just nu ett unikt sortiment som förenar balans, välmående
          och hållbarhet – för dig och ditt hem.
        </h3>
        <h2 className="h2-butik h22">Vad som kommer snart:</h2>
        <p className="p-butik">
          ✨ Naturliga favoriter: Rökelser, teer, honung, ljus och tinkturer –
          noggrant utvalda för att ge lugn och ro i vardagen.
        </p>
        <p className="p-butik">
          ✨ Hållbar inredning: Återbrukade krukor, ljusstakar och
          förvaringsaskar – unika föremål med själ och historia.
        </p>
        <p className="p-butik">
          ✨ Unika detaljer: Konst och små inredningsdetaljer som förvandlar
          ditt hem till en plats av värme och inspiration.
        </p>
        <h3 className="h3-butik h33">
          Livskrafts butik är mer än en webbshop – det är en plats där varje
          produkt berättar en historia, utvald med kärlek och respekt för både
          dig och naturen. Vårt mål är att skapa något som inte bara är vackert,
          utan också meningsfullt.
        </h3>
        <h1 className="h1-butik h33">
          Håll dig uppdaterad!
        </h1>
        <p className="p-butik" style={{ textAlign: "justify" }}>
          Följ oss här och på sociala medier för att vara först med att få veta
          när butiken öppnar. Tack för att du är en del av vår resa – snart kan
          du fylla ditt hem med produkter som inspirerar till balans, glädje och
          välbefinnande. 💚
        </p>
        <p className="p-butik p1">
          Obs! Vi arbetar småskaligt och med begränsade upplagor – varje produkt
          är unik, handplockad med kärlek och hållbarhet i fokus.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Shoppen;
