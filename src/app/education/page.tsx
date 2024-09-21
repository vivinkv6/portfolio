import { education } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { header } from "@/app/font";
import { DivBoundary, Heading1Boundary } from "@/lib/animBoundary";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "VivinKV - Education Background",
  description:
    "VivinKV's educational background includes a BSc in Computer Science from Sri C Achutha Menon Govt College Thrissur (2021-2024) and a Commerce education from CNN Higher Secondary School (2019-2021). These foundations laid the groundwork for his expertise in web development, particularly focusing on the MERN stack and mobile app development.",
  keywords: [
    "vivin kv education",
    "sri c achutha menon govt college",
    "cnn higher secondary school",
    "bsc computer science",
    "thrissur education",
    "kerala colleges",
    "computer science graduate",
    "commerce background",
    "tech education",
    "kerala higher education",
    "vivin kv educational qualifications"
  ],
  openGraph: {
    title: "VivinKV - Educational Background",
    description:
      "VivinKV graduated with a BSc in Computer Science from Sri C Achutha Menon Govt College Thrissur and completed his higher secondary education in Commerce at CNN Higher Secondary School. These academic experiences are pivotal to his growth as a skilled developer.",
    type: "website",
    siteName: "VIVIN KV",
    locale: "en_US",
    url: `${process.env.URL}/education`,
  },
};

const Education = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <main className="container mx-auto  p-4">
        <Heading1Boundary
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`${header.className} text-4xl font-bold mb-8 my-20`}
        >
          Education
        </Heading1Boundary>
        <div className="flex flex-row flex-wrap gap-5">
          {education.map((edu) => {
            return (
              <Link key={edu.id} href={edu.link}>
                <DivBoundary
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: edu.id * 0.2 }}
                  className="bg-gray-800  rounded-lg p-6 flex flex-col md:flex-row max-sm:items-start md:items-center space-y-4 md:space-y-0 md:space-x-6"
                  key={edu.id}
                >
                  <div className="w-24 h-24  bg-gray-200 rounded-full flex-shrink-0">
                    <Image
                      src={edu.logo}
                      alt={edu.name}
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
                </DivBoundary>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Education;
