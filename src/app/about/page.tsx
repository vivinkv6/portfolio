import React from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import About from "/public/avatar.jpg";
import Avatar from "/public/about.jpg";
import Link from "next/link";
import { header } from "@/app/font";
import { DivBoundary, SectionBoundary, SpanBoundary } from "@/lib/animBoundary";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About VivinKV - Web Developer & Tech Enthusiast",
  description:
    "VivinKV, a passionate front-end developer skilled in the MERN stack and React Native, recently graduated from Sri C Achuthamenon Govt College Thrissur. With a 2-month internship at Trebuchet Systems Kochi and experience as a Tech Lead at Tinkerhub GCT, VivinKV brings a strong foundation in both technical teaching and practical development. Enthusiastic about TypeScript and React, VivinKV actively participates in Tech Fests in the Thrissur region.",
  keywords: ["about vivin-kv", "about vivin", "web developer", "tech enthusiast",'about vivin kv'],
  openGraph: {
    title: "About VivinKV - Web Developer & Tech Enthusiast",
    description:
      "Learn more about VivinKV, a skilled MERN stack and React Native developer. Recently graduated from Sri C Achuthamenon Govt College, with experience as a front-end developer at Trebuchet Systems and Tech Lead at Tinkerhub GCT.",
    type: "website",
    siteName: "VIVIN KV",
    locale: "en_US",
    url: `${process.env.URL}/about`,
  },
};


const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <main className="container mx-auto px-4 pt-24 max-sm:pt-5">
        <SectionBoundary
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="py-20"
        >
          <h1
            className={`${header.className} text-4xl md:text-5xl font-bold mb-6`}
          >
            About Me
          </h1>

          <div className="flex flex-col md:items-start md:justify-between md:flex-row-reverse">
            <DivBoundary
              whileHover={{ scale: 1.05 }}
              className="w-full md:w-2/5 h-64 md:h-96 relative rounded-lg overflow-hidden shadow-lg mb-8 md:mb-0 md:sticky md:top-24"
            >
              <Image
                src={About}
                alt="Vivin KV"
                height={500}
                unoptimized
                className="rounded-lg hidden max-sm:block"
              />
              <Image
                src={Avatar}
                alt="Vivin KV"
                height={500}
                unoptimized
                className="rounded-lg max-sm:hidden"
              />
            </DivBoundary>
            <div className="w-full md:w-1/2 text-gray-400 text-lg max-sm:text-sm">
              <p className="mb-4">
                I recently completed my graduation at Sri C Achuthamenon Govt
                College Thrissur, deeply passionate about front-end development.
                My primary focus is on the MERN stack and mobile app development
                using React Native.
              </p>
              <p className="mb-4">
                During my journey, I had the privilege of a 2-month internship
                at Trebuchet Systems Kochi, where I honed my skills as a
                front-end developer. Additionally, I served as a dedicated Tech
                Lead for the Tinkerhub GCT campus team under Tinkerhub,
                dedicating a year to teaching technical content to students from
                various colleges and preparing them for success in the tech
                industry.
              </p>
              <p className="mb-6">
                I take pride in my participation in Tech Fests organized by
                numerous colleges in the Thrissur region, reflecting my
                commitment to staying at the forefront of technological
                advancements. JavaScript holds a special place in my heart, and
                I have transitioned to TypeScript for its robust type safety
                features. Among JavaScript libraries, React is my absolute
                favorite.
              </p>
              <div className="flex space-x-4 text-white">
                <SpanBoundary
                  whileHover={{ scale: 1.1 }}
                  className="text-3xl hover:text-blue-400 transition-colors"
                  rel="noopener noreferrer"
                >
                  <Link href={"https://github.com/vivinkv6"}>
                    <FaGithub />
                  </Link>
                </SpanBoundary>
                <SpanBoundary
                  whileHover={{ scale: 1.1 }}
                  className="text-3xl hover:text-blue-400 transition-colors"
                  rel="noopener noreferrer"
                >
                  <Link href={"https://in.linkedin.com/in/vivin-k-v-8816ba291"}>
                    <FaLinkedin />
                  </Link>
                </SpanBoundary>
                <SpanBoundary
                  whileHover={{ scale: 1.1 }}
                  className="text-3xl hover:text-blue-400 transition-colors"
                >
                  <Link href={"mailto:vivinkv851@gmail.com"}>
                    <FaEnvelope />
                  </Link>
                </SpanBoundary>
              </div>
            </div>
          </div>
        </SectionBoundary>
      </main>
    </div>
  );
};

export default AboutPage;
