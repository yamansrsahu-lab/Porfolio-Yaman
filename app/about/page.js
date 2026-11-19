import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Schema from "@/components/ui/Schema";
import Avatar from "@/components/ui/Avatar";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { SITE_URL } from "@/data/site";

const TODAY = "2026-11-18";

export const metadata = {
  title: "About Yaman Sahu | Web Developer & UI/UX Designer",
  description:
    "Meet Yaman Sahu, a full-stack developer and UI/UX designer in Raipur. See my background, skills, tools and the live websites I have built.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Yaman Sahu | Web Developer & UI/UX Designer",
    description:
      "Meet Yaman Sahu, a full-stack developer and UI/UX designer in Raipur. See my background, skills, tools and the live websites I have built.",
    url: "/about",
  },
};

const miniStats = [
  { value: "4", label: "Live client websites" },
  { value: "2", label: "Countries — India & UK" },
  { value: "B.Tech", label: "Computer Science" },
  { value: "24h", label: "Reply time" },
];

const timeline = [
  {
    period: "2019 – 2023",
    title: "B.Tech, Computer Science",
    org: "Columbia Institute of Engineering & Technology (SVTU)",
    text: "Built my foundations in programming, databases and how the web really works.",
  },
  {
    period: "2024 – 2026",
    title: "Web Developer — Care Skill Foundation",
    org: "Non-profit · India",
    text: "Developed and maintained the website for a non-profit: course pages, content updates and routine troubleshooting.",
  },
  {
    period: "2026 – now",
    title: "Freelance Web Developer & UI/UX Designer",
    org: "Independent · India & UK clients",
    text: "Design, build and optimise responsive business websites and landing pages — frontend, SEO and launch, end to end.",
  },
];

const skills = [
  ["Design & UI/UX", "Wireframing, prototyping, responsive design, design systems"],
  ["Front-end", "HTML5, CSS3, JavaScript, Next.js, Tailwind CSS"],
  ["Back-end & data", "Node.js, PostgreSQL, Firebase Authentication"],
  ["CMS", "WordPress, Elementor, custom themes"],
  ["SEO & performance", "On-page SEO, keyword research, Rank Math, meta & internal linking, Google Search Console, Lighthouse"],
  ["Launch", "Git, Vercel, cPanel, Cloudflare, DNS and SSL"],
];

const liveWork = [
  { label: "Care Skill Foundation", note: "non-profit training & community platform, India" },
  { label: "National Mile", note: "nationwide courier business website, UK" },
  { label: "Tax Return Assist", note: "VAT & tax services website, UK" },
  { label: "Claveto Technologies", note: "AI-driven SEO agency website, India" },
];

const principles = [
  ["Honest scope.", "I tell you what is needed and what isn't, even when it means a smaller invoice."],
  ["Speed matters.", "Pages should load fast on an average phone, because most of your visitors use one."],
  ["Accessible by default.", "Readable text, clear contrast, keyboard-friendly navigation."],
  ["You own everything.", "Code, content and accounts are handed over to you at launch."],
];

const schema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${SITE_URL}/about#profilepage`,
  url: `${SITE_URL}/about`,
  dateModified: TODAY,
  mainEntity: {
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: "Yaman Sahu",
    jobTitle: "Full-Stack Developer and UI/UX Designer",
    image: `${SITE_URL}/assets/img/yaman-sahu.jpg`,
    knowsAbout: [
      "Web development",
      "UI/UX design",
      "Technical SEO",
      "Next.js",
      "Node.js",
      "WordPress",
    ],
    alumniOf: "Columbia Institute of Engineering & Technology",
  },
};

export default function AboutPage() {
  return (
    <>
      <Schema data={schema} />
      <Breadcrumb
        items={[
          { href: "/", label: "Home" },
          { href: "/about", label: "About" },
        ]}
      />

      {/* Hero: intro + avatar */}
      <header className="page-hero">
        <div className="wrap about-hero">
          <div className="about-intro">
            <span className="mono">About</span>
            <h1 className="rv">
              The developer <span className="hl">behind the websites.</span>
            </h1>
            <p className="lead">
              I&apos;m Yaman Sahu — a full-stack developer and UI/UX designer in
              Raipur, India. I design, build and launch fast, SEO-ready websites
              for businesses in India and the UK, and I handle the whole journey
              myself: design, code, content structure and launch.
            </p>
            <div className="cta">
              <Link href="/contact" className="btn solid">
                Work with me
              </Link>
              <Link href="/portfolio" className="btn">
                See my work
              </Link>
            </div>
          </div>
          <Avatar />
        </div>
      </header>

      {/* Mini stats band */}
      <section className="band stats-band">
        <div className="wrap">
          <div className="ministats rv">
            {miniStats.map((s) => (
              <div className="ministat" key={s.label}>
                <b>{s.value}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey timeline */}
      <section>
        <div className="wrap">
          <div className="sec-head rv">
            <div>
              <span className="mono">My journey</span>
              <h2>
                From computer science
                <br />
                to live client sites.
              </h2>
            </div>
            <p>
              A short path, but a real one — here&apos;s how I got from studying
              code to shipping websites people use every day.
            </p>
          </div>
          <div className="timeline rv">
            {timeline.map((t) => (
              <div className="tl-item" key={t.period}>
                <div className="tl-dot" aria-hidden="true"></div>
                <div className="tl-period mono">{t.period}</div>
                <div className="tl-body">
                  <h3>{t.title}</h3>
                  <div className="tl-org">{t.org}</div>
                  <p>{t.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="band">
        <div className="wrap">
          <div className="prose rv">
            <h2>Who I am</h2>
            <p>
              I&apos;m a Computer Science graduate who fell for the web because
              it is the one place where design and engineering meet. I have been
              building websites since 2024, starting with a non-profit and
              moving on to businesses in India and the UK. Today I work
              independently, which means the person who designs your site is the
              same person who codes it, optimises it and puts it live.
            </p>

            <h2>How I got here</h2>
            <p>
              My first real project was Care Skill Foundation — a non-profit that
              needed a proper home online for its training programmes. I built
              and maintained their website, updated content and fixed whatever
              broke. That taught me something no tutorial can: a website only
              matters when real people rely on it. Since then I have delivered
              frontend and SEO work for UK businesses like National Mile and Tax
              Return Assist, and SEO-focused builds for Claveto Technologies in
              India. Every project made me faster, calmer and more honest about
              what actually moves the needle.
            </p>

            <h2>What I do and what I don&apos;t</h2>
            <p>
              I design interfaces, write the code behind them, set up hosting and
              handle the technical SEO that helps a new site get found. I
              don&apos;t sell link-building packages, and I don&apos;t promise
              page-one rankings. Nobody honest can — I control the build quality,
              not Google&apos;s results.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section>
        <div className="wrap">
          <div className="sec-head rv">
            <div>
              <span className="mono">Toolkit</span>
              <h2>
                Skills and tools
                <br />
                I use every day.
              </h2>
            </div>
            <p>
              A focused, modern stack — chosen because it ships fast, stable
              websites, not because it looks good on a list.
            </p>
          </div>
          <div className="skills-grid rv">
            {skills.map(([area, tools]) => (
              <div className="skill-row" key={area}>
                <h3>{area}</h3>
                <p>{tools}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work + principles + credentials */}
      <section className="band">
        <div className="wrap">
          <div className="prose rv">
            <h2>Work I have delivered</h2>
            <p>Four live websites you can see on the portfolio:</p>
            <ul>
              {liveWork.map((w) => (
                <li key={w.label}>
                  <strong>{w.label}</strong> — {w.note}
                </li>
              ))}
            </ul>

            <h2>My principles</h2>
            <ol>
              {principles.map(([t, b]) => (
                <li key={t}>
                  <strong>{t}</strong> {b}
                </li>
              ))}
            </ol>

            <h2>Education & credentials</h2>
            <ul>
              <li>
                <strong>B.Tech, Computer Science</strong> — Columbia Institute of
                Engineering & Technology, Swami Vivekanand Technical University
                (2019 – 2023).
              </li>
            </ul>

            <p className="updated">Last updated: {TODAY}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="contact">
        <div className="wrap">
          <div className="card rv">
            <span className="mono">Let&apos;s talk</span>
            <h2>
              Have a project
              <br />
              in mind?
            </h2>
            <p style={{ maxWidth: 520, margin: "0 auto 8px", color: "var(--deep)" }}>
              Send me the details and I&apos;ll reply within 24 hours with
              honest next steps.
            </p>
            <div className="cta">
              <Link className="btn yellow" href="/contact">
                Start a conversation
              </Link>
              <Link className="btn" href="/portfolio">
                See the full portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      <RevealOnScroll />
    </>
  );
}
