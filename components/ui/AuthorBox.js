import Link from "next/link";

// EEAT author box — shown at the foot of articles and the About page.
export default function AuthorBox() {
  return (
    <div className="authorbox">
      <span className="av" aria-hidden="true">
        YS
      </span>
      <div>
        <b>Yaman Sahu</b>
        <span>
          Full-stack developer and UI/UX designer ·{" "}
          <Link href="/about" style={{ color: "var(--gtext)" }}>
            About the author
          </Link>
        </span>
      </div>
    </div>
  );
}
