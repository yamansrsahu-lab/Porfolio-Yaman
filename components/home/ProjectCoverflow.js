"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";

const N = projects.length;

function circularOffset(i, active) {
  let diff = i - active;
  if (diff > N / 2) diff -= N;
  if (diff < -N / 2) diff += N;
  return diff;
}

function cardStyle(off) {
  const abs = Math.abs(off);
  const hidden = abs > 2;
  return {
    transform: `translateX(${off * 46}%) translateZ(${-abs * 140}px) rotateY(${
      off * -34
    }deg) scale(${1 - abs * 0.1})`,
    opacity: hidden ? 0 : off === 0 ? 1 : abs === 1 ? 0.82 : 0.5,
    zIndex: 20 - abs,
    pointerEvents: hidden ? "none" : "auto",
    filter: off === 0 ? "none" : "brightness(0.7)",
  };
}

export default function ProjectCoverflow() {
  const [active, setActive] = useState(0);
  const startX = useRef(null);

  const go = (dir) => setActive((a) => (a + dir + N) % N);

  const onDown = (e) => {
    startX.current = e.clientX ?? e.touches?.[0]?.clientX ?? null;
  };
  const onUp = (e) => {
    if (startX.current == null) return;
    const end = e.clientX ?? e.changedTouches?.[0]?.clientX ?? startX.current;
    const d = end - startX.current;
    if (Math.abs(d) > 45) go(d < 0 ? 1 : -1);
    startX.current = null;
  };

  const current = projects[active];

  return (
    <section className="cf-section" aria-roledescription="carousel">
      <div className="wrap">
        <div className="sec-head rv cf-head">
          <div>
            <span className="mono">Selected work</span>
            <h2>
              Live projects,
              <br />
              up close.
            </h2>
          </div>
          <p>
            Four real websites I designed and built — swipe or use the arrows to
            flip through the work.
          </p>
        </div>
      </div>

      <div
        className="cf-stage"
        onPointerDown={onDown}
        onPointerUp={onUp}
        onTouchStart={onDown}
        onTouchEnd={onUp}
      >
        <div className="cf-track">
          {projects.map((p, i) => {
            const off = circularOffset(i, active);
            return (
              <article
                key={p.title}
                className="cf-card"
                data-active={off === 0}
                style={cardStyle(off)}
                onClick={() => off !== 0 && setActive(i)}
                aria-hidden={off !== 0}
              >
                <div className="cf-img">
                  <img
                    src={`/assets/screens/${p.screen}.jpg`}
                    alt={`${p.title} website`}
                    loading="lazy"
                    draggable="false"
                  />
                  <span className="cf-badge">{p.label?.split("·").slice(1).join("·").trim() || "Live"}</span>
                </div>
                <div className="cf-body">
                  <div className="cf-counter">
                    {i + 1} <span>/ {N}</span>
                  </div>
                  <h3>{p.title}</h3>
                  <div className="cf-meta">🌐 {p.domain}</div>
                  <p>{p.description}</p>
                  <Link className="cf-link" href="/portfolio">
                    View project →
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="cf-dots" role="tablist">
        {projects.map((p, i) => (
          <button
            key={p.title}
            className="cf-dot"
            data-on={i === active}
            aria-label={`Show ${p.title}`}
            aria-selected={i === active}
            onClick={() => setActive(i)}
          />
        ))}
      </div>

      {/* Bottom glass pill (like the reference) */}
      <div className="cf-pill">
        <button className="cf-nav" aria-label="Previous project" onClick={() => go(-1)}>
          ‹
        </button>
        <div className="cf-pill-thumb">
          <img src={`/assets/screens/${current.screen}.jpg`} alt="" draggable="false" />
        </div>
        <div className="cf-pill-text">
          <strong>{current.title}</strong>
          <span>{current.domain}</span>
        </div>
        <button className="cf-nav" aria-label="Next project" onClick={() => go(1)}>
          ›
        </button>
      </div>

      <div className="wrap cf-cta-wrap">
        <Link className="btn yellow" href="/portfolio">
          See all projects
        </Link>
      </div>
    </section>
  );
}
