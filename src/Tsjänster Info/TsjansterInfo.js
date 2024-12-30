import React from "react";
import { Link } from "react-router";
import "./style.css";

const TsjansterInfo = ({ isOpen, content, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="overlay" onClick={onClose}>
      <div className="tsInfo-container" onClick={(e) => e.stopPropagation()}>
        <h2>{content.title}</h2>
        <div
          className="p-tsInfo"
          dangerouslySetInnerHTML={{ __html: content.desc }}
        />
        {content.link && (
          <Link to={content.link.to} className={content.link.className}>
            {content.link.text}
          </Link>
        )}
        <button className="btn_main">
          <Link to="/kontakt" style={{ color: "#eae5db", textDecoration: "none" }}>
            SKICKA BOKNINGSFÖRFRÅGAN
          </Link>
        </button>
      </div>
    </div>
  );
};

export default TsjansterInfo;
