import FaqAccordion from "@/components/ui/FaqAccordion";
import { homeFaqs } from "@/data/content";

export default function HomeFaq() {
  return (
    <section id="faq">
      <div className="wrap">
        <div className="sec-head rv">
          <div>
            <span className="mono">FAQ</span>
            <h2>
              Frequently asked
              <br />
              questions.
            </h2>
          </div>
          <p>
            Short, honest answers. If yours isn&apos;t here,{" "}
            <a href="/contact" style={{ color: "var(--gtext)" }}>
              ask me directly
            </a>
            .
          </p>
        </div>
        <div className="rv">
          <FaqAccordion items={homeFaqs} schema={false} />
        </div>
      </div>
    </section>
  );
}
