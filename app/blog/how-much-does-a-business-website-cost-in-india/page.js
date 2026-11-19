import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Schema from "@/components/ui/Schema";
import FaqAccordion from "@/components/ui/FaqAccordion";
import AuthorBox from "@/components/ui/AuthorBox";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { SITE_URL } from "@/data/site";

const SLUG = "/blog/how-much-does-a-business-website-cost-in-india";
const TITLE = "How much does a business website cost in India in 2026?";
const PUBLISHED = "2026-11-17"; // update when you publish
const MODIFIED = "2026-11-17";

export const metadata = {
  title: "Website Cost in India 2026: Real Prices by Type (Guide)",
  description:
    "A business website in India costs about ₹15,000 to ₹1,50,000, depending on type. See prices for each kind of site, hidden costs and how to compare quotes.",
  alternates: { canonical: SLUG },
  openGraph: {
    type: "article",
    title: "Website Cost in India 2026: Real Prices by Type (Guide)",
    description:
      "A business website in India costs about ₹15,000 to ₹1,50,000, depending on type. See prices for each kind of site, hidden costs and how to compare quotes.",
    url: SLUG,
  },
};

const costRows = [
  ["One-page landing site", "₹8,000 to ₹25,000", "3 to 7 days", "A single offer, event or ad campaign"],
  ["Basic 5-page static site", "₹15,000 to ₹30,000", "1 to 2 weeks", "Freelancers, local services, personal brands"],
  ["CMS business site (WordPress, 5 to 10 pages)", "₹20,000 to ₹75,000 from a freelancer, ₹50,000 to ₹1,50,000 from an agency", "2 to 5 weeks", "Companies that will update content often"],
  ["Custom site with design system and SEO setup", "₹75,000 to ₹2,00,000", "4 to 8 weeks", "Brands that want to stand out and rank"],
  ["Web application (logins, dashboards, bookings)", "₹1,50,000 to ₹6,00,000 or more", "6 to 16 weeks", "Non-profits, training providers, startups"],
  ["E-commerce store", "₹1,50,000 to ₹4,00,000 or more", "6 to 12 weeks", "Selling products online"],
];

const priceFactors = [
  ["Number of pages and features.", "Every extra page, form, booking tool or integration adds design, build and testing time."],
  ["Custom design or template.", "A template is faster and cheaper. Custom design takes research, wireframes and revisions, but gives you a site that doesn't look like everyone else's."],
  ["Content.", "If you need text written, photos taken or logos designed, expect extra cost or extra time while you prepare them."],
  ["Technology.", "WordPress is quicker to build and easy to edit. Custom code costs more up front but can be faster and more flexible."],
  ["SEO and speed work.", "Proper heading structure, schema, image optimisation and Search Console setup take real hours. Cheap quotes often skip them."],
  ["Who builds it.", "A freelancer, a small studio and a large agency price very differently, mostly because of overheads."],
  ["Deadline.", "Rush projects cost more because other work is pushed aside."],
];

const forgottenCosts = [
  ["Domain name:", "renewed every year."],
  ["Hosting:", "monthly or yearly, and it varies with traffic."],
  ["Maintenance and updates:", "most business sites need roughly ₹15,000 to ₹50,000 a year for updates, backups and security if you pay someone to handle it."],
  ["Premium plugins or tools:", "some WordPress plugins and design assets are paid yearly."],
  ["Content updates:", "new pages, blog posts and photos over time."],
  ["Marketing:", "a good website doesn't bring visitors by itself. SEO content and promotion are separate work."],
];

const compareQuestions = [
  "How many pages and which features are included?",
  "Is the design custom or a template?",
  "Is SEO setup included (headings, meta tags, schema, sitemap, Search Console)?",
  "Will the site be tested on phones and tested for speed?",
  "Who owns the code, the domain and the hosting account?",
  "How many rounds of changes are included?",
  "What support is included after launch, and for how long?",
  "Can I see real finished websites, and talk to a past client?",
];

const faqs = [
  {
    q: "Can I get a good website for under ₹10,000?",
    a: "Yes, if you only need a simple, template-based page. Expect limited customisation, little or no SEO work and few revisions. It suits a basic online presence, not a growth project.",
  },
  {
    q: "How much should a small business spend?",
    a: "Most small businesses get good results between ₹25,000 and ₹1,00,000, depending on pages, features and design. Spend on what brings enquiries, such as clear service pages, speed and a simple contact path.",
  },
  {
    q: "Is WordPress cheaper than custom code?",
    a: "Usually yes for the first build, because themes and plugins save time. Custom code can cost more up front but may be faster and easier to scale. The right choice depends on your editing needs and growth plans.",
  },
  {
    q: "Do I pay yearly for a website?",
    a: "Yes. You pay for the domain and hosting every year, and usually for maintenance and security if someone manages them for you.",
  },
  {
    q: "Does a higher price mean better rankings?",
    a: "No. Rankings depend on content, competition and technical quality, not on price. A well-built, fast, useful site at a fair price can outrank an expensive one.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: TITLE,
      description:
        "What a business website really costs in India in 2026, what drives the price, hidden costs and how to compare quotes.",
      author: { "@id": `${SITE_URL}/#person` },
      publisher: { "@id": `${SITE_URL}/#person` },
      datePublished: PUBLISHED,
      dateModified: MODIFIED,
      mainEntityOfPage: `${SITE_URL}${SLUG}`,
      url: `${SITE_URL}${SLUG}`,
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function ArticlePage() {
  return (
    <>
      <Schema data={schema} />
      <Breadcrumb
        items={[
          { href: "/", label: "Home" },
          { href: "/blog", label: "Blog" },
          { href: SLUG, label: "Website cost in India" },
        ]}
      />

      <header className="page-hero">
        <div className="wrap">
          <span className="mono">Blog · 7 min read</span>
          <h1 className="rv">
            How much does a business website{" "}
            <span className="hl">cost in India in 2026?</span>
          </h1>
          <p className="updated">Last updated: {MODIFIED}</p>
        </div>
      </header>

      <section style={{ paddingTop: 40 }}>
        <div className="wrap">
          <article className="prose rv">
            <h2>The short answer</h2>
            <p>
              A professional small-business website in India usually costs
              between ₹15,000 and ₹1,50,000 in 2026. A simple template-based
              site sits near the bottom of that range. A custom site with a CMS,
              SEO setup and a proper design process sits higher. Anything with
              logins, payments or a custom admin panel costs more.
            </p>
            <p>
              Published price guides disagree widely, so treat every range,
              including mine, as a starting point and not a promise. Below I
              explain what you pay for, so you can judge any quote.
            </p>

            <h2>Typical cost by type of website (2026)</h2>
            <div className="tbl-wrap">
              <table className="tbl">
                <thead>
                  <tr>
                    <th>Type of website</th>
                    <th>Typical price range</th>
                    <th>Usual timeline</th>
                    <th>Best for</th>
                  </tr>
                </thead>
                <tbody>
                  {costRows.map((r) => (
                    <tr key={r[0]}>
                      <td>{r[0]}</td>
                      <td>{r[1]}</td>
                      <td>{r[2]}</td>
                      <td>{r[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              <strong>My own pricing:</strong> I don&apos;t publish a fixed
              rate card, because the right number depends on your pages and
              features. After a short, free call I send a fixed written quote
              matched to your scope — no hourly surprises and no padding for
              work you don&apos;t need.
            </p>

            <h2>What makes the price go up or down</h2>
            <ul>
              {priceFactors.map(([t, b]) => (
                <li key={t}>
                  <strong>{t}</strong> {b}
                </li>
              ))}
            </ul>

            <h2>The costs people forget</h2>
            <ul>
              {forgottenCosts.map(([t, b]) => (
                <li key={t}>
                  <strong>{t}</strong> {b}
                </li>
              ))}
            </ul>

            <h2>Why very cheap websites often cost more later</h2>
            <p>
              A site under ₹10,000 can be a perfectly fine online business card.
              The problems start when a cheap site is expected to rank and
              convert. Typical issues I see are slow pages from unoptimised
              images, no mobile testing, copied templates, no SEO structure, and
              no handover, so you can&apos;t edit or move the site later.
              Rebuilding it costs more than doing it properly once.
            </p>

            <h2>How to compare quotes properly</h2>
            <p>
              Ask every developer or agency the same questions, and compare
              scope, not just price:
            </p>
            <ol>
              {compareQuestions.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ol>

            <h2>How I&apos;d spend a small business budget</h2>
            <p>
              For a local service business, I would put the money where it
              brings enquiries: a fast, mobile-first site of the few pages you
              actually need, a clear contact path, on-page SEO and Search
              Console set up properly from day one. I&apos;d skip features you
              don&apos;t need yet and leave room in the budget for good content,
              because that is what keeps bringing visitors after launch.
            </p>

            <h2>What I would avoid</h2>
            <p>
              I wouldn&apos;t pay extra for a long list of animations, a page
              count you don&apos;t need, or a promise of page-one rankings.
              Nobody can guarantee a position on Google.
            </p>

            <h2>Frequently asked questions</h2>
            <FaqAccordion items={faqs} schema={false} />

            <h2>Get a fixed quote</h2>
            <p>
              Tell me what you need and I&apos;ll reply within 24 hours with
              questions and, where possible, a fixed quote.{" "}
              <Link href="/contact">Contact me</Link> or read about my{" "}
              <Link href="/services">website development services</Link>.
            </p>

            <p style={{ fontSize: 14, color: "var(--mute)" }}>
              Prices in this guide are rounded from several Indian pricing guides
              and reviewed every few months. Treat every range as a starting
              point, not a promise.
            </p>
            <AuthorBox />
          </article>
        </div>
      </section>

      <RevealOnScroll />
    </>
  );
}
