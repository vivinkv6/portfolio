"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { skills } from "@/lib/data";
import { header } from "@/app/font";
function page() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <main className="flex flex-col items-center p-8 ">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={`${header.className} text-4xl font-bold mb-8 my-16`}
        >
          Skills
        </motion.h1>
        <div className="grid grid-cols-4 gap-6 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className="w-16 h-16 border bg-white  rounded-full flex items-center justify-center p-3"
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: skill.id * 0.1 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              {skill?.logo && (
                <Image
                  src={skill?.logo}
                  alt={skill.name}
                  unoptimized
                  height={150}
                  width={150}
                />
              )}
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default page;
