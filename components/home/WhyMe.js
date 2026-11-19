const points = [
  {
    title: "One person, start to finish.",
    body: "Design, code, content structure and launch, with one point of contact.",
  },
  {
    title: "Built for search from day one.",
    body: "Clean headings, fast loading pages, structured data and mobile-first layouts, not an SEO patch added later.",
  },
  {
    title: "Proof you can see.",
    body: "Every project below is shown with real screenshots from the live website.",
  },
  {
    title: "Plain talk.",
    body: "You get clear scope, a fixed timeline and no jargon.",
  },
];

export default function WhyMe() {
  return (
    <section id="why">
      <div className="wrap">
        <div className="sec-head rv">
          <div>
            <span className="mono">Why work with me</span>
            <h2>
              Design, code and SEO,
              <br />
              from one person.
            </h2>
          </div>
          <p>
            Most website projects go wrong in the gaps: a designer hands files
            to a developer, who hands a site to someone else for SEO. I do all
            three, so what you approve is what goes live.
          </p>
        </div>
        <div className="cards rv">
          {points.map((p) => (
            <div className="ca" key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
