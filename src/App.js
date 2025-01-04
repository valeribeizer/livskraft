import React from "react";
import { Routes, Route } from "react-router";
import HomeScreen from "./HomeScreen/HomeScreen";
import OmOss from "./Om oss/OmOss";
import Kontakt from "./Kontakt/Kontakt";
import Faq from "./FAQ/Faq";
import Tsjanster from "./Tsjänster/Tsjanster";
import Forelasningar from "./Föreläsningar/Forelasningar";
import Priser from "./Priser/Priser";
import Blog from "./Blog/Blog";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/om-oss" element={<OmOss />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/tjanster" element={<Tsjanster />} />
        <Route path="/forelasningar" element={<Forelasningar />} />
        <Route path="/priser" element={<Priser />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
