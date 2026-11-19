import Schema from "@/components/ui/Schema";

// Accessible FAQ accordion (native details/summary) + optional FAQPage schema.
// `items` = [{ q, a }]. Answers stay as real text in the HTML.
export default function FaqAccordion({ items, schema = true }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };

  return (
    <div className="faq">
      {items.map((it) => (
        <details key={it.q}>
          <summary>{it.q}</summary>
          <p>{it.a}</p>
        </details>
      ))}
      {schema && <Schema data={data} />}
    </div>
  );
}
