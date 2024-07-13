import React from "react";
import Image from "next/image";
import { skills } from "@/lib/data";
import { header } from "@/app/font";
import { DivBoundary, Heading1Boundary } from "@/lib/animBoundary";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills",
  keywords:['html','css','javascript','react-js','next-js','mongo-db','postgresql','express-js','typescript','node-js']
};
function page() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <main className="flex flex-col items-center p-8 ">
        <Heading1Boundary
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={`${header.className} text-4xl font-bold mb-8 my-16`}
        >
          Skills
        </Heading1Boundary>
        <div className="grid grid-cols-4 gap-6 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8">
          {skills.map((skill) => (
            <DivBoundary
              key={skill.id}
              className="w-16 h-16 border bg-white  rounded-full flex items-center justify-center p-3"
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: skill.id * 0.1 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              {skill?.logo && (
                skill?.link &&
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
        </div>
      </main>
    </div>
  );
}

export default page;
