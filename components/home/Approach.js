const steps = [
  {
    step: "1",
    title: "Talk",
    description: "We agree goals, audience and scope.",
  },
  {
    step: "2",
    title: "Design",
    description: "You review wireframes, then real screens.",
  },
  {
    step: "3",
    title: "Build",
    description:
      "I code it, test it on real devices and send you a preview link.",
  },
  {
    step: "4",
    title: "Launch and grow",
    description:
      "I go live, set up Search Console and analytics, and fix what the data shows.",
  },
];

export default function Approach() {
  return (
    <section className="alt" id="process" style={{ background: "var(--soft)" }}>
      <div className="wrap">
        <div className="sec-head rv">
          <div>
            <span className="mono">How I work</span>
            <h2>
              Four steps,
              <br />
              no surprises.
            </h2>
          </div>
          <p style={{ color: "var(--mute)" }}>
            You&apos;ll always know where things stand and what comes next.
          </p>
        </div>
        <div className="steps rv">
          {steps.map((s) => (
            <div className="step" key={s.step}>
              <b>{s.step}</b>
              <h4>{s.title}</h4>
              <p>{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
