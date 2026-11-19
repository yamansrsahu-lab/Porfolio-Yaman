import { featuredProjects } from "@/data/projects";
import ProjectShot from "@/components/ui/ProjectShot";

export default function FeaturedProjects() {
  return (
    <section id="work">
      <div className="wrap">
        <div className="sec-head rv">
          <div>
            <span className="mono">Selected work</span>
            <h2>
              Four sites I built,
              <br />
              all live right now.
            </h2>
          </div>
          <p>
            Four live websites, each solving a different problem. Open them and
            judge the work yourself.
          </p>
        </div>

        {featuredProjects.map((p) => (
          <article className="proj rv" key={p.number}>
            <ProjectShot
              screen={p.screen}
              name={p.title}
              domain={p.domain}
              theme={p.theme}
            />
            <div>
              <span className="num">{p.label}</span>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="chips">
                {p.chips.map((c) => (
                  <span key={c}>{c}</span>
                ))}
              </div>
              <a className="visit" href="/portfolio">
                See the project <span>→</span>
              </a>
            </div>
          </article>
        ))}

        <p className="rv" style={{ marginTop: 14 }}>
          <a
            href="/portfolio"
            style={{
              color: "var(--gtext)",
              fontWeight: 600,
              textDecoration: "underline",
              textUnderlineOffset: 3,
            }}
          >
            View the full portfolio
          </a>{" "}
          ·{" "}
          <a
            href="/blog"
            style={{
              color: "var(--gtext)",
              fontWeight: 600,
              textDecoration: "underline",
              textUnderlineOffset: 3,
            }}
          >
            Read the blog
          </a>
        </p>
      </div>
    </section>
  );
}
