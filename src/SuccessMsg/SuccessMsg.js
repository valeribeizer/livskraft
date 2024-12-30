import React from "react";
import "./style.css";

const SuccessMsg = ({ onClose }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="overlay" onClick={handleOverlayClick}>
      <div className="scs-msg-container">
        <h2 className="h2-scs">
          Tack för ditt förtroende! Jag återkommer så snart som möjligt för att
          hjälpa dig vidare!
        </h2>
      </div>
    </div>
  );
};

export default SuccessMsg;
