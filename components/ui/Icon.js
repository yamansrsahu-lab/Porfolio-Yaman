// Lightweight inline SVG icon set (no external dependency).
// Stroke-based, inherits currentColor. Add more as needed.

const paths = {
  palette: (
    <>
      <circle cx="13.5" cy="6.5" r="1.2" />
      <circle cx="17.5" cy="10.5" r="1.2" />
      <circle cx="8.5" cy="7.5" r="1.2" />
      <circle cx="6.5" cy="12.5" r="1.2" />
      <path d="M12 22a10 10 0 1 1 10-10c0 2.5-2 3-3.5 3H16a2 2 0 0 0-1.5 3.3c.5.6.3 1.7-.5 2.2a3 3 0 0 1-2 .5Z" />
    </>
  ),
  layout: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 21V9" />
    </>
  ),
  code: <path d="m8 18-6-6 6-6M16 6l6 6-6 6M13.5 4l-3 16" />,
  spark: (
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M12 9a3 3 0 0 0-3 3 3 3 0 0 0-3-3 3 3 0 0 0 3-3 3 3 0 0 0 3 3Zm0 0a3 3 0 0 1 3 3 3 3 0 0 1 3-3 3 3 0 0 1-3-3 3 3 0 0 1-3 3Z" />
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  arrowUpRight: <path d="M7 17 17 7M8 7h9v9" />,
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.2" />
    </>
  ),
  gauge: (
    <>
      <path d="M12 21a9 9 0 1 1 9-9" />
      <path d="M12 12 16 9" />
    </>
  ),
  plus: <path d="M12 5v14M5 12h14" />,
};

export default function Icon({ name, className = "", strokeWidth = 1.5 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name] ?? null}
    </svg>
  );
}
