import Link from "next/link";

const items = [
  {
    build: "Business and brand websites",
    service: "Website design and development",
    href: "/services#web-development",
  },
  {
    build:
      "Non-profit and service platforms with enrolment, donations and admin panels",
    service: "Custom web applications",
    href: "/services#web-apps",
  },
  {
    build: "Interfaces people enjoy using",
    service: "UI/UX design",
    href: "/services#ui-ux",
  },
  {
    build: "Technical SEO setup so new sites get found",
    service: "SEO-ready builds",
    href: "/services#seo-ready",
  },
  {
    build:
      "AI voice agents and workflows that call leads, qualify them and book appointments for you",
    service: "AI automation",
    href: "/ai-calling",
  },
];

export default function WhatIBuild() {
  return (
    <section className="alt band" id="build" style={{ background: "var(--mint)" }}>
      <div className="wrap">
        <div className="sec-head rv">
          <div>
            <span className="mono">What I build</span>
            <h2>
              Five kinds of work,
              <br />
              one way of working.
            </h2>
          </div>
          <p>
            Whatever you need, you get the same care on design, code, content
            structure and launch.
          </p>
        </div>
        <div className="cards rv">
          {items.map((it) => (
            <Link className="ca" href={it.href} key={it.service}>
              <h3>{it.service}</h3>
              <p>{it.build}</p>
              <span className="arrow">Learn more →</span>
            </Link>
          ))}
        </div>

        {/* Featured: AI calling automation — links to the live dashboard page */}
        <Link href="/ai-calling" className="svc-promo rv" aria-label="Open the AI calling automation dashboard">
          <div className="svc-promo-copy">
            <span className="svc-promo-tag">New · Automation</span>
            <h3>AI Calling Automation</h3>
            <p>
              An AI voice agent that calls your leads automatically — it dials,
              qualifies, follows up and books appointments, then logs every call.
              See it working on a live sample dashboard.
            </p>
            <span className="svc-promo-btn">
              Open live dashboard
              <span className="circ" aria-hidden="true">→</span>
            </span>
          </div>

          <div className="svc-promo-viz" aria-hidden="true">
            <div className="svc-phone">
              <span className="svc-phone-dot" />
              <svg viewBox="0 0 24 24" className="svc-phone-ic">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div className="svc-wave">
              {[14, 26, 18, 34, 22, 40, 20, 30, 16, 28, 12].map((h, i) => (
                <i key={i} style={{ height: h }} />
              ))}
            </div>
            <div className="svc-promo-mini">
              <div><b>128</b><span>Calls today</span></div>
              <div><b>41</b><span>Booked</span></div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
