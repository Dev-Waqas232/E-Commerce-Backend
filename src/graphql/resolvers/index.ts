import { mergeResolvers } from "@graphql-tools/merge";

import healthResolver from "./health-check";
import userResolver from "./user";
import authResolver from "./auth";

export const resolvers = mergeResolvers([
  healthResolver,
  userResolver,
  authResolver,
]);
