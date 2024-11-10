import { mainFont, projectHeader } from "@/app/font";
import { convertHashtagToKebabCase, getFeaturedImage } from "@/lib/utils";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import { BloggerResponse } from "../page";

type BlogPost = {
  kind: string;
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
  labels: string[];
};

// Setting revalidate enables ISR with 10 seconds
export const revalidate = 10;

// Disable dynamic route generation
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const postDetail = await fetch(
    `https://www.googleapis.com/blogger/v3/blogs/${process.env.BLOG_ID}/posts/${params.slug}?key=${process.env.BLOGGER_API_KEY}`
  );
  const post: BlogPost = await postDetail.json();
  const image = getFeaturedImage(post.content);

  const keywords = post.labels?.map((label) =>
    convertHashtagToKebabCase(label)
  );

  return {
    title: post.title,
    keywords: [post.title.replace(" ", "-").toLowerCase(), ...keywords],
    description:
      post.content.replace(/<[^>]*>?/gm, "").substring(0, 150) + "...",
    openGraph: {
      title: post.title,
      description:
        post.content.replace(/<[^>]*>?/gm, "").substring(0, 150) + "...",
      url: post.url,
      authors: post.author.displayName,
      images: [
        {
          url: `https:${image}`,
          width: 800,
          height: 600,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  const blogResponse = await fetch(
    `https://www.googleapis.com/blogger/v3/blogs/${process.env.BLOG_ID}/posts?key=${process.env.BLOGGER_API_KEY}`
  );
  const blogList: BloggerResponse = await blogResponse.json();

  return blogList.items.map((post) => ({ slug: post.id }));
}

async function Page({ params }: { params: { slug: string } }) {
  const postDetail = await fetch(
    `https://www.googleapis.com/blogger/v3/blogs/${process.env.BLOG_ID}/posts/${params.slug}?key=${process.env.BLOGGER_API_KEY}`
  );

  const post: BlogPost = await postDetail.json();
  return (
    <div className="bg-gray-950 mt-32 text-white px-20 max-sm:px-5">
      <h6 className={`font-[200] mb-2 text-gray-500 ${projectHeader.className}`}>
        {new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }).format(new Date(post.published))}
      </h6>
      <h1
        className={`text-4xl max-lg:text-3xl max-sm:text-2xl xl:w-[60%] font-[500] ${projectHeader.className}`}
      >
        {post.title}
      </h1>
      <div className="flex flex-wrap gap-2 mt-5 xl:w-[80%]">
        {post.labels.map((label,index)=>{
          return(
            <p key={index} className="text-gray-400 text-sm rounded border border-gray-600 p-1">
                    {label}
                  </p>
          )
        })}
        
      </div>
      {/* <div className="flex items-center gap-x-2 mt-5">
        <Image
          src={`https:${post.author.image.url}`}
          alt="author"
          width={20}
          height={10}
        />
        <h4 className="text-gray-400 italic">{post.author.displayName}</h4>
      </div> */}

      <div className="w-full flex justify-center">
        <div
          className="
          prose 
          max-w-3xl 
          lg:prose-lg 
          max-sm:prose-md 
          prose-headings:text-white 
          prose-h1:text-5xl prose-h1:font-bold prose-h1:leading-tight
          prose-h2:text-4xl prose-h2:font-semibold prose-h2:leading-snug 
          prose-h3:text-3xl prose-h3:font-medium prose-h3:leading-relaxed 
          prose-h4:text-2xl prose-h4:font-normal prose-h4:leading-normal 
          prose-p:text-gray-400 prose-p:text-lg 
          text-white
        "
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></div>
      </div>
    </div>
  );
}

export default Page;
