/**
 * `populate-global` middleware
 */

const populate = {
  populate: {
    favicon: {
      fields: ["url", "alternativeText", "name", "width", "height"],
    },
    defaultSeo: {
      populate: {
        shareImage: {
          fields: ["url", "alternativeText", "name", "width", "height"],
        },
      },
    },
    blocks: {
      on: {
        "shared.media": {
          populate: {
            file: {
              fields: ["url", "alternativeText", "name", "width", "height"],
            },
          },
        },
        "shared.html": {
          populate: true,
        },
        "shared.slider": {
          populate: {
            files: {
              fields: ["url", "alternativeText", "name", "width", "height"],
            },
          },
        },

        "shared.quote": {
          populate: true,
        },
        "shared.rich-text": {
          populate: true,
        },
      },
    },
  },
};

import type { Core } from "@strapi/strapi";

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  console.log("populate-global middleware");
  // Add your own logic here.
  return async (ctx, next) => {
    ctx.query = {
      ...ctx.query,
      ...populate,
    };
    strapi.log.info("In populate-global middleware.");

    await next();
  };
};
