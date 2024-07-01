"use client";
import { education } from "@/lib/data";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { header } from "@/app/font";

const Education = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <main className="container mx-auto  p-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
            className={`${header.className} text-4xl font-bold mb-8 my-20`}
        >
          Education
        </motion.h1>
        <div className="flex flex-row flex-wrap gap-5">
          {education.map((edu) => {
            return (
              <Link key={edu.id} href={edu.link}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: edu.id*0.2 }}
                  className="bg-gray-800  rounded-lg p-6 flex flex-col md:flex-row max-sm:items-start md:items-center space-y-4 md:space-y-0 md:space-x-6"
                  key={edu.id}
                >
                  <div className="w-24 h-24  bg-gray-200 rounded-full flex-shrink-0">
                    <Image
                      src={edu.logo}
                      alt="Sri C Achuthamenon"
                      unoptimized
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">{edu.name}</h2>
                    <p className="text-gray-400">{edu.location}</p>
                    <p className="mt-2">{edu.course}</p>
                    <p className="text-gray-400">{edu.year}</p>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Education;
