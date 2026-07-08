import { mergeResolvers } from "@graphql-tools/merge";

import healthResolver from "./health-check";
import userResolver from "./user";

export const resolvers = mergeResolvers([healthResolver, userResolver]);
