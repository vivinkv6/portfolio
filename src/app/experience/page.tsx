import React from "react";
import { experience } from "@/lib/data";
import Link from "next/link";
import { header } from "@/app/font";
import { DivBoundary, Heading1Boundary } from "@/lib/animBoundary";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience Page",
  keywords: ["tinkerhub", "trebuchet"],
};
const ExperiencePage = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 p-4 md:p-8">
      <div className="max-w-4xl mx-auto my-16">
        <Heading1Boundary
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`${header.className} text-4xl font-bold mb-8 text-center`}
        >
          Experience
        </Heading1Boundary>

        <div className="space-y-12">
          {experience.map((exp, index) => (
            <DivBoundary
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
            </DivBoundary>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
