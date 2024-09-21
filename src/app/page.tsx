import React from "react";
import HeroSection from "@/app/components/HeroSection";
import { Metadata } from "next";
import opengraph from "@/app/opengraph-image.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.URL}`),
  title:
    "VivinKV - Web Developer & Tech Enthusiast Crafting Innovative Solutions",
  description:
    "Passionate about creating scalable web applications, skilled in both front-end and back-end technologies. Adept at problem-solving, writing high-quality code, and delivering innovative solutions that meet modern digital needs.",
  keywords: ["vivin-kv", "vivin", "vivin_kv", "vivinkv","vivin kv"],
  openGraph: {
    title: "Vivin KV - Passionate Web Developer",
    description:
      "Passionate about creating scalable web applications.Skilled in front-end and back-end technologies,with a knack for problem-solving and high-quality code.",
    type: "website",
    siteName: "VivinKV",
    locale: "en_US",
    url: `${process.env.URL}`,
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
