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
        <p className="p-tsInfo-1">{content.pris}</p>
        <p className="p-tsInfo" style={{ textAlign: "center", fontStyle: "italic" }}>
          Kontakta mig gärna för mer information eller för att få en offert
          anpassad efter dina behov.
        </p>
        {content.link && (
          <Link to={content.link.to} className={content.link.className}>
            {content.link.text}
          </Link>
        )}
        {content.key !== 3 && (
          <button className="btn_main">
            <Link
              to="/fa-stod"
              className="btn-link"
              state={{ source: "fa-stod" }}
            >
              FÅ STÖD
            </Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default TsjansterInfo;
