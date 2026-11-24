import { SITE_URL } from "@/data/site";

// Generates /sitemap.xml at build time.
export default function sitemap() {
  const now = new Date();
  const routes = [
    { path: "/", priority: 1.0 },
    { path: "/about", priority: 0.8 },
    { path: "/services", priority: 0.9 },
    { path: "/ai-calling", priority: 0.8 },
    { path: "/portfolio", priority: 0.8 },
    { path: "/blog", priority: 0.7 },
    { path: "/blog/how-much-does-a-business-website-cost-in-india", priority: 0.6 },
    { path: "/faq", priority: 0.7 },
    { path: "/contact", priority: 0.7 },
    { path: "/privacy", priority: 0.3 },
  ];
  return routes.map((r) => ({
    url: `${SITE_URL}${r.path === "/" ? "" : r.path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: r.priority,
  }));
}
