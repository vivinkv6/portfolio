import {
  Heading1Boundary,
  Heading2Boundary,
  ParagraphBoundary,
  SectionBoundary,
  SpanBoundary,
} from "@/lib/animBoundary";
import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { mainFont } from "@/app/font";
import Image from "next/image";
import { homeContent, skills } from "@/lib/data";
import dynamic from "next/dynamic";

const WordRotate = dynamic(() => import("./ui/word-rotate"), { ssr: false });

function HeroSection() {
  const iconSize = 50; // Size of the skill icons

  return (
    <main className="container relative mx-auto px-4 pt-24 flex flex-col items-center">
      <SectionBoundary className="text-center py-20 relative z-10">
        <Heading1Boundary
          className={`text-6xl max-sm:text-4xl text-white font-bold mb-6 ${mainFont.className}`}
        >
          {homeContent?.title?.primary}
          <span className="ml-2 animate-wave">👋</span>
        </Heading1Boundary>
        <Heading2Boundary
          className={`text-4xl max-sm:text-2xl text-blue-400 mb-8 ${mainFont.className} flex flex-wrap justify-center items-center gap-x-2 font-semibold`}
        >
          {homeContent?.title?.secondary?.first}{" "}
          <WordRotate
            className="text-4xl max-sm:text-2xl font-semibold text-blue-400"
            words={homeContent?.title?.secondary?.second}
          />
          {homeContent?.title?.secondary?.third}
          {/* <span className="binary-code ml-2"></span> */}
        </Heading2Boundary>
        <ParagraphBoundary
          className={`text-2xl max-md:text-sm max-w-2xl mx-auto mb-6 text-gray-400 ${mainFont.className} font-light`}
        >
          {homeContent?.description}
        </ParagraphBoundary>
        <div className="flex justify-center space-x-6">
          <SpanBoundary
            whileHover={{ scale: 1.1 }}
            className="text-3xl hover:text-blue-400 transition-colors"
          >
            <Link
              href="https://github.com/vivinkv6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                style={{ color: "white" }}
                className="text-4xl max-md:text-xl"
              />
            </Link>
          </SpanBoundary>
          <SpanBoundary
            whileHover={{ scale: 1.1 }}
            className="text-3xl hover:text-blue-400 transition-colors"
          >
            <Link
              href="https://in.linkedin.com/in/vivin-k-v-8816ba291"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                style={{ color: "white" }}
                className="text-4xl max-md:text-xl"
              />
            </Link>
          </SpanBoundary>
          <SpanBoundary
            whileHover={{ scale: 1.1 }}
            className="text-3xl hover:text-blue-400 transition-colors"
          >
            <Link
              href="mailto:vivinkv851@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope
                style={{ color: "white" }}
                className="text-4xl max-md:text-xl"
              />
            </Link>
          </SpanBoundary>
        </div>
        <button className="mt-5 bg-blue-500 hover:bg-blue-600 text-slate-50 px-3 py-2 rounded font-semibold">
          <Link
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            passHref
          >
            My Resume
          </Link>
        </button>
      </SectionBoundary>
    </main>
  );
}

export default HeroSection;
