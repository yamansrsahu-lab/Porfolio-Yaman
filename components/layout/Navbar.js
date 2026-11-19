"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/data/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className={`site-nav${scrolled ? " scrolled" : ""}`}>
      <div className="wrap">
        <Link href="/" className="logo">
          <span className="mark" aria-hidden="true">
            YS
          </span>
          Yaman Sahu
        </Link>

        <div className="links">
          {nav
            .filter((l) => l.href !== "/")
            .map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={isActive(l.href) ? "active" : ""}
                aria-current={isActive(l.href) ? "page" : undefined}
              >
                {l.label}
              </Link>
            ))}
        </div>

        <Link href="/contact" className="btn solid nav-cta">
          Get a free review
        </Link>

        <button
          type="button"
          className="menu-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={open ? "bars open" : "bars"} aria-hidden="true">
            <i></i>
            <i></i>
            <i></i>
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={open ? "mobile-menu open" : "mobile-menu"}
        hidden={!open}
      >
        <div className="wrap">
          {nav.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={isActive(l.href) ? "active" : ""}
              aria-current={isActive(l.href) ? "page" : undefined}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="btn solid" style={{ marginTop: 8 }}>
            Get a free review
          </Link>
        </div>
      </div>
    </nav>
  );
}
