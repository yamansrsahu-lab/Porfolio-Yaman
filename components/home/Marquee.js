import { skills } from "@/data/site";

export default function Marquee() {
  // Duplicate the list so the -50% translate loops seamlessly.
  const row = [...skills, ...skills];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="track">
        {row.map((s, i) => (
          <span key={i}>{s}</span>
        ))}
      </div>
    </div>
  );
}
