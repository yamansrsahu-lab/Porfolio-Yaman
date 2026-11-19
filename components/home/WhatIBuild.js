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
];

export default function WhatIBuild() {
  return (
    <section className="alt band" id="build" style={{ background: "var(--mint)" }}>
      <div className="wrap">
        <div className="sec-head rv">
          <div>
            <span className="mono">What I build</span>
            <h2>
              Four kinds of work,
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
      </div>
    </section>
  );
}
