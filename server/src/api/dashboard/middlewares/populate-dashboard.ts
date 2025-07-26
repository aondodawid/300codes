/**
 * `populate-dashboard` middleware
 */

const populate = {
  populate: {
    headline: {
      on: {
        "shared.title": {
          populate: true,
        },
        "shared.paragraph": {
          populate: true,
        },
      },
    },
    frame: {
      on: {
        "shared.stats-container-big": {
          populate: {
            icon: {
              populate: {
                fields: ["url", "alternativeText", "name", "width", "height"],
              },
            },
            image: {
              populate: {
                fields: ["url", "alternativeText", "name", "width", "height"],
              },
            },
          },
        },
        "shared.stats-container": {
          populate: {
            icon: {
              fields: ["url", "alternativeText", "name", "width", "height"],
            },
          },
        },
      },
    },
  },
};

import type { Core } from "@strapi/strapi";

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  console.log("populate-dashboard middleware");
  // Add your own logic here.
  return async (ctx, next) => {
    ctx.query = {
      ...ctx.query,
      ...populate,
    };
    strapi.log.info("In populate-dashboard middleware.");

    await next();
  };
};
