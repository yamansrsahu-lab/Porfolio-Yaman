import Link from "next/link";
import { nav, person } from "@/data/site";

const exploreLinks = nav.slice(0, 4); // Home, About, Services, Portfolio
const resourceLinks = [
  ...nav.slice(4), // Blog, FAQ, Contact
  { href: "/privacy", label: "Privacy policy" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const tel = "+" + person.phone.replace(/[^0-9]/g, "");

  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        {/* Brand + contact */}
        <div className="footer-brand">
          <Link href="/" className="logo">
            <span className="mark" aria-hidden="true">
              YS
            </span>
            Yaman Sahu
          </Link>
          <p className="tagline">
            Full-stack developer and UI/UX designer building fast, SEO-ready
            websites for clients in India and the UK.
          </p>

          <div className="footer-contact">
            <div className="row">
              <span className="k">Email</span>
              <a href={`mailto:${person.email}`}>{person.email}</a>
            </div>
            <div className="row">
              <span className="k">Phone</span>
              <a href={`tel:${tel}`}>{person.phone}</a>
            </div>
            <div className="row">
              <span className="k">Based in</span>
              <span>{person.location}</span>
            </div>
          </div>

          <Link href="/contact" className="btn solid footer-cta">
            Get a free review
          </Link>
        </div>

        {/* Explore */}
        <div className="footer-col">
          <h4>Explore</h4>
          <nav>
            {exploreLinks.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Resources */}
        <div className="footer-col">
          <h4>Resources</h4>
          <nav>
            {resourceLinks.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <span>© {year} Yaman Sahu</span>
        <span>Designed and built by me, in India</span>
      </div>
    </footer>
  );
}
