import Link from "next/link";

export default function CTA() {
  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <div className="card rv">
          <span className="mono">Contact</span>
          <h2>
            Got a project
            <br />
            in mind?
          </h2>
          <p style={{ maxWidth: 520, margin: "0 auto 8px", color: "var(--deep)" }}>
            Tell me what you want to build and I&apos;ll reply within 24 hours
            with honest next steps and, where possible, a fixed quote.
          </p>
          <div className="cta">
            <Link className="btn yellow" href="/contact">
              Get a free project review
            </Link>
            <Link className="btn" href="/portfolio">
              See my live projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
