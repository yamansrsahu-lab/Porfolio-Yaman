import Reveal from "./Reveal";

// Consistent section header: small eyebrow + large display title + optional lead.
export default function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  className = "",
}) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start";
  return (
    <div className={`flex max-w-2xl flex-col gap-5 ${alignment} ${className}`}>
      {eyebrow && (
        <Reveal>
          <span className="eyebrow">
            <span className="h-px w-6 bg-ink-muted" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="display text-4xl sm:text-5xl lg:text-[3.5rem] text-balance">
          {title}
        </h2>
      </Reveal>
      {lead && (
        <Reveal delay={0.1}>
          <p className="max-w-xl text-lg leading-relaxed text-ink-soft">{lead}</p>
        </Reveal>
      )}
    </div>
  );
}
