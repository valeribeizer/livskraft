import React from "react";
import { Routes, Route } from "react-router";
import HomeScreen from "./HomeScreen/HomeScreen";
import OmLivskraft from "./Om oss/OmOss";
import Kontakt from "./Kontakt/Kontakt";
import Faq from "./FAQ/Faq";
import Tsjanster from "./Tsjänster/Tsjanster";
import Forelasningar from "./Föreläsningar/Forelasningar";
// import Priser from "./Priser/Priser";
// import Blog from "./Blog/Blog";
import Policy from "./Policy/Policy";
import Shoppen from "./Shoppen/Shoppen";
import ContactForm from "./СontactForm/ContactForm";
import SuccessMsg from "./SuccessMsg/SuccessMsg";
import OmMig from "./Om mig/OmMig";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/om-livskraft" element={<OmLivskraft />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/tjanster" element={<Tsjanster />} />
        <Route path="/forelasningar" element={<Forelasningar />} />
        {/* <Route path="/priser" element={<Priser />} /> */}
        {/* <Route path="/blog" element={<Blog />} /> */}
        <Route path="/integritetspolicy" element={<Policy />} />
        <Route path="/butik" element={<Shoppen />} />
        <Route path="/fa-stod" element={<ContactForm />} />
        <Route path="/skickad" element={<SuccessMsg />} />
        <Route path="/om-mig" element={<OmMig />} />
      </Routes>
    </div>
  );
}

export default App;
