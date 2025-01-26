import { Academic } from "@/components/Academics";
import React from "react";
import { Metadata } from "next";

// Add these meta details at the top of the file
export const metadata = {
  title: "VivinKV - Academic Journey",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${process.env.URL}/academics`,
  },
  description: "A chronicle of academic experiences at Sri C Achuthamenon Government College, including technical leadership at TinkerHub GCT, project developments, celebrations, and achievements from 2021 onwards.",
  keywords: [
    "vivin kv academics",
    "vivinkv academic journey",
    "vivin kv academic achievements",
    "college education",
    "TinkerHub GCT",
    "technical leadership",
    "web development",
    "Git training",
    "academic achievements",
    "college celebrations",
    "industrial visit",
    "Cybrosys Technologies",
    "tech fest competitions",
    "final year project",
    "Tech Connect Hub",
    "campus tour",
    "college events",
    "student activities",
    "technical workshops",
    "programming skills",
    "academic timeline",
    "college life",
    "educational journey",
    "vivinkv college life",
    "vivinkv academic life"
  ],
  openGraph: {
    title: "VivinKV - Academic Journey",
    description: "Exploring college life, technical leadership, and achievements at Sri C Achuthamenon Government College",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/academics/a25.jpg", // Update with your actual image path
        width: 1200,
        height: 630,
        alt: "Academic Journey Overview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Academic Journey and Achievements",
    description: "College life, technical leadership, and achievements at Sri C Achuthamenon Government College",
    images: ["/academics/a25.jpg"],  // Update with your actual image path

  }
};
function page() {
  return (
    <>
      <Academic />
    </>
  );
}

export default page;
