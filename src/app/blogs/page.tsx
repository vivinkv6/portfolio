import React from "react";
import { projects } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { header, mainFont, projectHeader } from "@/app/font";
import { DivBoundary, Heading1Boundary } from "@/lib/animBoundary";
import { Metadata } from "next";
import { getFeaturedImage } from "@/lib/utils";

export const metadata: Metadata = {
  title: "VivinKV - Blogs",
  robots: {
    index: true,
  },
  description:
    "Dive into VivinKV's insightful blogs covering web development, mobile app creation, and tech tutorials. Explore tips, guides, and project highlights using React, Next.js, TypeScript, and more.",
  keywords: [
    "VivinKV blogs",
    "web development blogs",
    "mobile development articles",
    "React tutorials",
    "Next.js guides",
    "TypeScript blog",
    "JavaScript tutorials",
    "tech insights",
    "frontend development blog",
    "coding tips blog",
    "software development posts",
  ],
  openGraph: {
    title: "VivinKV - Blogs",
    description:
      "Explore VivinKV's articles on web development and technology, featuring tutorials, project insights, and industry trends with a focus on modern JavaScript frameworks.",
    type: "website",
    siteName: "VIVIN KV",
    locale: "en_US",
    url: `${process.env.URL}/blogs`,
  },
};

export type BloggerResponse = {
  kind: "blogger#postList";
  items: Array<{
    kind: "blogger#post";
    id: string;
    blog: {
      id: string;
    };
    published: string;
    updated: string;
    url: string;
    selfLink: string;
    title: string;
    content: string;
    author: {
      id: string;
      displayName: string;
      url: string;
      image: {
        url: string;
      };
    };
    replies: {
      totalItems: string;
      selfLink: string;
    };
    etag: string;
    labels: string[];
  }>;
};

export const revalidate = 10;

async function page() {
  const blogResponse: Response = await fetch(
    `https://www.googleapis.com/blogger/v3/blogs/${process.env.BLOG_ID}/posts?key=${process.env.BLOGGER_API_KEY}`
  );

  const blogList: BloggerResponse = await blogResponse.json();
  let featuredImages: {
    url: string;
    id: string;
  }[] = [];

  for (const featuredImage of blogList.items) {
    const image = getFeaturedImage(featuredImage.content);
    if (image != null) {
      featuredImages.push({
        url: image,
        id: featuredImage.id,
      });
    }
  }

  return (
    <main className="container mx-auto p-4 bg-gray-950">
      <Heading1Boundary
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`${mainFont.className} text-4xl font-bold mb-8 my-20 text-white`}
      >
        Blogs
      </Heading1Boundary>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {blogList?.items?.map((post, index: number) => (
          <DivBoundary
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 * index }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-800 rounded-lg p-4 flex flex-col justify-between gap-5"
          >
            <div className="flex flex-col justify-start">
              <div className="bg-gray-700 w-full max-h-80 mb-4 rounded overflow-hidden">
                <Link href={`/blogs/${post.id}`}>
                  <Image
                    src={
                      featuredImages.find((image) => image.id === post.id)
                        ?.url || ""
                    }
                    alt={post.title}
                    width={1000}
                    height={1000}
                    className="rounded w-full h-auto object-cover mx-auto"
                    layout="responsive"
                    sizes="(max-width: 640px) 100vw,
                           (max-width: 768px) 50vw,
                           (max-width: 1024px) 33vw,
                           25vw"
                  />
                </Link>
              </div>

              <h2
                className={`text-xl font-[400] text-white ${projectHeader.className}`}
              >
                {post.title}
              </h2>
              <div className="flex flex-wrap gap-2 mt-3">
                {post.labels
                  .slice(0, post.labels.length > 5 ? 5 : post.labels.length)
                  .map((label,index) => (
                    <p key={index} className="text-gray-400 text-sm rounded border border-gray-600 p-1">
                      {label}
                    </p>
                  ))}
              </div>
            </div>
          </DivBoundary>
        ))}
      </div>
    </main>
  );
}

export default page;
