import { ApolloServer } from "apollo-server-express";
import express from "express";

import schema from "./schema";
import { prisma } from "./generated/prisma-client";
import { Prisma } from "./generated/prisma-client";

export interface Context {
  prisma: Prisma;
  request: any;
}

const server = new ApolloServer({
  schema,
  context: request => ({
    ...request,
    prisma
  })
});

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
