import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Link } from "react-router";
import "./style.css";

const SPLASH_VISIBLE_MS = 2600;
const SPLASH_FADE_MS = 2000;

const CardPageLayout = ({
  title,
  children,
  ctaTo = "/kontakt",
  ctaLabel = "Kontakta mig",
  /** Matches `/public/cards/{splashCardId}.png` — e.g. `helhet`, `vandningen` */
  splashCardId,
}) => {
  const [splashPhase, setSplashPhase] = useState(
    splashCardId ? "visible" : "done"
  );

  useEffect(() => {
    if (!splashCardId) return undefined;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) {
      setSplashPhase("done");
      return undefined;
    }

    document.body.style.overflow = "hidden";
    const tShow = window.setTimeout(() => {
      setSplashPhase("fade");
    }, SPLASH_VISIBLE_MS);
    const tFallback = window.setTimeout(() => {
      setSplashPhase("done");
    }, SPLASH_VISIBLE_MS + SPLASH_FADE_MS + 400);

    return () => {
      window.clearTimeout(tShow);
      window.clearTimeout(tFallback);
      document.body.style.overflow = "";
    };
  }, [splashCardId]);

  useEffect(() => {
    if (splashPhase === "done") {
      document.body.style.overflow = "";
    }
  }, [splashPhase]);

  const onSplashTransitionEnd = (e) => {
    if (e.propertyName !== "opacity") return;
    if (splashPhase === "fade") {
      setSplashPhase("done");
    }
  };

  const showSplash = splashCardId && splashPhase !== "done";

  return (
    <div className="card-page-layout">
      {showSplash ? (
        <div
          className={`card-splash${
            splashPhase === "fade" ? " card-splash--fade" : ""
          }`}
          onTransitionEnd={onSplashTransitionEnd}
          style={{ transitionDuration: `${SPLASH_FADE_MS}ms` }}
          aria-hidden="true"
        >
          <img
            className="card-splash-img"
            src={`${process.env.PUBLIC_URL}/cards/${splashCardId}.png`}
            alt=""
          />
        </div>
      ) : null}
      <NavBar />
      <main className="card-page-container">
        <h1>{title}</h1>
        {children ? (
          <div className="card-page-body">{children}</div>
        ) : (
          <p className="card-page-text">
            Innehall for den har sidan kommer inom kort.
          </p>
        )}
        <Link to={ctaTo} className="btn_main card-page-btn">
          {ctaLabel}
        </Link>
      </main>
      <Footer />
    </div>
  );
};

export default CardPageLayout;
