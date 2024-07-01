"use client";
import React from "react";
import { motion } from "framer-motion";
import { experience } from "@/lib/data";
import Link from "next/link";
import { header } from "../font";

const ExperiencePage= () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto my-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`${header.className} text-4xl font-bold mb-8 text-center`}
        >
          Experience
        </motion.h1>

        <div className="space-y-12">
          {experience.map((exp, index) => (
          
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg p-6 shadow-lg"
            >
                 <Link href={exp.link}>
              <h2 className="text-2xl font-semibold mb-2">{exp.role}</h2>
              <h3 className="text-xl text-gray-300 mb-2">{exp.company}</h3>
              <p className="text-gray-400 mb-4">{exp.date}</p>
              <ul className="list-disc list-inside space-y-2">
                {exp.responsibilities.map((item, idx) => (
                  <li key={idx} className="text-gray-300">
                    {item}
                  </li>
                ))}
              </ul>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
