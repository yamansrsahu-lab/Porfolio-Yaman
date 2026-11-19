"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Icon from "./Icon";

// A magnetic button: the element (and its label) drifts toward the cursor
// while hovered, then springs back on leave. Great for a single hero CTA.
export default function MagneticButton({
  href = "#",
  children,
  className = "",
  strength = 0.4,
}) {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Springy follow so motion feels physical, not linear.
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  // Label drifts a touch further than the button for depth.
  const labelX = useTransform(springX, (v) => v * 0.35);
  const labelY = useTransform(springY, (v) => v * 0.35);

  function handleMove(e) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      className="inline-block"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <Link
        ref={ref}
        href={href}
        className={`group relative inline-flex items-center gap-3 rounded-full bg-ink px-9 py-5 text-base font-medium text-paper shadow-lift transition-colors duration-300 ease-premium hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/60 focus-visible:ring-offset-2 focus-visible:ring-offset-paper ${className}`}
      >
        <motion.span style={{ x: labelX, y: labelY }} className="inline-flex items-center gap-3">
          {children}
          <Icon
            name="arrowUpRight"
            className="h-5 w-5 transition-transform duration-300 ease-premium group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </motion.span>
      </Link>
    </motion.div>
  );
}
