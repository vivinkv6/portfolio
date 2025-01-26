"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import HomeTopSection from "./HomeTop";
import Image from "next/image";
import Person from "../../public/home/person.png";
import { projects } from "@/lib/data";
import { Suspense, useEffect, useState } from "react";
import Skills from "./Skills";
import Experience from "./Experience";
import DesktopProject from "./Projects/Desktop";
import MobileProject from "./Projects/Mobile";
import Footer from "./Footer";
import dynamic from "next/dynamic";

const Marquee = dynamic(() => import("./Marquee"), { ssr: false });

function useDeviceType() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}

export default function Home(): JSX.Element {
  const isMobile = useDeviceType();

  return (
    <ReactLenis root>
    <main className="bg-black">
      <div className="wrapper">
        {/* Top Section */}
        <HomeTopSection />
  
        {/* Hero Section */}
        <section
          className="bg-slate-950 text-black grid place-content-center h-screen sticky top-0 rounded-tr-2xl rounded-tl-2xl overflow-hidden"
          aria-labelledby="hero-heading"
        >
          <div className="flex justify-center flex-wrap items-center w-full">
            <div className="md:w-1/2 z-10">
              <h1
                id="hero-heading"
                className="text-2xl px-8 font-semibold text-white text-center tracking-tight leading-[120%] md:text-5xl"
              >
                Passionate about crafting elegant, efficient, and high-quality web solutions with a focus on maintainability.
              </h1>
            </div>
            <div className="md:w-1/2 z-10">
              <Image
                src={Person}
                height={400}
                width={400}
                alt="A person representing passion and craftsmanship in web development"
              />
            </div>
          </div>
        </section>
  
        {/* Marquee Section */}
        <Suspense fallback={<p className="text-white">Loading...</p>}>
          <section
            className="text-white h-screen w-full bg-slate-950 grid place-content-center sticky top-0"
            aria-labelledby="marquee-heading"
          >
            <h2 id="marquee-heading" className="sr-only">
              Scrolling Marquee Section
            </h2>
            <Marquee />
          </section>
        </Suspense>
      </div>
  
      {/* Skills Section */}
      <section aria-labelledby="skills-heading">
        <h2 id="skills-heading" className="sr-only">
          Skills
        </h2>
        <Skills />
      </section>
  
      {/* Experience Section */}
      <section className="mt-10" aria-labelledby="experience-heading">
        <h2 id="experience-heading" className="sr-only">
          Experience
        </h2>
        <Experience />
      </section>
  
      {/* Projects Section */}
      <section aria-labelledby="projects-heading">
        <h2 id="projects-heading" className="sr-only">
          Projects
        </h2>
        {isMobile ? <MobileProject /> : <DesktopProject />}
      </section>
  
      {/* Footer */}
      <Footer />
    </main>
  </ReactLenis>
  
  );
}
