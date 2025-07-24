import { defineCollection, z } from "astro:content";
import { strapiLoader } from "../strapi-loader";

// Define the Strapi posts collection
// This sets up a custom loader for Strapi content

const strapiDashboardLoader = defineCollection({
  loader: strapiLoader(
    "strapi-dashboard",
    { contentType: "dashboard" },
    "singular",
  ),
});

// Export the collections to be used in Astro
export const collections = {
  strapiDashboardLoader: strapiDashboardLoader,
};
