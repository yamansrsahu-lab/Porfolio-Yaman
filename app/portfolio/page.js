import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Schema from "@/components/ui/Schema";
import ProjectShot from "@/components/ui/ProjectShot";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { SITE_URL } from "@/data/site";

export const metadata = {
  title: "Web Design Portfolio: Live Websites by Yaman Sahu",
  description:
    "Four live websites for a non-profit, a tax firm, a UK business and an AI SEO agency. See how each one was designed and built.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Web Design Portfolio: Live Websites by Yaman Sahu",
    description:
      "Four live websites for a non-profit, a tax firm, a UK business and an AI SEO agency. See how each one was designed and built.",
    url: "/portfolio",
  },
};

const projects = [
  {
    id: "care-skill-foundation",
    n: "1",
    name: "Care Skill Foundation",
    theme: "t1",
    screen: "care-skill-foundation",
    domain: "careskillfoundation.org",
    sector: "non-profit",
    country: "India",
    problem:
      "The foundation runs skills training for youth and women plus health, environment and welfare drives, but had no single place to show its impact or take enrolments.",
    built:
      "A mobile-first site with impact figures, course cards showing duration and level, an enrolment form, a community section for health camps and tree planting, a donation call to action and an admin area so the team manages content itself.",
    tools: "HTML, CSS, JavaScript, responsive UI and WhatsApp chat integration.",
  },
  {
    id: "national-mile",
    n: "2",
    name: "National Mile",
    theme: "t2",
    screen: "national-mile",
    domain: "nationalmile.uk",
    sector: "Courier & logistics",
    country: "United Kingdom",
    problem:
      "A nationwide courier business needed a clear, trustworthy website that loads fast and makes it easy to request a quote and get in touch.",
    built:
      "A responsive multi-page site with an instant van-size quote flow, clear service pages, a mobile-first layout and on-page SEO so the right customers can find it.",
    tools: "HTML, CSS, JavaScript, responsive design and on-page SEO.",
  },
  {
    id: "tax-returns-uk",
    n: "3",
    name: "Tax Returns UK",
    theme: "t3",
    screen: "tax-returns-uk",
    domain: "taxretuns.co.uk",
    sector: "Tax & accounting",
    country: "United Kingdom",
    problem:
      "Tax is stressful and full of jargon, so visitors needed reassurance and a simple way to ask for help.",
    built:
      "Plain-English VAT and tax service pages, clear trust signals, a short enquiry flow and local SEO built for UK searches.",
    tools: "HTML, CSS, JavaScript, responsive design and on-page SEO.",
  },
  {
    id: "claveto-technologies",
    n: "4",
    name: "Claveto Technologies",
    theme: "t4",
    screen: "claveto",
    domain: "claveto.in",
    sector: "AI-driven SEO agency",
    country: "India",
    problem:
      "The agency offers many services (audits, content, AI-search visibility) and needed them explained clearly with credible proof.",
    built:
      "A dark-themed, bold site with a clear services structure, case studies, an FAQ and a student course portal.",
    tools: "WordPress, Elementor and on-page SEO.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: projects.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "CreativeWork",
      name: p.name,
      url: `${SITE_URL}/portfolio#${p.id}`,
      creator: { "@id": `${SITE_URL}/#person` },
    },
  })),
};

export default function PortfolioPage() {
  return (
    <>
      <Schema data={schema} />
      <Breadcrumb
        items={[
          { href: "/", label: "Home" },
          { href: "/portfolio", label: "Portfolio" },
        ]}
      />

      <header className="page-hero">
        <div className="wrap">
          <span className="mono">Portfolio</span>
          <h1 className="rv">
            Four <span className="hl">live websites</span> I designed and built.
          </h1>
          <p className="lead">
            These are real websites for real organisations. Each one shows the
            problem, what I built and the tools I used.
          </p>
        </div>
      </header>

      <section style={{ paddingTop: 50 }}>
        <div className="wrap">
          <div className="prose rv" style={{ maxWidth: 820 }}>
            {projects.map((p) => (
              <div
                key={p.id}
                id={p.id}
                style={{ scrollMarginTop: 100, marginBottom: 56 }}
              >
                <div style={{ marginBottom: 24 }}>
                  <ProjectShot
                    screen={p.screen}
                    name={p.name}
                    domain={p.domain}
                    theme={p.theme}
                  />
                </div>
                <h2>
                  {p.n}. {p.name}
                </h2>
                <p>
                  <strong>Website:</strong> {p.domain} · <strong>Sector:</strong>{" "}
                  {p.sectorPh ? <span className="ph">{p.sector}</span> : p.sector}{" "}
                  · <strong>Country:</strong> {p.country}
                </p>
                <p>
                  <strong>The problem:</strong>{" "}
                  {p.problemPh ? (
                    <span className="ph">{p.problem}</span>
                  ) : (
                    p.problem
                  )}
                </p>
                <p>
                  <strong>What I built:</strong>{" "}
                  {p.builtPh ? <span className="ph">{p.built}</span> : p.built}
                </p>
                <p>
                  <strong>Tools:</strong> {p.tools}
                </p>
                <p>
                  <Link href="/contact">Discuss a similar project →</Link>{" "}
                  · <Link href="/services">See services</Link>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="wrap">
          <div className="card rv">
            <span className="mono">Contact</span>
            <h2>
              Like what
              <br />
              you see?
            </h2>
            <p style={{ maxWidth: 520, margin: "0 auto 8px", color: "var(--deep)" }}>
              Tell me about your project and I&apos;ll send a free review within
              24 hours.
            </p>
            <div className="cta">
              <Link className="btn yellow" href="/contact">
                Start your project
              </Link>
            </div>
          </div>
        </div>
      </section>

      <RevealOnScroll />
    </>
  );
}
