/**
 * footer router.
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter("api::dashboard.dashboard", {
  config: {
    find: {
      middlewares: ["api::dashboard.populate-dashboard"],
    },
    findOne: {
      middlewares: ["api::dashboard.populate-dashboard"],
    },
  },
});
