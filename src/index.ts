import express from "express";
import { expressMiddleware } from "@as-integrations/express5";

import runGQLServer from "./graphql";

async function bootstrap() {
  const app = express();

  app.use(express.json());

  const server = await runGQLServer();

  app.use("/graphql", expressMiddleware(server));

  const PORT = process.env.PORT || 8080;

  app.listen(PORT, () => {
    console.log("Express Server is running");
  });
}

bootstrap();
