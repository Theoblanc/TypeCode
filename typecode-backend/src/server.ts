import { ApolloServer } from "apollo-server-express";
import express from "express";
import schema from "./schema";
import { context } from "./utils/parseAuthHeader"



const server = new ApolloServer({
  schema,
  context
});

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000/graphql  `)
);
