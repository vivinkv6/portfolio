import {
  Heading1Boundary,
  Heading2Boundary,
  ParagraphBoundary,
  SectionBoundary,
  SpanBoundary,
} from "@/lib/animBoundary";
import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import Head from "next/head";

function HeroSection() {
  return (
    <>
      <main className="container mx-auto px-4 pt-24">
        <SectionBoundary
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center py-20"
        >
          <Heading1Boundary className="text-5xl max-sm:text-4xl font-bold mb-6">
            Hello I'm Vivin KV
          </Heading1Boundary>
          <Heading2Boundary className="text-3xl max-sm:text-2xl text-blue-400 mb-8">
            I'm a Next js Developer
          </Heading2Boundary>
          <ParagraphBoundary className="text-xl max-sm:text-sm max-w-2xl mx-auto mb-6 text-gray-400">
            Passionate about creating robust and scalable web applications.
            Experienced in both front-end and back-end technologies, with a knack
            for problem-solving and delivering high-quality code.
          </ParagraphBoundary>
          <div className="flex justify-center space-x-6">
            <SpanBoundary
              whileHover={{ scale: 1.1 }}
              className="text-3xl hover:text-blue-400 transition-colors"
            >
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/vivinkv6"
              >
                <FaGithub />
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
                <FaLinkedin />
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
                <FaEnvelope />
              </Link>
            </SpanBoundary>
          </div>
          <button className="mt-5 bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded font-semibold">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="/resume.pdf" 
              passHref
            >
              My Resume
            </Link>
          </button>
        </SectionBoundary>
      </main>
    </>
  );
}

export default HeroSection;
