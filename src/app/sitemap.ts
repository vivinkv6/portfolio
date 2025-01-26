import { MetadataRoute } from "next";
import { BloggerResponse } from "./blogs/page";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogList = await fetch(
    `https://www.googleapis.com/blogger/v3/blogs/${process.env.BLOG_ID}/posts?key=${process.env.BLOGGER_API_KEY}`
  );
  const blog: BloggerResponse = await blogList.json();

  return [
  {
    url: `${process.env.URL}`,
    priority: 1, 
  },
  {
    url: `${process.env.URL}/about`,
    priority: 0.9, 
  },
  {
    url: `${process.env.URL}/education`,
    priority: 0.8, 
  },
  {
    url: `${process.env.URL}/experience`,
    priority: 0.8, 
  },
  {
    url: `${process.env.URL}/skills`,
    priority: 0.6, 
  },
  {
    url: `${process.env.URL}/project`,
    priority: 0.7,
  },
  {
    url: `${process.env.URL}/academics`,
    priority: 0.6,
  },
  {
    url: `${process.env.URL}/blogs`,
    priority: 0.6,
  },
  ...blog.items.map((post) => ({
    url: `${process.env.URL}/blogs/${post.id}`,
    priority: 0.5,
  })),
]
}
