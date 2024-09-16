import React from "react";
import HeroSection from "@/app/components/HeroSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vivin KV",
  description:
    "Passionate about creating scalable web applications.Skilled in front-end and back-end technologies,with a knack for problem-solving and high-quality code.",
  keywords: ["vivin-kv", "full-stack-developer", "vivin","vivin_kv","vivinkv"],
  openGraph: {
    title: "VivinKV",
    description:
      "Passionate about creating scalable web applications.Skilled in front-end and back-end technologies,with a knack for problem-solving and high-quality code.",
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
