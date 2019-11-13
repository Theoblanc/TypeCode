import { ApolloServer } from "apollo-server-express";
import express from "express";

import schema from "./schema";

const server = new ApolloServer({
  schema
});

const app = express();
server.applyMiddleware({ app });

app.listen(() => {
  console.log("Server is running on http://localhost:4000");
});
