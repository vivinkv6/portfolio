import React from "react";
import { projects } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { header, projectHeader } from "@/app/font";
import { DivBoundary, Heading1Boundary } from "@/lib/animBoundary";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  keywords: ["movie-dashboard", "finance-dashboard", "techconnect-hub",'pexel-clone','github-clone','youtube-clone'],
};
function page() {
  return (
    <main className="container mx-auto p-4 bg-gray-950">
      <Heading1Boundary
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`${header.className} text-4xl font-bold mb-8 my-16 text-white`}
      >
        Projects
      </Heading1Boundary>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <DivBoundary
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 * project.id }}
            animate={{ opacity: 1, y: 0 }}
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
                unoptimized
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
                    style={{ border: `1px solid ${skill.color}`,backgroundColor:`${skill.color}`,fontSize:'10px' }}
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
                  className={`${projectHeader.className} bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white`}
                >
                  View
                </Link>
              )}

              <Link
                href={project.github_link}
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
