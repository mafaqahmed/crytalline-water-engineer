import { MetadataRoute } from "next";

import constants from "./contants";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${constants.metadata.businessUrl}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${constants.metadata.businessUrl}about`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${constants.metadata.businessUrl}services`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${constants.metadata.businessUrl}faqs`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${constants.metadata.businessUrl}contac`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
  ];
}
