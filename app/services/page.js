import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FaqAccordion from "@/components/ui/FaqAccordion";
import Schema from "@/components/ui/Schema";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { SITE_URL } from "@/data/site";

export const metadata = {
  title: "Web Development & SEO Services in Raipur | Yaman Sahu",
  description:
    "Website design, full-stack development, UI/UX and complete SEO — keyword research, on-page, content, off-page and technical SEO for India & UK businesses.",
  keywords: [
    "SEO services Raipur",
    "keyword research",
    "on-page SEO",
    "off-page SEO",
    "link building",
    "content optimization",
    "technical SEO",
    "website development services Raipur",
    "landing page optimization",
  ],
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Web Development & SEO Services in Raipur | Yaman Sahu",
    description:
      "Website design, full-stack development, UI/UX and complete SEO — keyword research, on-page, content, off-page and technical SEO for India & UK businesses.",
    url: "/services",
  },
};

const services = [
  {
    id: "web-development",
    name: "Website design and development",
    body: "A fast, mobile-first website for your business, built page by page around what your visitors want to do. Includes design, development, content structure, contact forms, analytics and launch.",
    best: "service businesses, consultants, local shops and agencies.",
    get: "a live website, source files, Search Console and Analytics set up, and a handover session.",
    timeline: "2 to 4 weeks.",
  },
  {
    id: "web-apps",
    name: "Custom web applications",
    body: "When a template isn't enough: enrolment systems, user logins, admin dashboards, booking and enquiry tools. I built this kind of platform for Care Skill Foundation, where the team now manages courses and content on its own.",
    best: "non-profits, training providers, startups and internal tools.",
    get: "secure back-end, database, admin panel and documentation.",
    timeline: "4 to 10 weeks, depending on features.",
  },
  {
    id: "ui-ux",
    name: "UI/UX design",
    body: "Research-led interface design: user flows, wireframes, high-fidelity screens and clickable prototypes in Figma. You approve how it looks and works before any code is written.",
    best: "new products, redesigns and sites with low conversion.",
    get: "Figma files, a style guide and a developer-ready handoff.",
    timeline: "1 to 3 weeks.",
  },
  {
    id: "seo-ready",
    name: "SEO-ready builds",
    body: "Technical SEO built into the website instead of added later: clean heading structure, fast loading, mobile layouts, XML sitemap, structured data, meta tags, redirects and Search Console setup.",
    best: "new sites and redesigns that must not lose existing traffic.",
    get: "an SEO checklist report and a launch-day crawl check.",
    dont: "buy links or promise rankings.",
  },
  {
    id: "wordpress",
    name: "WordPress and CMS sites",
    body: "A site your own team can edit. I build custom WordPress themes or Elementor layouts that stay fast, and I train your staff to update pages safely.",
  },
  {
    id: "support",
    name: "Website care and support",
    body: "Monthly updates, backups, security checks, speed monitoring and small changes, so your site doesn't go stale.",
  },
];

const seoServices = [
  {
    id: "seo-keyword-research",
    name: "Keyword research & strategy",
    body: "I find the exact terms your customers actually search, check how hard each one is to rank for, and map them to the right pages — so every page has a clear job and a realistic chance to rank.",
    best: "new sites, content planning and businesses unsure what to target.",
    get: "a keyword map, search-intent notes and a prioritised content plan.",
  },
  {
    id: "seo-on-page",
    name: "On-page SEO",
    body: "Everything Google reads on a page, done right: title tags, meta descriptions, heading structure, internal links, image alt text and schema markup — all matched to one target keyword per page.",
    best: "pages that aren't ranking as well as they should.",
    get: "optimised titles, metas, headings, internal links and structured data.",
  },
  {
    id: "seo-content",
    name: "Content & landing-page optimization",
    body: "Rewriting and restructuring page content so it answers real search queries and guides visitors to act — clearer messaging, scannable structure and strong calls to action that lift conversions.",
    best: "landing pages that get visitors but few enquiries.",
    get: "optimised copy, a cleaner page structure and tested calls to action.",
  },
  {
    id: "seo-off-page",
    name: "Off-page SEO & link building",
    body: "Building your site's authority the honest, white-hat way: earning links through genuinely useful content, outreach and digital PR — so your reputation grows without risk.",
    best: "sites that need more authority to compete.",
    get: "an outreach plan, link-worthy content and honest reporting.",
    dont: "buy links or use schemes that risk a Google penalty.",
  },
  {
    id: "seo-technical",
    name: "Technical SEO & Core Web Vitals",
    body: "The engine-room work: crawlability, site speed, Core Web Vitals, XML sitemaps, redirects, structured data and Google Search Console setup — so search engines can read and trust your site.",
    best: "sites with crawl, speed or indexing problems.",
    get: "a technical audit, prioritised fixes and Search Console set up.",
  },
];

const chooser = [
  ["Get a professional site online quickly", "Website design and development"],
  ["Take bookings, logins or payments", "Custom web applications"],
  ["Fix a site people leave quickly", "UI/UX design"],
  ["Rank a new or redesigned site", "SEO-ready builds"],
  ["Update content yourself", "WordPress and CMS sites"],
];

const projectRun = [
  ["Free review call (30 minutes):", "goals, audience, budget range."],
  ["Fixed quote:", "scope, price and timeline in writing."],
  ["Design and approval:", "wireframes, then screens."],
  ["Build and testing:", "preview link, real-device testing."],
  ["Launch and handover:", "go live, training and 30 days of fixes."],
];

const faqs = [
  {
    q: "What is the difference between a web developer and an SEO agency?",
    a: "A developer builds the site and its technical foundations. An SEO agency focuses on ongoing content and authority work. I handle the first part so any SEO work that follows is faster and cheaper.",
  },
  {
    q: "Do you build in WordPress or custom code?",
    a: "Both. I recommend whichever fits your budget, editing needs and growth plans, and I explain why.",
  },
  {
    q: "What do I need to provide?",
    a: "Your logo, brand colours, key text and photos. If you don't have text yet, I can help structure it.",
  },
  {
    q: "Do you redesign existing websites?",
    a: "Yes. I audit what ranks today so a redesign keeps your traffic.",
  },
  {
    q: "Do you do off-page SEO and link building?",
    a: "Yes — the white-hat way. I earn links through genuinely useful content, outreach and digital PR. I never buy links or use schemes, because those put your site at risk of a Google penalty.",
  },
  {
    q: "Do you offer SEO without building the website?",
    a: "Yes. Keyword research, on-page SEO, content optimization and technical SEO can all be done on your existing site, whoever built it.",
  },
  {
    q: "How do payments work?",
    a: "50% to start, 50% on launch. Invoices are clear and itemised.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [...services, ...seoServices].map((s) => ({
    "@type": "Service",
    name: s.name,
    description: s.body,
    serviceType: s.name,
    url: `${SITE_URL}/services#${s.id}`,
    provider: { "@id": `${SITE_URL}/#person` },
    areaServed: ["IN", "GB"],
  })),
};

export default function ServicesPage() {
  return (
    <>
      <Schema data={schema} />
      <Breadcrumb
        items={[
          { href: "/", label: "Home" },
          { href: "/services", label: "Services" },
        ]}
      />

      <header className="page-hero">
        <div className="wrap">
          <span className="mono">Services</span>
          <h1 className="rv">
            Web development, UI/UX and{" "}
            <span className="hl">SEO services.</span>
          </h1>
          <p className="lead">
            A good website does three jobs: it looks trustworthy, it works on
            every phone, and it gets found. I design and build the site, then
            handle the SEO that brings the right visitors — keyword research,
            on-page, content, off-page and technical. Each service is a fixed
            quote after a short call.
          </p>
        </div>
      </header>

      <section style={{ paddingTop: 50 }}>
        <div className="wrap">
          <div className="service-grid rv">
            {services.map((s, i) => (
              <article
                key={s.id}
                id={s.id}
                className="service-card"
                style={{ scrollMarginTop: 100 }}
              >
                <span className="sc-num" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2>{s.name}</h2>
                <p>{s.body}</p>
                <ul className="sc-meta">
                  {s.best && (
                    <li>
                      <span>Best for</span>
                      {s.best}
                    </li>
                  )}
                  {s.get && (
                    <li>
                      <span>You get</span>
                      {s.get}
                    </li>
                  )}
                  {s.timeline && (
                    <li>
                      <span>Timeline</span>
                      {s.timeline}
                    </li>
                  )}
                  {s.dont && (
                    <li>
                      <span>Won&apos;t do</span>
                      {s.dont}
                    </li>
                  )}
                </ul>
              </article>
            ))}
          </div>

          <div className="sec-head rv" style={{ marginTop: 84 }}>
            <div>
              <span className="mono">SEO services</span>
              <h2>
                Get found on Google
                <br />
                and in AI search.
              </h2>
            </div>
            <p>
              Beyond the build — the ongoing search work that turns a good
              website into one that brings enquiries, done the white-hat way.
            </p>
          </div>
          <div className="service-grid rv">
            {seoServices.map((s, i) => (
              <article
                key={s.id}
                id={s.id}
                className="service-card"
                style={{ scrollMarginTop: 100 }}
              >
                <span className="sc-num" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2>{s.name}</h2>
                <p>{s.body}</p>
                <ul className="sc-meta">
                  {s.best && (
                    <li>
                      <span>Best for</span>
                      {s.best}
                    </li>
                  )}
                  {s.get && (
                    <li>
                      <span>You get</span>
                      {s.get}
                    </li>
                  )}
                  {s.dont && (
                    <li>
                      <span>Won&apos;t do</span>
                      {s.dont}
                    </li>
                  )}
                </ul>
              </article>
            ))}
          </div>

          <div className="prose rv" style={{ marginTop: 84 }}>
            <h2>Which service do I need?</h2>
            <div className="tbl-wrap">
              <table className="tbl">
                <thead>
                  <tr>
                    <th>If you want to…</th>
                    <th>Start with</th>
                  </tr>
                </thead>
                <tbody>
                  {chooser.map(([want, start]) => (
                    <tr key={want}>
                      <td>{want}</td>
                      <td>{start}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>How a project runs</h2>
            <ol>
              {projectRun.map(([t, b]) => (
                <li key={t}>
                  <strong>{t}</strong> {b}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section id="faq">
        <div className="wrap">
          <div className="sec-head rv">
            <div>
              <span className="mono">Services FAQ</span>
              <h2>
                Common questions,
                <br />
                answered.
              </h2>
            </div>
          </div>
          <div className="rv">
            <FaqAccordion items={faqs} schema={false} />
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="wrap">
          <div className="card rv">
            <span className="mono">Get started</span>
            <h2>
              Not sure which
              <br />
              service fits?
            </h2>
            <div className="cta">
              <Link className="btn yellow" href="/contact">
                Get a free project review
              </Link>
              <Link className="btn" href="/portfolio">
                See live projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      <RevealOnScroll />
    </>
  );
}
