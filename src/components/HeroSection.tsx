import React, { Suspense } from "react";
import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

import { 
  Heading1Boundary, 
  Heading2Boundary, 
  SpanBoundary 
} from "@/lib/animBoundary";
import { homeContent } from "@/lib/data";
import WordRotate from "./ui/word-rotate";
import dynamic from "next/dynamic";
const Sparkles = dynamic(
  () => import("./core/sparkles").then((mod) => mod.Sparkles),
  { ssr: false }
);

const SOCIAL_LINKS = [
  { 
    href: "https://github.com/vivinkv6", 
    icon: FaGithub 
  },
  { 
    href: "https://in.linkedin.com/in/vivin-k-v-8816ba291", 
    icon: FaLinkedin 
  },
  { 
    href: "mailto:vivinkv851@gmail.com", 
    icon: FaEnvelope 
  }
];

const HeroSection: React.FC = React.memo(() => {
  return (
    <main className="h-screen w-full overflow-hidden bg-black text-white">
    <section
      className="container mx-auto relative h-[100dvh] mt-4 border border-white/10 w-full overflow-hidden rounded-2xl min-h-[600px]"
      aria-labelledby="journey-title"
    >
      <article className="grid gap-4 text-center relative z-10 pt-10 mt-20">
        {/* Journey Badge */}
        <span
          className="inline-block xl:text-base text-sm border p-1 px-3 w-fit mx-auto rounded-full border-[#3273ff] bg-[#0f1c35]"
          role="note"
          aria-label="Explore My Journey"
        >
          Explore My Journey 🚀
        </span>
  
        {/* Main Title */}
        <h1
          id="journey-title"
          style={{
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          className="2xl:text-6xl xl:text-5xl text-5xl max-sm:text-4xl font-semibold bg-gradient-to-b from-[#edeffd] to-[#7b9cda] bg-clip-text text-transparent leading-none tracking-tighter"
        >
          {homeContent?.title?.primary}
        </h1>
  
        {/* Secondary Title */}
        <h2
          style={{
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          className="2xl:text-4xl xl:text-3xl text-2xl max-sm:text-xl font-semibold bg-gradient-to-b from-[#edeffd] to-[#7b9cda] bg-clip-text text-transparent leading-[100%] tracking-tighter flex flex-wrap justify-center items-center gap-x-2"
          aria-label="Dynamic Rotating Words"
        >
          {homeContent?.title?.secondary?.first}{" "}
          <WordRotate
            className="2xl:text-4xl xl:text-3xl text-2xl max-sm:text-xl font-semibold bg-gradient-to-b from-[#edeffd] to-[#7b9cda] bg-clip-text text-transparent leading-[100%] tracking-tighter flex flex-wrap justify-center items-center gap-x-2"
            words={homeContent?.title?.secondary?.second}
          />
          {homeContent?.title?.secondary?.third}
        </h2>
  
        {/* Description */}
        <p className="text-center max-w-2xl max-sm:text-sm mx-auto" aria-describedby="journey-description">
          {homeContent?.description}
        </p>
  
        {/* Social Links */}
        <div className="flex justify-center space-x-6 z-10" role="navigation" aria-label="Social Media Links">
          {SOCIAL_LINKS.map(({ href, icon: Icon }) => (
            <SpanBoundary
              key={href}
              whileHover={{ scale: 1.1 }}
              className="text-3xl hover:text-blue-400 transition-colors"
            >
              <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${href}`}
              >
                <Icon
                  color="white"
                  className="text-4xl max-md:text-xl"
                  aria-hidden="true"
                />
              </Link>
            </SpanBoundary>
          ))}
        </div>
  
        {/* Resume Button */}
        <button
          className="border border-blue-400 w-fit p-2 px-4 rounded-md bg-blue-900/40 hover:bg-blue-900/60 backdrop-blur-2xl mx-auto text-white"
          aria-label="Download My Resume"
        >
          <Link
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            passHref
          >
            My Resume
          </Link>
        </button>
      </article>
  
      {/* Decorative Sparkles */}
      <div
        className="relative bottom-0 z-[1] h-[400px] max-sm:h-[600px] w-screen [mask-image:radial-gradient(100%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#3273ff,transparent_90%)] before:opacity-40 after:absolute"
        aria-hidden="true"
      >
        <Suspense fallback="Loading...">
          <Sparkles
            density={1800}
            speed={1.2}
            color="#48b6ff"
            direction="top"
            className="absolute max-sm:hidden inset-x-0 bottom-0 h-full w-full"
          />
        </Suspense>
      </div>
    </section>
  </main>
  
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;