import React from "react";
import HeroSection from "@/app/components/HeroSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vivin KV",
  description:
    "Passionate about creating robust and scalable web applications. Experienced in both front-end and back-end technologies, with a knack for problem-solving and delivering high-quality code.",
  keywords: ["vivin-kv", "full-stack-developer", "vivinkv"],
};

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-200">
      <HeroSection />
    </div>
  );
};

export default HomePage;
