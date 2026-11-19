import Link from "next/link";

// Hero background image.
// To use YOUR OWN image: save it to  public/assets/img/hero.jpg
// then change this to  "/assets/img/hero.jpg"  (a local file loads faster).
const HERO_IMG =
  "https://images.unsplash.com/photo-1607706189992-eae578626c86?w=1600&auto=format&fit=crop&q=70";

export default function Hero() {
  return (
    <header className="hero has-image" id="top">
      <div className="hero-bg" aria-hidden="true">
        <img
          src={HERO_IMG}
          alt=""
          width="1600"
          height="900"
          fetchPriority="high"
        />
      </div>
      <div className="wrap">
        <div className="tag mono">
          <span className="dot"></span> Open to new projects
        </div>
        <h1>
          Full-stack developer and UI/UX designer who builds websites that{" "}
          <span className="hl">rank and convert.</span>
        </h1>
        <p className="lead">
          I&apos;m Yaman Sahu. I design, build and launch websites for
          non-profits, finance firms and technology companies in India and the
          UK. Every site I ship is fast on a phone, easy to use and set up so
          Google can understand it.
        </p>
        <div className="cta">
          <Link href="/portfolio" className="btn solid">
            See my live projects
          </Link>
          <Link href="/contact" className="btn yellow">
            Get a free project review
          </Link>
        </div>
        <p className="trust">
          4 live client websites · India and UK clients · Reply within 24 hours
        </p>
      </div>
    </header>
  );
}
