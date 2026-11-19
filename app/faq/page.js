import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FaqAccordion from "@/components/ui/FaqAccordion";
import Schema from "@/components/ui/Schema";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export const metadata = {
  title: "Website Development FAQ: Cost, Timeline, SEO & Support",
  description:
    "Clear answers on website cost, timelines, SEO, WordPress, hosting and support from a full-stack developer. Read before you hire.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "Website Development FAQ: Cost, Timeline, SEO & Support",
    description:
      "Clear answers on website cost, timelines, SEO, WordPress, hosting and support from a full-stack developer. Read before you hire.",
    url: "/faq",
  },
};

const groups = [
  {
    heading: "Pricing and timeline",
    items: [
      {
        q: "How much does a website cost?",
        a: "A simple business website costs less than a custom web application with logins and payments. After a 30-minute call I send a fixed written quote with scope, price and timeline, so there are no surprise charges.",
      },
      {
        q: "How long does it take?",
        a: "A focused business site usually takes 2 to 4 weeks. Larger platforms take 4 to 10 weeks. Delays almost always come from late content, so sending text and photos early is the fastest way to launch.",
      },
      {
        q: "Do I pay in advance?",
        a: "50% to start and 50% on launch. You receive itemised invoices, and the source files and accounts are yours on final payment.",
      },
    ],
  },
  {
    heading: "SEO and ranking",
    items: [
      {
        q: "Will my site rank on page one of Google?",
        a: "I can't promise a position, and anyone who does is guessing. I build the technical and on-page foundations properly: fast pages, clean structure, schema and Search Console setup. Rankings then depend on competition and content.",
      },
      {
        q: "How long does SEO take to work?",
        a: "New sites usually need 3 to 6 months of consistent content before results become steady. You can see early signals, like indexing and impressions, within weeks in Search Console.",
      },
      {
        q: "Do you do link building?",
        a: "No. I don't buy links or use link schemes. I focus on a technically sound site and useful content that earns links naturally.",
      },
      {
        q: "What is the difference between SEO and AEO?",
        a: "SEO helps your pages rank in search results. AEO (answer engine optimisation) shapes content so AI assistants can understand and quote it, using clear answers, headings and structured data. My builds include both basics.",
      },
    ],
  },
  {
    heading: "Design and development",
    items: [
      {
        q: "WordPress or custom code?",
        a: "WordPress suits sites your team will edit often. Custom code suits complex features and top speed. I recommend the one that fits your budget and plans, and I explain why.",
      },
      {
        q: "Will my site work on phones?",
        a: "Yes. Every site is designed mobile-first and tested on real devices and screen sizes before launch.",
      },
      {
        q: "Can I update the site myself?",
        a: "Yes. I use a CMS or an admin panel, and I show you how to change text, images and pages safely.",
      },
      {
        q: "What do you need from me?",
        a: "Your logo, brand colours, key text and photos. If you don't have text, I help you structure it.",
      },
    ],
  },
  {
    heading: "Support and ownership",
    items: [
      {
        q: "Do you offer support after launch?",
        a: "Yes. Every project includes 30 days of free fixes, and monthly care plans cover updates, backups, security checks and small changes.",
      },
      {
        q: "Who owns the website?",
        a: "You do. Code, content, domain and hosting accounts are handed over to you at launch.",
      },
      {
        q: "Do you work with clients outside Raipur?",
        a: "Yes. I work with clients across India and the UK through video calls and shared preview links, in IST and UK hours.",
      },
    ],
  },
];

// One FAQPage covering every visible question, built from the same data.
const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: groups
    .flatMap((g) => g.items)
    .map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
};

export default function FaqPage() {
  return (
    <>
      <Schema data={schema} />
      <Breadcrumb
        items={[
          { href: "/", label: "Home" },
          { href: "/faq", label: "FAQ" },
        ]}
      />

      <header className="page-hero">
        <div className="wrap">
          <span className="mono">FAQ</span>
          <h1 className="rv">
            Frequently asked questions about{" "}
            <span className="hl">website development.</span>
          </h1>
          <p className="lead">
            Short, direct answers before you hire. For services in detail, see{" "}
            <Link href="/services">what I offer</Link>.
          </p>
        </div>
      </header>

      <section style={{ paddingTop: 50 }}>
        <div className="wrap">
          {groups.map((g) => (
            <div className="prose rv" key={g.heading} style={{ maxWidth: 820 }}>
              <h2>{g.heading}</h2>
              <FaqAccordion items={g.items} schema={false} />
            </div>
          ))}

          <p className="prose rv" style={{ marginTop: 40 }}>
            Still have a question? <Link href="/contact">Ask me directly</Link>,
            or see <Link href="/services">my services</Link>.
          </p>
        </div>
      </section>

      <RevealOnScroll />
    </>
  );
}
