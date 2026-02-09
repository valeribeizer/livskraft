import React from "react";
import "./style.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const SuccessMsg = () => {
  return (
    <div>
      <NavBar />
      <div className="sm-container">
        <h2 className="h2-scs">
          Tack för ditt förtroende! Jag återkommer så snart som möjligt för att
          hjälpa dig vidare!
        </h2>
      </div>
      <Footer />
    </div>
  );
};

export default SuccessMsg;
