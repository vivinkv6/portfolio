import React, { Suspense } from "react";
import Earth from "@/components/core/globe";
import { Sparkles } from "@/components/core/sparkles";

//skills
import nextjs from "/public/skills/nextjs.png";
import reactjs from "/public/skills/react.png";
import nodejs from "/public/skills/nodejs.png";
import expressjs from "/public/skills/expressjs.png";
import mongodb from "/public/skills/mongodb.png";
import postgresql from "/public/skills/postgresql.png";
import sequelize from "/public/skills/sequelize.png";
import tailwind from "/public/skills/tailwind.png";
import bootstrap from "/public/skills/bootstrap.png";
import html from "/public/skills/html.png";
import css from "/public/skills/css.png";
import javascript from "/public/skills/javascript.png";
import typescript from "/public/skills/typescript.png";
import git from "/public/skills/git.png";
import github from "/public/skills/github.png";
import vercel from "/public/skills/vercel.png";
import vscode from "/public/skills/vscode.png";
import canva from "/public/skills/canva.png";
import vite from "/public/skills/vite.png";
import trello from "/public/skills/trello.png";
import strapi from "/public/skills/strapi.png";
import OrbitingCircles from "./ui/orbiting-circles";
import Image from "next/image";
import { skills } from "@/lib/data";

function Skills() {
  return (
    <>
      <div className="h-screen overflow-hidden bg-black  text-white relative">
        <article className="grid gap-4 text-center relative z-10 pt-10">
          <span className="inline-block text-sm  border p-1 px-3 w-fit mx-auto rounded-full border-[#3273ff] bg-[#0f1c35]">
            Technologies 🧑‍💻
          </span>
          <h1 style={{
             WebkitBackgroundClip: "text",
             WebkitTextFillColor: "transparent",
          }} className="text-4xl max-sm:text-3xl font-semibold bg-gradient-to-b from-[#edeffd] to-[#7b9cda] bg-clip-text text-transparent leading-[100%] tracking-tighter">
            Skills That Empower <br /> Your Vision
            
          </h1>
          <p className="mt-4 text-lg max-sm:text-sm text-gray-300 text-center px-[20%] max-sm:px-5">
            I specialize in creating responsive interfaces with React, Next.js,
            and Tailwind CSS, and building scalable backends using Node.js,
            Express, and PostgreSQL. Combining expertise with creativity, I
            deliver impactful digital solutions.
          </p>

          <Suspense fallback={<OrbitingCircles />}>
          <Earth />
          </Suspense>
         
        </article>
        <div className="relative max-sm:hidden -mt-32 h-96 w-screen overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#3273ff,transparent_90%)] before:opacity-40 after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[10%]  ">
          <Sparkles
            density={800}
            speed={1.2}
            size={1.2}
            direction="top"
            opacitySpeed={2}
            color="#32A7FF"
           className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
          />
        </div>
       
      </div>
    </>
  );
}

export default Skills;
