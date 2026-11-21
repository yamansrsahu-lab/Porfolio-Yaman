import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import WhyMe from "@/components/home/WhyMe";
import WhatIBuild from "@/components/home/WhatIBuild";
import ProjectCoverflow from "@/components/home/ProjectCoverflow";
import Approach from "@/components/home/Approach";
import HomeFaq from "@/components/home/HomeFaq";
import CTA from "@/components/home/CTA";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import Schema from "@/components/ui/Schema";
import { SITE_URL, person } from "@/data/site";

export const metadata = {
  title: "Full-Stack Developer & UI/UX Designer in Raipur | Yaman Sahu",
  description:
    "Yaman Sahu builds fast, SEO-ready websites for businesses in India and the UK. See live projects, real results and get a free project review.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Full-Stack Developer & UI/UX Designer in Raipur | Yaman Sahu",
    description:
      "Yaman Sahu builds fast, SEO-ready websites for businesses in India and the UK. See live projects, real results and get a free project review.",
    url: "/",
  },
};

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Yaman Sahu",
      jobTitle: "Full-Stack Developer and UI/UX Designer",
      url: `${SITE_URL}/`,
      image: `${SITE_URL}/assets/img/yaman-sahu.jpg`,
      knowsAbout: [
        "Web development",
        "UI/UX design",
        "Technical SEO",
        "Next.js",
        "Node.js",
        "WordPress",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#business`,
      name: "Yaman Sahu: Web Development and UI/UX Design",
      url: `${SITE_URL}/`,
      telephone: person.phone,
      email: person.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Raipur",
        addressRegion: "Chhattisgarh",
        addressCountry: "IN",
      },
      areaServed: ["IN", "GB"],
      founder: { "@id": `${SITE_URL}/#person` },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <Schema data={homeSchema} />
      <Hero />
      <Marquee />
      <WhyMe />
      <WhatIBuild />
      <ProjectCoverflow />
      <Approach />
      <HomeFaq />
      <CTA />
      <RevealOnScroll />
    </>
  );
}
