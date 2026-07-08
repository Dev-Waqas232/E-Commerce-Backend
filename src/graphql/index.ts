import { ApolloServer } from "@apollo/server";

import { typeDefs } from "./schemas";
import { resolvers } from "./resolvers";

export default async function runGQLServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();

  return server;
}
