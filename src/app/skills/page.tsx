import React from "react";
import Image from "next/image";
import {skills} from "@/lib/data";
import {header, mainFont} from "@/app/font";
import {DivBoundary, Heading1Boundary} from "@/lib/animBoundary";
import Link from "next/link";
import {Metadata} from "next";
import IconCloud from "@/components/ui/icon-cloud";

const slugs = [
    "nextdotjs",
    "react",
    "nodedotjs",
    "express",
    "mongodb",
    "postgresql",
    "html",
    "css",
    "javascript",
    "typescript",
    "git",
    "github",
    "tailwindcss",
    "bootstrap",
    "sequelize",
    "trello",
    "vercel",
    "vite",
    "visualstudiocode",
    "canva",
    "strapi",
    "docker",
    "python",
    "java",
    "cplusplus",
    "c",
    "netlify",
    "render",
    "mui",
    "mongoose",
    "prisma",
    "ubuntu",
    "strapi",
    "sanity",
    "reactrouter",
    "reactquery",
    "postman",
    "notion",
    "trello"
];

export const metadata: Metadata = {
    title: "VivinKV - Skills in Front-End & Back-End Technologies",
    robots:{
      index: true,
      
    },
    description:
        "VivinKV is proficient in a wide array of front-end and back-end technologies, including Next.js, React.js, Node.js, Express.js, MongoDB, PostgreSQL, JavaScript, TypeScript, Git, Tailwind CSS, and more. With expertise in both web and mobile app development, VivinKV brings a strong command of the MERN stack and additional tools such as GitHub, Vercel, and Strapi for creating dynamic and scalable applications.",
    keywords: [
        "vivin-kv skills",
        "vivin kv web developer",
        "next js developer",
        "react js developer",
        "node js developer",
        "express js developer",
        "mern stack developer",
        "full-stack web development",
        "front-end development",
        "back-end development",
        "mongodb developer",
        "postgresql developer",
        "javascript developer",
        "typescript developer",
    ],
    openGraph: {
        title: "VivinKV - Skills in Front-End & Back-End Technologies",
        description:
            "Explore VivinKV's diverse skill set, covering technologies like Next.js, React.js, Node.js, MongoDB, TypeScript, Git, and more. VivinKV excels in developing scalable applications using modern web development tools.",
        type: "website",
        siteName: "VIVIN KV",
        locale: "en_US",
        url: `${process.env.URL}/skills`,
    },
};

function page() {
    return (
        <div className="min-h-screen bg-gray-950 text-white">
            <main className="flex flex-col p-8 ">
                <Heading1Boundary
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.3}}
                    className={`${mainFont.className} text-4xl font-bold mb-8 my-20`}
                >
                    Skills
                </Heading1Boundary>
                {/* <div className="grid grid-cols-4 gap-6 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8">
          {skills.map((skill) => (
            <DivBoundary
              key={skill.id}
              className="w-16 h-16 border bg-white  rounded-full flex items-center justify-center p-3"
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: skill.id * 0.1 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              {skill?.logo && skill?.link && (
                <Link href={skill?.link}>
                  <Image
                    src={skill?.logo}
                    alt={skill.name}
                    unoptimized
                    height={150}
                    width={150}
                  />
                </Link>
              )}
            </DivBoundary>
          ))}
        </div> */}

                <IconCloud iconSlugs={slugs}/>

            </main>
        </div>
    );
}

export default page;
