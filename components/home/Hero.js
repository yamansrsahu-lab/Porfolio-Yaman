import Link from "next/link";
import { projects } from "@/data/projects";

// Hero background image.
// To use YOUR OWN image: save it to  public/assets/img/hero.jpg
// then change this to  "/assets/img/hero.jpg"  (a local file loads faster).
const HERO_IMG =
  "https://images.unsplash.com/photo-1607706189992-eae578626c86?w=1600&auto=format&fit=crop&q=70";

const RAIL = [
  {
    href: "/",
    label: "Home",
    icon: (
      <path d="M3 10.5 12 3l9 7.5M5 9.5V21h14V9.5M9.5 21v-6h5v6" />
    ),
  },
  {
    href: "/portfolio",
    label: "Projects",
    icon: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </>
    ),
  },
  {
    href: "/services",
    label: "Services",
    icon: (
      <>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </>
    ),
  },
  {
    href: "/about",
    label: "About",
    icon: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
      </>
    ),
  },
  {
    href: "/contact",
    label: "Contact",
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
  },
];

export default function Hero() {
  const feat = projects[0];

  return (
    <header className="hero has-image hero2" id="top">
      <div className="hero-bg" aria-hidden="true">
        <img src={HERO_IMG} alt="" width="1600" height="900" fetchPriority="high" />
      </div>

      {/* Left floating icon rail (desktop) */}
      <nav className="hero-rail" aria-label="Quick links">
        {RAIL.map((r) => (
          <Link key={r.href} href={r.href} className="rail-btn" aria-label={r.label}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              {r.icon}
            </svg>
            <span className="rail-tip">{r.label}</span>
          </Link>
        ))}
        <span className="rail-avatar" aria-hidden="true">
          YS
        </span>
      </nav>

      <div className="wrap hero-inner">
        <div className="hero-top">
          <span className="hero-eyebrow">
            WEB DESIGN <i>—</i> DEVELOPMENT <i>—</i> SEO
          </span>
          <ul className="hero-tags" aria-hidden="true">
            <li>MODERN</li>
            <li>FAST</li>
            <li>SEO-READY</li>
            <li>HONEST</li>
          </ul>
        </div>

        <h1 className="hero-title">
          Websites that
          <br />
          <span className="hl">win you clients.</span>
        </h1>

        <p className="hero-sub">
          I&apos;m Yaman Sahu. I design, build and launch fast, SEO-ready
          websites for businesses in India and the UK — sites that look
          trustworthy, work on every phone, and get found on Google.
        </p>

        <div className="hero-cta">
          <Link href="/portfolio" className="btn-dark">
            Explore my work
            <span className="circ" aria-hidden="true">
              →
            </span>
          </Link>
          <Link href="/contact" className="btn-play">
            <span className="play" aria-hidden="true">
              ▶
            </span>
            Get a free review
          </Link>
        </div>

        <div className="hero-bottom">
          {/* Featured project */}
          <Link href="/portfolio" className="hero-feat">
            <div className="feat-thumb">
              <img src={`/assets/screens/${feat.screen}.jpg`} alt={`${feat.title} website`} />
            </div>
            <div className="feat-body">
              <span className="feat-tag">Featured project</span>
              <h3>{feat.title}</h3>
              <p>A fast, trustworthy UK business site — clean layout, quick to load, easy to contact.</p>
              <span className="feat-link">View project →</span>
            </div>
            <div className="feat-foot">
              <span className="feat-count">01 / 0{projects.length}</span>
              <span className="feat-arrow" aria-hidden="true">
                →
              </span>
            </div>
          </Link>

          {/* Honest facts */}
          <div className="hero-facts">
            <div>
              <b>0{projects.length}</b>
              <span>Live websites</span>
            </div>
            <div>
              <b>IN · UK</b>
              <span>Clients served</span>
            </div>
            <div>
              <b>24h</b>
              <span>Reply time</span>
            </div>
          </div>

          {/* Dark CTA card */}
          <Link href="/contact" className="hero-vision">
            <span className="v-arrow" aria-hidden="true">
              ↗
            </span>
            <h4>Bring your vision to life</h4>
            <p>Let&apos;s build a site that gets found.</p>
          </Link>
        </div>
      </div>
    </header>
  );
}
