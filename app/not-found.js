import Link from "next/link";

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <header className="page-hero" style={{ paddingTop: 150, paddingBottom: 80 }}>
      <div className="wrap">
        <span className="mono">Error 404</span>
        <h1 style={{ marginTop: 18 }}>
          This page <span className="hl">wandered off.</span>
        </h1>
        <p className="lead">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
          Let&apos;s get you back on track.
        </p>
        <div className="cta" style={{ marginTop: 10 }}>
          <Link href="/" className="btn solid">
            Back to home
          </Link>
          <Link href="/portfolio" className="btn">
            See my work
          </Link>
          <Link href="/contact" className="btn yellow">
            Get in touch
          </Link>
        </div>
      </div>
    </header>
  );
}
