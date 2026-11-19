"use client";

import { useState } from "react";

// Browser-framed project screenshot.
// Loads /assets/screens/[screen].webp (1600x1000). If the file is missing,
// it falls back to a neutral placeholder card showing the project name.
export default function ProjectShot({ screen, name, domain, theme = "t1" }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`shot ${theme}`}>
      <div className="bar">
        <i></i>
        <i></i>
        <i></i>
        <u>{domain}</u>
      </div>

      {!failed && (
        <img
          className="shot-img"
          src={`/assets/screens/${screen}.jpg`}
          width="1901"
          height="919"
          loading="lazy"
          alt={`Screenshot of the ${name} website`}
          onError={() => setFailed(true)}
        />
      )}

      {/* Neutral placeholder — visible until the screenshot loads, or if it is
          missing. Decorative, so hidden from assistive tech. */}
      <div className="scr" aria-hidden="true">
        <div className="h"></div>
        <div className="h2"></div>
        <div className="p"></div>
        <div className="p s"></div>
        <div className="pill"></div>
        <div className="grid">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <span className="scr-name">{name}</span>
      </div>
    </div>
  );
}
