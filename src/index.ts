import express from "express";
import { expressMiddleware } from "@as-integrations/express5";

import runGQLServer from "./graphql";

async function bootstrap() {
  const app = express();

  app.use(express.json());

  const server = await runGQLServer();

  app.use("/graphql", expressMiddleware(server));

  app.listen(4000, () => {
    console.log("Express Server is running");
  });
}

bootstrap();
