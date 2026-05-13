import React from "react";
import { Routes, Route, Navigate } from "react-router";
import HomeScreen from "./HomeScreen/HomeScreen";
import OmLivskraft from "./Om oss/OmOss";
import Kontakt from "./Kontakt/Kontakt";
import Faq from "./FAQ/Faq";
import Tsjanster from "./Tsjänster/Tsjanster";
import Forelasningar from "./Föreläsningar/Forelasningar";
// import Priser from "./Priser/Priser";
import Blog from "./Blog/Blog";
import ArticlePage from "./Blog/ArticlePage";
import Policy from "./Policy/Policy";
import Shoppen from "./Shoppen/Shoppen";
import ContactForm from "./СontactForm/ContactForm";
import SuccessMsg from "./SuccessMsg/SuccessMsg";
import OmMig from "./Om mig/OmMig";
import HelhetPage from "./CardPages/HelhetPage";
import KallanPage from "./CardPages/KallanPage";
import DjupetPage from "./CardPages/DjupetPage";
import FlodetPage from "./CardPages/FlodetPage";
import LjusetPage from "./CardPages/LjusetPage";
import SkiftetPage from "./CardPages/SkiftetPage";
import KarnanPage from "./CardPages/KarnanPage";
import TroskelnPage from "./CardPages/TroskelnPage";
import GrundenPage from "./CardPages/GrundenPage";
import VandningenPage from "./CardPages/VandningenPage";


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
        <Route path="/artiklar" element={<Blog />} />
        <Route path="/artiklar/:slug" element={<ArticlePage />} />
        <Route path="/integritetspolicy" element={<Policy />} />
        <Route path="/butik" element={<Shoppen />} />
        <Route path="/fa-stod" element={<ContactForm />} />
        <Route path="/skickad" element={<SuccessMsg />} />
        <Route path="/om-mig" element={<OmMig />} />
        <Route path="/kort-helhet" element={<HelhetPage />} />
        <Route path="/kort-kallan" element={<KallanPage />} />
        <Route path="/kort-djupet" element={<DjupetPage />} />
        <Route path="/kort-flodet" element={<FlodetPage />} />
        <Route path="/kort-ljuset" element={<LjusetPage />} />
        <Route path="/kort-skiftet" element={<SkiftetPage />} />
        <Route path="/kort-karnan" element={<KarnanPage />} />
        <Route path="/kort-troskeln" element={<TroskelnPage />} />
        <Route path="/kort-grunden" element={<GrundenPage />} />
        <Route path="/kort-vandningen" element={<VandningenPage />} />
        <Route
          path="/helhet"
          element={<Navigate to="/kort-helhet" replace />}
        />
        <Route
          path="/kallan"
          element={<Navigate to="/kort-kallan" replace />}
        />
        <Route
          path="/djupet"
          element={<Navigate to="/kort-djupet" replace />}
        />
        <Route
          path="/flodet"
          element={<Navigate to="/kort-flodet" replace />}
        />
        <Route
          path="/ljuset"
          element={<Navigate to="/kort-ljuset" replace />}
        />
        <Route
          path="/skiftet"
          element={<Navigate to="/kort-skiftet" replace />}
        />
        <Route
          path="/karnan"
          element={<Navigate to="/kort-karnan" replace />}
        />
        <Route
          path="/troskeln"
          element={<Navigate to="/kort-troskeln" replace />}
        />
        <Route
          path="/grunden"
          element={<Navigate to="/kort-grunden" replace />}
        />
        <Route
          path="/vandningen"
          element={<Navigate to="/kort-vandningen" replace />}
        />
      </Routes>
    </div>
  );
}

export default App;
