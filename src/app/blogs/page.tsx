import React from "react";
import { blog, projects } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { header, mainFont, projectHeader } from "@/app/font";
import { DivBoundary, Heading1Boundary } from "@/lib/animBoundary";
import { Metadata } from "next";
import { getFeaturedImage } from "@/lib/utils";
import BlogCard from "@/components/BlogCard";

export const metadata: Metadata = {
  title: "VivinKV - Blogs",
  robots: {
    index: true,
    follow:true
  },
  alternates:{
    canonical:`${process.env.URL}/blogs`
  },
  description:
    "Dive into VivinKV's insightful blogs covering web development, mobile app creation, and tech tutorials. Explore tips, guides, and project highlights using React, Next.js, TypeScript, and more.",
keywords: [
  "vivin-kv-blogs",
  "web-development-blog",
  "frontend-development-articles",
  "react-tutorials-tips",
  "nextjs-development-blog",
  "typescript-guides",
  "javascript-tutorials",
  "mobile-app-development-blogs",
  "tech-insights-by-vivin-kv",
  "coding-tips-tricks",
  "mern-stack-tutorials",
  "software-development-blog",
  "vivin-kv-coding-articles",
  "programming-tips-blog",
  "latest-tech-trends"
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

  console.log(blogList);
  

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
        className={`${mainFont.className} text-4xl font-bold mb-8 my-24 text-white`}
      >
        {blog?.title}
      </Heading1Boundary>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {blogList?.items?.map((post, index: number) => (
         
            <BlogCard key={index} id={post.id} img={featuredImages.find((image) => image.id === post.id)
                        ?.url || ""} labels={post.labels} title={post.title} published={post.published}/>
           
         
        ))}
      </div>
    </main>
  );
}

export default page;

