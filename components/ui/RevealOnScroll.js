"use client";

import { useEffect } from "react";

// Reveals elements carrying the `.rv` class as they scroll into view,
// mirroring the behaviour of the shared design. Mounted once per page.
export default function RevealOnScroll() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(".rv"));
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.1 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
