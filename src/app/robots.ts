import { MetadataRoute } from "next";

export default function robots (): MetadataRoute.Robots  {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/about", "/education", "/experience", "/skills", "/project"],
    },
    sitemap:`${process.env.URL}/sitemap.xml`
  };
};
