import React from "react";
import HeroSection from "@/app/components/HeroSection";
import { Metadata } from "next";
import opengraph from "@/app/opengraph-image.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.URL}`),
  title: "Vivin KV Next js Developer at Spiderworks Technologies",
  robots: {
    index: true,
  },
  alternates: {
    canonical: {
      title: "VivinKV",
      url: `${process.env.URL}`,
      username: "vivinkv",
    },
  },
  description:
    "Passionate about creating scalable web applications, skilled in both front-end and back-end technologies.",
  keywords: [
    "vivin-kv",
    "vivin",
    "vivin_kv",
    "vivinkv",
    "vivin kv",
    "Vivin KV",
    "Vivin-KV",
    "VivinKV",
    "Web Developer",
    "Tech Enthusiast",
    "next js developer",
    "i'm vivin kv",
  ],
  openGraph: {
    title: "Vivin KV Nextjs Developer at Spiderworks Technologies",
    description:
      "Passionate about creating scalable web applications.Skilled in front-end and back-end technologies,with a knack for problem-solving and high-quality code.",
    type: "website",
    siteName: "VIVIN KV",
    locale: "en_US",
    url: `${process.env.URL}`,
    images: [
      {
        url: `${process.env.URL}/opengraph-image.png`,
        username: "vivinkv",
        alt: "vivin kv",
      },
    ],
  },
  twitter: {
    title: "vivinkv next js developer at spiderworks technologies",
    card: "summary",
    creator: "vivinkv",
    description:
      "Passionate about creating scalable web applications.Skilled in front-end and back-end technologies,with a knack for problem-solving and high-quality code.",
    images: [
      {
        url: `${process.env.URL}/opengraph-image.png`,
        username: "vivinkv",
        alt: "vivin kv",
      },
    ],
    site: "VIVIN KV",
  },
};

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-200">
      <HeroSection />
    </div>
  );
};

export default HomePage;
