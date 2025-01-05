import React from "react";
import { Link } from "react-router";
import './style.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
      <div className="footer-container">
        <Link
          to="/integritetspolicy"
          className="a-footer"
        >
          integritetspolicy
        </Link>
        <p className="p-footer">
          {currentYear}. All rights reserved | Designed and built with 🖤 by
          Valeryia Beizer
        </p>
      </div>
    );
}

export default Footer;