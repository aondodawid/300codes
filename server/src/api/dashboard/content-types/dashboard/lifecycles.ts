// global/content-types/global/lifecycles.ts
import fetch from "node-fetch";

const astroUrl = process.env.ASTRO_URL || "http://localhost";
const url = `${astroUrl}:4322/restart-astro`;
export default {
  async afterUpdate(event) {
    if (event.result.updatedBy.publishedAt) {
      try {
        await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ secret: "asdsdasyzx" }),
        });
      } catch (err) {
        strapi.log.error("Failed to trigger Astro restart: " + err.message);
      }
    }
  },
};
