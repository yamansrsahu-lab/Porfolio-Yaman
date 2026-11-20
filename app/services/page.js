import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FaqAccordion from "@/components/ui/FaqAccordion";
import Schema from "@/components/ui/Schema";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { SITE_URL } from "@/data/site";

const ICONS = {
  "web-development": (
    <>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </>
  ),
  "web-apps": (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 9h20" />
      <circle cx="5" cy="6.5" r="0.6" />
      <circle cx="7.5" cy="6.5" r="0.6" />
    </>
  ),
  "ui-ux": (
    <>
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
    </>
  ),
  "seo-ready": (
    <>
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </>
  ),
  wordpress: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18" />
      <path d="M9 21V9" />
    </>
  ),
  support: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="M5 5l4.2 4.2M14.8 14.8 19 19M19 5l-4.2 4.2M5 19l4.2-4.2" />
    </>
  ),
  "seo-keyword-research": (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </>
  ),
  "seo-on-page": (
    <>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M9 15l2 2 4-4" />
    </>
  ),
  "seo-content": (
    <>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M8 13h8M8 17h5M8 9h2" />
    </>
  ),
  "seo-off-page": (
    <>
      <path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7" />
      <path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7" />
    </>
  ),
  "seo-technical": (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </>
  ),
};

function Icon({ id }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {ICONS[id] || ICONS["seo-ready"]}
    </svg>
  );
}

function SeoArt() {
  return (
    <svg
      className="seo-art"
      viewBox="0 0 420 260"
      role="img"
      aria-label="Illustration of a website climbing Google search rankings with backlinks"
    >
      <defs>
        <linearGradient id="sg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#4cc274" />
          <stop offset="1" stopColor="#7fd99a" />
        </linearGradient>
      </defs>
      {/* browser card */}
      <rect x="22" y="26" width="286" height="208" rx="16" fill="#fff" stroke="#d6efdd" />
      <circle cx="42" cy="46" r="3.4" fill="#ffd23f" />
      <circle cx="54" cy="46" r="3.4" fill="#7fd99a" />
      <circle cx="66" cy="46" r="3.4" fill="#d6efdd" />
      {/* search bar */}
      <rect x="40" y="62" width="250" height="26" rx="13" fill="#f1fbf3" stroke="#d6efdd" />
      <circle cx="58" cy="75" r="6" fill="none" stroke="#4cc274" strokeWidth="2" />
      <path d="M62.5 79.5 67 84" stroke="#4cc274" strokeWidth="2" strokeLinecap="round" />
      <rect x="74" y="71" width="120" height="8" rx="4" fill="#cdecd6" />
      {/* ranking rows */}
      <g>
        <rect x="40" y="104" width="250" height="30" rx="8" fill="url(#sg)" />
        <text x="54" y="123" fontFamily="monospace" fontSize="13" fill="#fff" fontWeight="700">#1</text>
        <rect x="76" y="114" width="150" height="7" rx="3.5" fill="#ffffff" opacity="0.9" />
        <rect x="76" y="124" width="92" height="5" rx="2.5" fill="#ffffff" opacity="0.6" />
      </g>
      <g opacity="0.85">
        <rect x="40" y="142" width="250" height="26" rx="8" fill="#f1fbf3" stroke="#d6efdd" />
        <text x="54" y="159" fontFamily="monospace" fontSize="12" fill="#1d7a43" fontWeight="700">#2</text>
        <rect x="76" y="150" width="150" height="6" rx="3" fill="#cdecd6" />
        <rect x="76" y="159" width="80" height="4" rx="2" fill="#d6efdd" />
      </g>
      <g opacity="0.7">
        <rect x="40" y="176" width="250" height="26" rx="8" fill="#f1fbf3" stroke="#d6efdd" />
        <text x="54" y="193" fontFamily="monospace" fontSize="12" fill="#1d7a43" fontWeight="700">#3</text>
        <rect x="76" y="184" width="130" height="6" rx="3" fill="#cdecd6" />
      </g>
      {/* rising chart + backlink nodes */}
      <polyline
        points="320,206 344,180 368,190 392,140"
        fill="none"
        stroke="#4cc274"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="320" cy="206" r="5" fill="#fff" stroke="#4cc274" strokeWidth="2.5" />
      <circle cx="344" cy="180" r="5" fill="#fff" stroke="#4cc274" strokeWidth="2.5" />
      <circle cx="368" cy="190" r="5" fill="#fff" stroke="#4cc274" strokeWidth="2.5" />
      <circle cx="392" cy="140" r="7" fill="#ffd23f" stroke="#fff" strokeWidth="2.5" />
      <path d="M392 133v-20M392 113l-6 6M392 113l6 6" stroke="#4cc274" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* backlink dots feeding card */}
      <g stroke="#7fd99a" strokeWidth="1.6" strokeDasharray="3 4">
        <path d="M330 70 308 92" />
        <path d="M352 48 310 70" />
      </g>
      <circle cx="332" cy="68" r="4" fill="#7fd99a" />
      <circle cx="354" cy="46" r="4" fill="#ffd23f" />
    </svg>
  );
}

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
    name: "Off-page SEO, backlinks & digital PR",
    body: "Building your site's authority the honest, white-hat way: earning quality backlinks through genuinely useful content, outreach and digital PR — so your reputation grows without risk.",
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
                <div className="sc-top">
                  <span className="sc-icon" aria-hidden="true">
                    <Icon id={s.id} />
                  </span>
                  <span className="sc-num" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
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

          <div className="seo-banner rv">
            <div className="seo-banner-copy">
              <span className="mono">How it works together</span>
              <h3>
                From page 5 to page 1 —
                <br />
                the honest way.
              </h3>
              <p>
                Keyword research points to the right pages, on-page and technical
                SEO make them easy to read and fast to load, strong content earns
                trust, and quality backlinks build authority. Together they move
                you up the results — no bought links, no risky shortcuts.
              </p>
              <div className="seo-chips">
                <span>Keyword research</span>
                <span>On-page SEO</span>
                <span>Content</span>
                <span>Backlinks</span>
                <span>Technical SEO</span>
              </div>
            </div>
            <SeoArt />
          </div>

          <div className="service-grid rv">
            {seoServices.map((s, i) => (
              <article
                key={s.id}
                id={s.id}
                className="service-card"
                style={{ scrollMarginTop: 100 }}
              >
                <div className="sc-top">
                  <span className="sc-icon" aria-hidden="true">
                    <Icon id={s.id} />
                  </span>
                  <span className="sc-num" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
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
