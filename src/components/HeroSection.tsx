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
// import Image from "next/image";
// import { homeContent, skills } from "@/lib/data";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import Image from "next/image";
import { homeContent } from "@/lib/data";

const WordRotate = dynamic(() => import("./ui/word-rotate"), { ssr: false });
const Sparkles = dynamic(
  () => import("./core/sparkles").then((mod) => mod.Sparkles),
  { ssr: false }
);

// function HeroSection() {
//   const iconSize = 50; // Size of the skill icons

//   return (
//     <main className="container relative mx-auto px-4 pt-24 flex flex-col items-center">
//       <SectionBoundary className="text-center py-20 relative z-10">
//         <Heading1Boundary
//           className={`text-6xl max-sm:text-4xl text-white font-bold mb-6 ${mainFont.className}`}
//         >
//           {homeContent?.title?.primary}
//           <span className="ml-2 animate-wave">👋</span>
//         </Heading1Boundary>
//         <Heading2Boundary
//           className={`text-4xl max-sm:text-2xl text-blue-400 mb-8 ${mainFont.className} flex flex-wrap justify-center items-center gap-x-2 font-semibold`}
//         >
//           {homeContent?.title?.secondary?.first}{" "}
//           <WordRotate
//             className="text-4xl max-sm:text-2xl font-semibold text-blue-400"
//             words={homeContent?.title?.secondary?.second}
//           />
//           {homeContent?.title?.secondary?.third}
//           {/* <span className="binary-code ml-2"></span> */}
//         </Heading2Boundary>
//         <ParagraphBoundary
//           className={`text-2xl max-md:text-sm max-w-2xl mx-auto mb-6 text-gray-400 ${mainFont.className} font-light`}
//         >
//           {homeContent?.description}
//         </ParagraphBoundary>
//         <div className="flex justify-center space-x-6">
//           <SpanBoundary
//             whileHover={{ scale: 1.1 }}
//             className="text-3xl hover:text-blue-400 transition-colors"
//           >
//             <Link
//               href="https://github.com/vivinkv6"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaGithub
//                 style={{ color: "white" }}
//                 className="text-4xl max-md:text-xl"
//               />
//             </Link>
//           </SpanBoundary>
//           <SpanBoundary
//             whileHover={{ scale: 1.1 }}
//             className="text-3xl hover:text-blue-400 transition-colors"
//           >
//             <Link
//               href="https://in.linkedin.com/in/vivin-k-v-8816ba291"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaLinkedin
//                 style={{ color: "white" }}
//                 className="text-4xl max-md:text-xl"
//               />
//             </Link>
//           </SpanBoundary>
//           <SpanBoundary
//             whileHover={{ scale: 1.1 }}
//             className="text-3xl hover:text-blue-400 transition-colors"
//           >
//             <Link
//               href="mailto:vivinkv851@gmail.com"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaEnvelope
//                 style={{ color: "white" }}
//                 className="text-4xl max-md:text-xl"
//               />
//             </Link>
//           </SpanBoundary>
//         </div>
//         <button className="mt-5 bg-blue-500 hover:bg-blue-600 text-slate-50 px-3 py-2 rounded font-semibold">
//           <Link
//             href="/resume.pdf"
//             target="_blank"
//             rel="noopener noreferrer"
//             passHref
//           >
//             My Resume
//           </Link>
//         </button>
//       </SectionBoundary>
//     </main>
//   );
// }

// export default HeroSection;

function HeroSection() {
  return (
    <>
      <main className=" h-screen  w-full  overflow-hidden bg-black text-white ">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <section className="container mx-auto relative h-[90vh] mt-4 border border-white/10 w-full overflow-hidden rounded-2xl">
          <article className="grid gap-4 text-center relative z-10 pt-10 mt-20">
            <span className="inline-block xl:text-base text-sm border p-1 px-3 w-fit mx-auto rounded-full border-[#3273ff] bg-[#0f1c35]">
              Explore My Journey 🚀
            </span>
            <h1
              className="2xl:text-6xl xl:text-5xl text-5xl max-sm:text-4xl font-semibold 
             bg-gradient-to-b from-[#edeffd] to-[#7b9cda] bg-clip-text 
             text-transparent leading-none tracking-tighter"
              style={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {homeContent?.title?.primary}
            </h1>

            <h3   style={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }} className="2xl:text-4xl  xl:text-3xl text-2xl max-sm:text-xl font-semibold bg-gradient-to-b from-[#edeffd] to-[#7b9cda] bg-clip-text text-transparent leading-[100%] tracking-tighter flex flex-wrap justify-center items-center gap-x-2">
              {/* <Heading2Boundary
         className={`text-4xl max-sm:text-2xl bg-gradient-to-b from-[#edeffd] to-[#7b9cda] bg-clip-text text-transparent leading-[100%] tracking-tighter mb-8 ${mainFont.className} flex flex-wrap justify-center items-center gap-x-2 font-semibold`}
        > */}
              {homeContent?.title?.secondary?.first}{" "}
            
              <WordRotate
                
                className="text-4xl max-sm:text-xl font-semibold bg-gradient-to-b from-[#edeffd] to-[#7b9cda] bg-clip-text text-transparent leading-[100%] tracking-tighter"
                words={homeContent?.title?.secondary?.second}
              />
             
              {homeContent?.title?.secondary?.third}
              {/* <span className="binary-code ml-2"></span> */}
              {/* </Heading2Boundary> */}
            </h3>
            <span className="text-center max-w-2xl max-sm:text-sm mx-auto">
              {homeContent?.description}
            </span>
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
            <button className="border border-blue-400 w-fit p-2 px-4 rounded-md bg-blue-900/40 hover:bg-blue-900/60  backdrop-blur-2xl mx-auto text-white">
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

          <div className="absolute bottom-0 z-[2] h-[400px] w-screen overflow-hidden [mask-image:radial-gradient(100%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#3273ff,transparent_90%)] before:opacity-40 after:absolute">
            <Suspense fallback={"loading..."}>
              <Sparkles
                density={1800}
                speed={1.2}
                color="#48b6ff"
                direction="top"
                className="absolute inset-x-0 bottom-0 h-full w-full "
              />
            </Suspense>
          </div>
        </section>
      </main>
    </>
  );
}

export default HeroSection;
