import Schema from "@/components/ui/Schema";
import { SITE_URL } from "@/data/site";

// Visible breadcrumb + BreadcrumbList structured data for inner pages.
// `items` = [{ href, label }], last item is the current page.
export default function Breadcrumb({ items }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.label,
      item: `${SITE_URL}${it.href === "/" ? "" : it.href}`,
    })),
  };

  return (
    <nav className="wrap crumbs" aria-label="Breadcrumb">
      <ol>
        {items.map((it, i) => (
          <li key={it.href}>
            {i < items.length - 1 ? (
              <a href={it.href}>{it.label}</a>
            ) : (
              <span aria-current="page">{it.label}</span>
            )}
          </li>
        ))}
      </ol>
      <Schema data={data} />
    </nav>
  );
}
