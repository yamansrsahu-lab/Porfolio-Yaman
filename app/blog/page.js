import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { posts } from "@/data/posts";

export const metadata = {
  title: "Web Development & SEO Blog: Practical Guides by Yaman",
  description:
    "Practical guides on website speed, UI/UX, technical SEO and choosing a developer, written from real projects. New articles every two weeks.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Web Development & SEO Blog: Practical Guides by Yaman",
    description:
      "Practical guides on website speed, UI/UX, technical SEO and choosing a developer, written from real projects. New articles every two weeks.",
    url: "/blog",
  },
};

export default function BlogPage() {
  const featured = posts.filter((p) => p.published);
  const soon = posts.filter((p) => !p.published);

  return (
    <>
      <Breadcrumb
        items={[
          { href: "/", label: "Home" },
          { href: "/blog", label: "Blog" },
        ]}
      />

      <header className="page-hero">
        <div className="wrap">
          <span className="mono">Blog</span>
          <h1 className="rv">
            Practical guides on building websites that{" "}
            <span className="hl">get found.</span>
          </h1>
          <p className="lead">
            I write about what I learn while building real websites: what made a
            page faster, which design choice brought in more enquiries, and what
            I would skip next time. Only things I have tested myself, no filler.
          </p>
        </div>
      </header>

      <section style={{ paddingTop: 50 }}>
        <div className="wrap">
          <div className="cards rv">
            {featured.map((p) => (
              <Link className="ca" href={`/blog/${p.slug}`} key={p.slug}>
                <h3>{p.title}</h3>
                <p>{p.summary}</p>
                <p className="post-meta">
                  18 Nov 2026 · 7 min read · By Yaman Sahu
                </p>
                <span className="arrow">Read article →</span>
              </Link>
            ))}

            {soon.map((p) => (
              <div className="ca soon" key={p.slug} aria-disabled="true">
                <span className="soon-tag">Coming soon</span>
                <h3>{p.title}</h3>
                <p>{p.summary}</p>
              </div>
            ))}
          </div>

          <p className="prose rv" style={{ marginTop: 40 }}>
            New article every two weeks. Want a topic covered?{" "}
            <Link href="/contact">Tell me</Link>. You can also see{" "}
            <Link href="/services">my services</Link>.
          </p>
        </div>
      </section>

      <RevealOnScroll />
    </>
  );
}
