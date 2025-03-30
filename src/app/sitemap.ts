import type {MetadataRoute} from "next";
import {siteUrl} from "@/constants/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: siteUrl,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        }
    ]
}