import { MetadataRoute } from "next";
import constants from "./contants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `${constants.metadata.businessUrl}/sitemap.xml`,
  };
}
