import React from "react";
import HeroSection from "@/components/HeroSection";
import { Metadata } from "next";
import opengraph from "@/app/opengraph-image.jpg";
import DesktopModel from "@/components/Desktop";
import OrbitingCircles from "@/components/ui/orbiting-circles";
import { skills } from "@/lib/data";
import Image from "next/image";
import dynamic from "next/dynamic";
import HomeTopSection from "@/components/HomeTop";
import Home from "@/components/Home";
const FlickeringGrid = dynamic(
  () => import("@/components/ui/flickering-grid"),
  { ssr: false }
);

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.URL}`),
  title: "Vivin KV Next js Developer at Spiderworks Technologies",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${process.env.URL}`,
  },
  description:
    "Passionate about creating scalable web applications, skilled in both front-end and back-end technologies.",
  keywords: [
    "Vivin KV",
    "vivinkv",
    "vivin-kv",
    "vivin kv portfolio",
    "Vivin KV web developer",
    "Vivin KV tech enthusiast",
    "Vivin KV Next.js developer",
    "web developer Vivin KV",
    "Next.js developer",
    "MERN stack developer",
    "front-end developer Vivin KV",
    "React developer Vivin KV",
    "Vivin KV blog",
    "Vivin KV projects",
    "Vivin KV official website",
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
        url: `${process.env.URL}/opengraph-image.jpg`,
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
        url: `${process.env.URL}/opengraph-image.jpg`,
        username: "vivinkv",
        alt: "vivin kv",
      },
    ],
    site: "VIVIN KV",
  },
};

function getRandomOrbitConfig() {
  const isMobile: boolean =
    typeof window !== "undefined" && window.innerWidth < 640;
  return {
    radius:
      Math.floor(isMobile ? Math.random() * 200 : Math.random() * 800) + 200, // Random radius between 200 and 1000
    duration: Math.floor(Math.random() * 50) + 20, // Random duration between 20s and 70s
    delay: Math.floor(Math.random() * 30), // Random delay between 0s and 30s
    reverse: Math.random() > 0.5, // Randomly choose direction
  };
}

const HomePage = () => {
  return (
    // <div className="min-h-screen bg-gray-950 text-gray-200">
    //   <HeroSection />
    // </div>
    <React.Fragment>
      <Home/>

    </React.Fragment>
  );
};

export default HomePage;
