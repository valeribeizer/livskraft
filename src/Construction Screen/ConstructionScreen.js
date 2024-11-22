import React from "react";
import "./style.css";

const ConstructionScreen = () => {
    return (
      <div>
        <img
          className="img_cnstr"
          src="livskraft.png"
          alt="livskraft"
          loading="lazy"
        />
        <h1 className="h1_cnstr">Webbsidan är under uppbyggnad</h1>
        <p className="p_cnstr">
          Håll utkik inför lanseringen av vår hemsida på instagram{" "}
          <a href="https://www.instagram.com/livskraft.eu/">@livskraft.eu</a>
        </p>
        <img className="img1_cnstr" src="tree.png" alt="tree" loading="lazy" />
      </div>
    );
}

export default ConstructionScreen;