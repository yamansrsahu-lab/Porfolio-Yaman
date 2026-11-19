/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Premium warm-white design system.
        paper: "#F7F6F2", // page background (warm off-white)
        panel: "#FFFFFF", // raised surfaces / cards
        ink: {
          DEFAULT: "#15130F", // primary text (near-black, warm)
          soft: "#45413A", // secondary text
          muted: "#8A857B", // tertiary / captions
        },
        line: "#E7E4DC", // hairline borders
        accent: {
          DEFAULT: "#C2410C", // warm terracotta accent
          soft: "#F2E7DF",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(21,19,15,0.04), 0 12px 40px -12px rgba(21,19,15,0.12)",
        lift: "0 24px 60px -20px rgba(21,19,15,0.22)",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        "spin-slow": "spinSlow 18s linear infinite",
      },
    },
  },
  plugins: [],
};
