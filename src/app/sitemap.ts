import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${process.env.URL}`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${process.env.URL}/about`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${process.env.URL}/education`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${process.env.URL}/experience`,
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: `${process.env.URL}/skills`,
      lastModified: new Date(),
      priority: 0.6,
    },
    {
      url: `${process.env.URL}/project`,
      lastModified: new Date(),
      priority: 0.5,
    },
  ];
}
