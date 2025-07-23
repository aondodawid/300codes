/**
 * about router.
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter("api::design.design", {
  config: {
    find: {
      middlewares: ["api::design.populate-design"],
    },
    findOne: {
      middlewares: ["api::design.populate-design"],
    },
  },
});