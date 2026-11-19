import Breadcrumb from "@/components/ui/Breadcrumb";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { person } from "@/data/site";

const TODAY = "2026-11-17";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How Yaman Sahu handles the details you send through the contact form on this website.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { href: "/", label: "Home" },
          { href: "/privacy", label: "Privacy policy" },
        ]}
      />

      <header className="page-hero">
        <div className="wrap">
          <span className="mono">Privacy</span>
          <h1 className="rv">Privacy policy</h1>
          <p className="lead">
            Plain English: what I collect through this site and what I do with
            it.
          </p>
        </div>
      </header>

      <section style={{ paddingTop: 40 }}>
        <div className="wrap">
          <div className="prose rv">
            <h2>What I collect</h2>
            <p>
              The only information this website collects is what you type into
              the contact form: your name, email address, an optional phone or
              WhatsApp number, the service and budget you select, and your
              message.
            </p>

            <h2>Why I collect it</h2>
            <p>
              I use these details for one purpose only: to reply to your enquiry
              and discuss your project. I do not sell, rent or share your details
              with anyone, and I do not add you to any marketing list without
              your clear permission.
            </p>

            <h2>How it is sent and stored</h2>
            <p>
              When you submit the form, your details are sent to me by email. I
              keep that email for as long as needed to handle your enquiry and my
              own records. The website itself does not store your submission in
              your browser.
            </p>

            <h2>Cookies and analytics</h2>
            <p>
              If analytics are enabled, they are used only to understand how many
              people visit which pages, in aggregate. You can block cookies in
              your browser settings at any time.
            </p>

            <h2>Your choices</h2>
            <p>
              You can ask me to show you what I hold about you, correct it, or
              delete it. Email me at{" "}
              <span className="ph">{person.email}</span> and I&apos;ll action it.
            </p>

            <h2>Contact</h2>
            <p>
              Questions about this policy? Email{" "}
              <span className="ph">{person.email}</span>.
            </p>

            <p className="updated">Last updated: {TODAY}</p>
          </div>
        </div>
      </section>

      <RevealOnScroll />
    </>
  );
}
