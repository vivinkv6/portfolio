import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
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
      priority: 0.7,
    },
    {
      url: `${process.env.URL}/skills`,
      priority: 0.6,
    },
    {
      url: `${process.env.URL}/project`,
      priority: 0.5,
    },
  ];
}
