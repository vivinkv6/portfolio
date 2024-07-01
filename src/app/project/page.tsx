"use client";
import React from "react";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { header, projectHeader } from "@/app/font";
function page() {
  return (
    <main className="container mx-auto p-4">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`${header.className} text-4xl font-bold mb-8 my-16`}
      >
        Projects
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gray-800 rounded-lg p-4 flex flex-col"
          >
            <div className={`bg-gray-700 w-full ${project?.mobile ? 'h-60':''}  mb-4 rounded overflow-hidden`} >
              <Image
                src={project.banner}
                alt={project.name}
                width={500}
                height={500}
                className="rounded min-h-28"
                unoptimized
              />
            </div>
            <h2 className={`text-xl font-semibold mb-4 ${projectHeader.className}`}>{project.name}</h2>
            <div className="mt-auto flex space-x-4 flex-row justify-center">
              {project?.public_link && (
                <Link
                  href={project?.public_link}
                  className={`${projectHeader.className} bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded`}
                >
                  View
                </Link>
              )}

              <Link
                href={project.github_link}
                className={`${projectHeader.className} bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded`}
              >
                Source Code
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}

export default page;
