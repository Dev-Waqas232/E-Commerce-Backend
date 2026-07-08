import { mergeResolvers } from "@graphql-tools/merge";

import healthResolver from "./health-check";

export const resolvers = mergeResolvers([healthResolver]);
