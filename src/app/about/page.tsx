import React, { Suspense } from "react";
import Image from "next/image";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import About from "/public/avatar.jpg";
import Avatar from "/public/about.jpg";
import Link from "next/link";
import { mainFont, paraContent } from "@/app/font";
import { DivBoundary, SectionBoundary, SpanBoundary } from "@/lib/animBoundary";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { aboutMe } from "@/lib/data";

const Cube = dynamic(() => import("@/components/Cube"), { ssr: false });

export const metadata: Metadata = {
  title: "About VivinKV - Web Developer & Tech Enthusiast",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${process.env.URL}/about`,
  },
  description:
    "VivinKV, a passionate front-end developer skilled in the MERN stack and React Native, recently graduated from Sri C Achuthamenon Govt College Thrissur. With a 2-month internship at Trebuchet Systems Kochi and experience as a Tech Lead at Tinkerhub GCT, VivinKV brings a strong foundation in both technical teaching and practical development. Enthusiastic about TypeScript and React, VivinKV actively participates in Tech Fests in the Thrissur region.",
  keywords: [
    "about-vivinkv",
    "about-vivin-kv",
    "who-is-vivin-kv",
    "vivin-kv-web-developer",
    "vivin-kv-portfolio",
    "tech-enthusiast-vivin-kv",
    "mern-stack-developer-vivin-kv",
    "front-end-developer-vivin-kv",
    "nextjs-developer-vivin-kv",
    "react-developer-vivin-kv",
    "vivin-kv-biography",
    "vivin-kv-about-page",
    "web-developer-from-kerala",
    "vivin-kv-projects-career",
    "learn-about-vivin-kv",
    "vivin-kv-official-bio",
    "kerala-web-developer-vivin-kv",
    "full-stack-developer-vivin-kv",
    "vivin-kv-mern-stack-projects",
    "vivin-kv-career-highlights",
    "vivin-kv-professional-journey",
    "vivin-kv-react-portfolio",
    "tech-biography-vivin-kv",
    "front-end-profile-vivin-kv",
  ],

  openGraph: {
    title: "About VivinKV - Web Developer & Tech Enthusiast",
    description:
      "Learn more about VivinKV, a skilled MERN stack and React Native developer. Recently graduated from Sri C Achuthamenon Govt College, with experience as a front-end developer at Trebuchet Systems and Tech Lead at Tinkerhub GCT.",
    type: "website",
    siteName: "VIVIN KV",
    locale: "en_US",
    url: `${process.env.URL}/about`,
    images:[{
      url:'/about/pic2.jpg',
      width:800,
      height:600,
      alt:'About VivinKV - Web Developer & Tech Enthusiast'
    }],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'About VivinKV - Web Developer & Tech Enthusiast',
    description: 'Learn more about VivinKV, a skilled MERN stack and React Native developer. Recently graduated from Sri C Achuthamenon Govt College, with experience as a front-end developer at Trebuchet Systems and Tech Lead at Tinkerhub GCT.',
   
    images: ['/about/pic2.jpg'],
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
            className={`${mainFont.className} text-4xl max-md:my-3  font-bold mb-6`}
          >
            {aboutMe.title}
          </h1>

          <div className="flex flex-col md:items-start md:justify-between md:flex-row-reverse">
            <DivBoundary
              whileHover={{ scale: 1.05 }}
              className="w-full md:w-2/5 h-64 md:h-96 relative rounded-lg overflow-hidden shadow-lg mb-8 md:mb-0 md:sticky md:top-24"
            >
              {/*<Image*/}
              {/*    src={About}*/}
              {/*    alt="Vivin KV"*/}
              {/*    height={500}*/}
              {/*    unoptimized*/}
              {/*    className="rounded-lg hidden max-sm:block"*/}
              {/*/>*/}
              {/*<Image*/}
              {/*    src={Avatar}*/}
              {/*    alt="Vivin KV"*/}
              {/*    height={500}*/}
              {/*    unoptimized*/}
              {/*    className="rounded-lg max-sm:hidden"*/}
              {/*/>*/}

              <Cube />
            </DivBoundary>
            <div
              className={`w-full md:w-1/2 text-gray-400 text-xl max-lg:text-lg max-sm:text-sm font-[400] ${mainFont.className}`}
              style={{ lineHeight: "25px" }}
            >
              {aboutMe?.sections?.map((about, index) => {
                return (
                  <p
                    key={index}
                    className={`${
                      aboutMe?.sections?.length == index + 1 ? "mb-6" : "mb-4"
                    }`}
                  >
                    {about.section}
                  </p>
                );
              })}

              {/* <p className="mb-4">
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
                            </p> */}
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
