import React from "react";
import {experience} from "@/lib/data";
import Link from "next/link";
import {header, mainFont, paraContent} from "@/app/font";
import {DivBoundary, Heading1Boundary} from "@/lib/animBoundary";
import {Metadata} from "next";


export const metadata: Metadata = {
    title: "VivinKV - Work Experience",
    robots:{
        index:true,
        follow:true
    },
    alternates:{
        canonical:`${process.env.URL}/experience`
    },
    description:
        "Discover VivinKV's professional experience as a Front End Intern at Trebuchet Systems and a Technical Lead at TinkerHub GCT, showcasing skills in front-end development and tech education.",
   keywords: [
    "vivin-kv-professional-experience",
    "vivin-kv-career-journey",
    "frontend-developer-internship",
    "trebuchet-systems-kochi",
    "tinkerhub-gct-tech-lead",
    "web-development-experience",
    "ui-ux-design-expertise",
    "git-version-control",
    "team-collaboration-in-tech",
    "technical-training-sessions",
    "technology-workshops-by-vivin-kv",
    "student-mentorship-in-tech",
    "frontend-development-skills",
    "software-development-experience",
    "career-in-web-technologies"
  ],
    openGraph: {
        title: "VivinKV - Work Experience",
        description:
            "A detailed overview of VivinKV's work experience, highlighting roles at Trebuchet Systems and TinkerHub GCT, focusing on front-end development and technical leadership.",
        type: "website",
        siteName: "VIVIN KV",
        locale: "en_US",
        url: `${process.env.URL}/experience`,
        images:[{
            url:'/about/pic6.jpg',
            width:800,
            height:600,
            alt:'VivinKV - Work Experience'
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: "VivinKV - Work Experience",
        description:
            "A detailed overview of VivinKV's work experience, highlighting roles at Trebuchet Systems and TinkerHub GCT, focusing on front-end development and technical leadership.",
        images: ['/about/pic6.jpg'],
    },
};

const ExperiencePage = () => {
    return (
        <div className="min-h-screen bg-gray-950 text-gray-200 p-4 md:p-8">
            <div className="max-w-4xl mx-auto my-16">
                <Heading1Boundary
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                    className={`${mainFont.className} text-4xl font-bold mb-8 my-24 text-center`}
                >
                    {experience?.title}
                </Heading1Boundary>

                <div className="space-y-12">
                    {experience?.experiences?.map((exp, index) => (
                        <DivBoundary
                            key={exp.id}
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.5, delay: index * 0.1}}
                            className={`bg-gray-800 rounded-lg p-6 shadow-lg `}
                        >
                            <Link href={exp.link}>
                                <h2 className={`text-4xl font-semibold mb-2 ${mainFont.className}`}>{exp.role}</h2>
                                <h3 className={`text-xl text-gray-300 mb-2 ${mainFont.className}`}>{exp.company}</h3>
                                <p className="text-gray-400 text-sm mb-4">{exp.date}</p>
                                <ul className={`list-disc px-4 space-y-2 text-lg  font-[400] ${mainFont.className}`}>
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
