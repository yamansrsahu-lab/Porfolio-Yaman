import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FaqAccordion from "@/components/ui/FaqAccordion";
import Schema from "@/components/ui/Schema";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import ContactForm from "@/components/contact/ContactForm";
import { SITE_URL, person } from "@/data/site";

export const metadata = {
  title: "Hire a Web Developer in Raipur | Contact Yaman Sahu",
  description:
    "Tell me about your website project. Free review, fixed quote and a reply within 24 hours. Call, email, WhatsApp or use the form.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Hire a Web Developer in Raipur | Contact Yaman Sahu",
    description:
      "Tell me about your website project. Free review, fixed quote and a reply within 24 hours. Call, email, WhatsApp or use the form.",
    url: "/contact",
  },
};

const afterSteps = [
  ["Within 24 hours:", "I reply with questions or a time for a 30-minute call."],
  ["After the call:", "you get a written scope, price and timeline."],
  ["If you say yes:", "I send a simple agreement and a project start date."],
  ["If you say no:", "no pressure, and I'm happy to suggest other options."],
];

const faqs = [
  {
    q: "Is the first call really free?",
    a: "Yes. It is a 30-minute review of your goals and your current site.",
  },
  {
    q: "What should I prepare?",
    a: "Your goals, any examples of sites you like, your logo and a rough idea of budget and deadline.",
  },
  {
    q: "Do you sign an NDA?",
    a: "Yes, on request.",
  },
  {
    q: "Which time zones do you work in?",
    a: "India (IST) and UK hours both work for calls.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": `${SITE_URL}/contact#contactpage`,
      url: `${SITE_URL}/contact`,
      name: "Contact Yaman Sahu",
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#business`,
      name: "Yaman Sahu: Web Development and UI/UX Design",
      url: `${SITE_URL}/`,
      telephone: person.phone,
      email: person.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Raipur",
        addressRegion: "Chhattisgarh",
        addressCountry: "IN",
      },
      areaServed: ["IN", "GB"],
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <Schema data={schema} />
      <Breadcrumb
        items={[
          { href: "/", label: "Home" },
          { href: "/contact", label: "Contact" },
        ]}
      />

      <header className="page-hero">
        <div className="wrap">
          <span className="mono">Contact</span>
          <h1 className="rv">
            Let&apos;s talk about your{" "}
            <span className="hl">website project.</span>
          </h1>
          <p className="lead">
            Tell me what you want to build, and I&apos;ll reply within 24 hours
            with honest next steps and, where possible, a fixed quote. The first
            conversation is free and has no obligation.
          </p>
        </div>
      </header>

      <section style={{ paddingTop: 50 }}>
        <div className="wrap">
          <div className="split">
            <div>
              <ContactForm />
            </div>

            <div className="prose" style={{ maxWidth: "none" }}>
              <h2 style={{ marginTop: 0 }}>Other ways to reach me</h2>
              <div className="tbl-wrap">
                <table className="tbl">
                  <tbody>
                    <tr>
                      <td>Email</td>
                      <td>
                        <a href={`mailto:${person.email}`}>{person.email}</a>
                      </td>
                    </tr>
                    <tr>
                      <td>Phone / WhatsApp</td>
                      <td>
                        <a href={`tel:+${person.phone.replace(/[^0-9]/g, "")}`}>
                          {person.phone}
                        </a>{" "}
                        · {person.hours}
                      </td>
                    </tr>
                    <tr>
                      <td>Location</td>
                      <td>Raipur, Chhattisgarh, India · serving clients in India and the UK</td>
                    </tr>
                    <tr>
                      <td>Video call</td>
                      <td>Google Meet or Zoom — link shared by email after we book a time</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p style={{ fontSize: 14 }}>
                These details are written as real text on the page and match my
                Google Business Profile and schema.
              </p>
            </div>
          </div>

          <div className="prose rv" style={{ marginTop: 20 }}>
            <h2>What happens after you send the form</h2>
            <ol>
              {afterSteps.map(([t, b]) => (
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
              <span className="mono">Questions before you write</span>
              <h2>
                A few things
                <br />
                to know.
              </h2>
            </div>
          </div>
          <div className="rv">
            <FaqAccordion items={faqs} schema={false} />
          </div>
        </div>
      </section>

      <RevealOnScroll />
    </>
  );
}
