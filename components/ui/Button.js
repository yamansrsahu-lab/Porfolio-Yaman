import Link from "next/link";
import Icon from "./Icon";

// Shared button. Variants: "solid" (ink), "outline", "ghost".
// Renders as a Next.js <Link> when `href` is provided, else a <button>.
const base =
  "group inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition-all duration-300 ease-premium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/60 focus-visible:ring-offset-2 focus-visible:ring-offset-paper disabled:opacity-50";

const sizes = {
  md: "px-6 py-3",
  lg: "px-8 py-4 text-[0.95rem]",
};

const variants = {
  solid: "bg-ink text-paper hover:bg-ink-soft shadow-soft",
  outline: "border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-paper",
  ghost: "text-ink hover:bg-ink/5",
};

export default function Button({
  href,
  children,
  variant = "solid",
  size = "md",
  withArrow = false,
  className = "",
  ...props
}) {
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  const inner = (
    <>
      <span>{children}</span>
      {withArrow && (
        <Icon
          name="arrow"
          className="h-4 w-4 transition-transform duration-300 ease-premium group-hover:translate-x-1"
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {inner}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {inner}
    </button>
  );
}
