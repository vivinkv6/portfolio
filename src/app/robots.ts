import { MetadataRoute } from "next";

export default function robots (): MetadataRoute.Robots  {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/about", "/education", "/experience", "/skills", "/project","/blogs","/blogs/*","/academics"],
    },
    sitemap:`${process.env.URL}/sitemap.xml`
  };
};
