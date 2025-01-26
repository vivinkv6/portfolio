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
          <HomeTopSection />
          <section className="bg-slate-950 text-black grid place-content-center h-screen sticky top-0 rounded-tr-2xl rounded-tl-2xl overflow-hidden">
            {/* <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div> */}
            <div className="flex justify-center flex-wrap items-center w-[100%]">
              <div className="md:w-1/2 z-10">
                <h1 className="text-2xl px-8 font-semibold text-white text-center tracking-tight leading-[120%] md:text-5xl">
                  Passionate about crafting elegant, efficient, and high-quality web solutions with a focus on maintainability.
                </h1>
              </div>
              <div className="md:w-1/2 z-10">
                <Image src={Person}  height={400} width={400} alt="person" />
              </div>
            </div>
          </section>
          <Suspense fallback="Loading...">
          <section className="text-white h-screen w-full bg-slate-950 grid place-content-center sticky top-0">
            {/* <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div> */}
            <Marquee />
          </section>
          </Suspense>
        </div>

        <Skills />
        <div className="mt-10">
          <Experience />
        </div>

        {/* Conditionally render based on device type */}
        {isMobile ? <MobileProject /> : <DesktopProject />}

        <Footer />
      </main>
    </ReactLenis>
  );
}
