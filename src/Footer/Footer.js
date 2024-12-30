import React from "react";
import './style.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
      <div className="footer-container">
        <a className="a-footer" href="https://drive.google.com/file/d/1J3ApEuyhO8ZOtemQYp3UhNgvuzdgfJVD/view?usp=sharing">
          integritetspolicy
        </a>
        <p className="p-footer">
          {currentYear}. All rights reserved | Designed and built with 🖤 by
          Valeryia Beizer
        </p>
      </div>
    );
}

export default Footer;