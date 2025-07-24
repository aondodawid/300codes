import fetch from "node-fetch";

const astroUrl = process.env.ASTRO_URL || "http://localhost";
const url = `${astroUrl}:4322/restart-astro`;

export default {
  async afterUpdate(event) {
    console.log("🚀 ~ url:", url);
    console.log("event.result.publishedAt", event.result);

    if (event.result.updatedBy.publishedAt) {
      const controller = new AbortController();
      const timeout = setTimeout(() => {
        controller.abort();
      }, 10000); // 10 seconds

      try {
        await fetch(url, {
          method: "POST",
          signal: controller.signal,
        });
        strapi.log.info("Triggered Astro restart after publish.");
      } catch (err) {
        if (err.name === "AbortError") {
          strapi.log.error("Triggering Astro restart timed out.");
        } else {
          strapi.log.error("Failed to trigger Astro restart: " + err.message);
        }
      } finally {
        clearTimeout(timeout);
      }
    }
  },
};
