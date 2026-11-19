import "./globals.css";
import {
  Bricolage_Grotesque,
  Plus_Jakarta_Sans,
  IBM_Plex_Mono,
} from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Schema from "@/components/ui/Schema";
import { SITE_URL, person } from "@/data/site";

// Display / headline typeface
const head = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-head",
  display: "swap",
});

// Body / UI typeface
const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Monospace labels / eyebrows
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Full-Stack Developer & UI/UX Designer in Raipur | Yaman Sahu",
    template: "%s | Yaman Sahu",
  },
  description:
    "Yaman Sahu builds fast, SEO-ready websites for businesses in India and the UK. See live projects, real results and get a free project review.",
  authors: [{ name: "Yaman Sahu" }],
  openGraph: {
    type: "website",
    siteName: "Yaman Sahu",
    images: ["/assets/img/og-image.jpg"],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#7fd99a",
  width: "device-width",
  initialScale: 1,
};

// Site-wide WebSite structured data (all pages).
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: "Yaman Sahu",
  description:
    "Full-stack developer and UI/UX designer building fast, SEO-ready websites.",
  publisher: { "@id": `${SITE_URL}/#person` },
  inLanguage: "en-IN",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en-IN"
      className={`${head.variable} ${sans.variable} ${mono.variable}`}
    >
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Schema data={websiteSchema} />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
