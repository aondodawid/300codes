/**
 * `populate-design` middleware
 */
const populate = {
  field: ["designSystem"],
};

import type { Core } from "@strapi/strapi";

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  console.log("populate-design middleware");
  // Add your own logic here.
  return async (ctx, next) => {
    ctx.query = {
      ...ctx.query,
      ...populate,
    };
    strapi.log.info("In populate-design middleware.");

    await next();
  };
};
