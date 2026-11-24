import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Schema from "@/components/ui/Schema";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import CallingDashboard from "@/components/ai-calling/CallingDashboard";
import { SITE_URL } from "@/data/site";

export const metadata = {
  title: "AI Calling Automation — Outbound Lead Calling | Yaman Sahu",
  description:
    "An AI voice agent that calls your leads automatically: it dials, qualifies, follows up and books appointments, then logs every call. See a live sample dashboard.",
  alternates: { canonical: "/ai-calling" },
  openGraph: {
    title: "AI Calling Automation — Outbound Lead Calling | Yaman Sahu",
    description:
      "An AI voice agent that calls your leads automatically: dial, qualify, follow up and book appointments — with a live reporting dashboard.",
    url: "/ai-calling",
  },
};

const features = [
  {
    t: "Dials your lead list",
    b: "Upload a list or connect your CRM. The agent calls each lead at the right time, across time zones.",
  },
  {
    t: "Qualifies in real time",
    b: "It asks your questions, understands the answers, and scores each lead so your team only follows up on the warm ones.",
  },
  {
    t: "Books appointments",
    b: "When a lead is interested, it offers open slots and books the meeting straight into your calendar.",
  },
  {
    t: "Logs every call",
    b: "Transcript, outcome, duration and score are saved automatically — nothing falls through the cracks.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${SITE_URL}/ai-calling#service`,
      name: "AI Calling Automation",
      serviceType: "Outbound AI lead calling",
      description:
        "An AI voice agent that automatically calls, qualifies and follows up with leads and books appointments, with a live reporting dashboard.",
      url: `${SITE_URL}/ai-calling`,
      provider: { "@id": `${SITE_URL}/#person` },
      areaServed: ["IN", "GB"],
    },
  ],
};

export default function AiCallingPage() {
  return (
    <>
      <Schema data={schema} />
      <Breadcrumb
        items={[
          { href: "/", label: "Home" },
          { href: "/ai-calling", label: "AI Calling" },
        ]}
      />

      <header className="page-hero">
        <div className="wrap">
          <span className="mono">Automation</span>
          <h1 className="rv">
            AI calling that works{" "}
            <span className="hl">while you sleep.</span>
          </h1>
          <p className="lead">
            An AI voice agent that calls your leads for you — it dials, holds a
            natural conversation, qualifies interest, follows up and books
            appointments, then logs every call. Below is a live sample dashboard
            so you can see exactly what it reports.
          </p>
          <div className="cta" style={{ marginTop: 26 }}>
            <a className="btn solid" href="#dashboard">See the dashboard</a>
            <Link className="btn" href="/contact">Set this up for my business</Link>
          </div>
        </div>
      </header>

      <section style={{ paddingTop: 40 }}>
        <div className="wrap">
          <div className="cards rv">
            {features.map((f) => (
              <div className="ca" key={f.t}>
                <h3>{f.t}</h3>
                <p>{f.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="dashboard" style={{ paddingTop: 10 }}>
        <div className="wrap">
          <div className="sec-head rv">
            <div>
              <span className="mono">Live dashboard</span>
              <h2>
                Every call,
                <br />
                measured.
              </h2>
            </div>
            <p>
              Track dials, connect rate, qualified leads and booked appointments
              in real time — switch the range to see the trend.
            </p>
          </div>
          <div className="rv">
            <CallingDashboard />
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="wrap">
          <div className="card rv">
            <span className="mono">Get started</span>
            <h2>
              Want this calling
              <br />
              your leads?
            </h2>
            <p style={{ maxWidth: 520, margin: "0 auto 8px", color: "var(--deep)" }}>
              I&apos;ll set up the AI agent on your lead list, connect your
              calendar and CRM, and hand you this dashboard. Tell me about your
              sales process and I&apos;ll reply within 24 hours.
            </p>
            <div className="cta">
              <Link className="btn yellow" href="/contact">
                Book a free setup call
              </Link>
              <Link className="btn" href="/services">
                See other services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <RevealOnScroll />
    </>
  );
}
