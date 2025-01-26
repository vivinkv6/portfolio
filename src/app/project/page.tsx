import React from "react";
import {projects} from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import {header, mainFont, projectHeader} from "@/app/font";
import {DivBoundary, Heading1Boundary} from "@/lib/animBoundary";
import {Metadata} from "next";


export const metadata: Metadata = {
    title: "VivinKV - Projects",
    robots:{
        index:true,
        follow:true,

    },
    alternates: {
        canonical: `${process.env.URL}/projects`,
    },
    description:
        "Explore VivinKV's web and mobile development projects including a Daily Dev Clone, Finance Dashboard, Movie Dashboard, and more, showcasing expertise in React, TypeScript, Node.js, and modern web technologies.",
    keywords: [
        "vivin-kv-projects",
        "daily-dev-clone",
        "finance-dashboard",
        "movie-dashboard",
        "react-projects",
        "typescript-projects",
        "nextjs-projects",
        "nodejs-projects",
        "expressjs-projects",
        "mern-stack-projects",
        "web-development-portfolio",
        "frontend-development-projects",
        "backend-development-projects",
        "mobile-app-development-projects",
        "react-native-projects",
        "github-clone-project",
        "youtube-clone-project",
        "tailwind-css-projects",
        "bootstrap-projects",
        "mongodb-projects",
        "postgresql-projects"
      ],
    openGraph: {
        title: "VivinKV - Projects",
        description:
            "A showcase of VivinKV's development portfolio, including web and mobile applications built with modern technologies like React, TypeScript, Next.js, and more.",
        type: "website",
        siteName: "VIVIN KV",
        locale: "en_US",
        url: `${process.env.URL}/projects`,
        images:[{
            url:'/project/project4.png',
            width:800,
            height:600,
            alt:'VivinKV - Projects'
        }]
    },
    twitter: {
        card: "summary_large_image",
        title: "VivinKV - Projects",
        description:
            "A showcase of VivinKV's development portfolio, including web and mobile applications built with modern technologies like React, TypeScript, Next.js, and more.",
        images: ['/project/project4.png'],
    },
};

function page() {
    return (
        <main className="container mx-auto p-4 bg-gray-950">
            <Heading1Boundary
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
                className={`${mainFont.className} text-4xl font-bold mb-8 my-24 text-white`}
            >
                {projects?.title}
            </Heading1Boundary>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {projects?.projects.map((project, index) => (
                    <DivBoundary
                        key={project.id}
                        initial={{opacity: 0, y: 20}}
                        transition={{duration: 0.5, delay: 0.2 * project.id}}
                        animate={{opacity: 1, y: 0}}
                        className="bg-gray-800 rounded-lg p-4 flex flex-col justify-between gap-5"
                    >
                        <div className="flex flex-col justify-start">
                            <div
                                className={`bg-gray-700 w-full ${
                                    project?.mobile ? "h-60" : ""
                                }  mb-4 rounded overflow-hidden`}
                            >

                                <Image
                                    src={project.banner}
                                    alt={project.name}
                                    width={500}
                                    height={500}
                                    className="rounded min-h-28"
                                    // unoptimized
                                />
                            </div>

                            <h2
                                className={`text-xl font-semibold text-white mb-4 ${projectHeader.className}`}
                            >
                                {project.name}
                            </h2>
                            <div className="flex flex-row flex-wrap gap-2">
                                {project.skills.map((skill) => {
                                    return (
                                        <li
                                            key={skill.id}
                                            className="list-none rounded py-1 px-2 font-semibold text-white"
                                            style={{
                                                border: `1px solid ${skill.color}`,
                                                backgroundColor: `${skill.color}`,
                                                fontSize: '10px'
                                            }}
                                        >
                                            {skill.name}
                                        </li>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="flex space-x-4 flex-row justify-center">
                            {project?.public_link && (
                                <Link
                                    href={project?.public_link}
                                    target="_blank"
                                    className={`${projectHeader.className} bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white`}
                                >
                                    View
                                </Link>
                            )}

                            <Link
                                href={project.github_link}
                                target="_blank"
                                className={`${projectHeader.className} bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded text-white`}
                            >
                                Source Code
                            </Link>
                        </div>
                    </DivBoundary>
                ))}
            </div>
        </main>
    );
}

export default page;
