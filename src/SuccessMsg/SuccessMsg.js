import React from "react";
import "./style.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

// const SuccessMsg = ({ onClose }) => {
//   const handleOverlayClick = (e) => {
//     if (e.target === e.currentTarget) {
//       onClose();
//     }
//   };

//   return (
//     <div className="overlay" onClick={handleOverlayClick}>
//       <div
//         className="scs-msg-container"
//         style={{
//           backgroundImage:
//             window.innerWidth > 560
//               ? "url('/tsInfo-bg.png')"
//               : "url('/tsInfo-bg-mb.png')",
//         }}
//       >
//         <h2 className="h2-scs">
//           Tack för ditt förtroende! Jag återkommer så snart som möjligt för att
//           hjälpa dig vidare!
//         </h2>
//       </div>
//     </div>
//   );
// };

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
