import { GraphQLServer } from "graphql-yoga";

import schema from "./schema";
import { parseAuthHeader } from "./utils/parseAuthHeader";

const context = async ({ request }) => {
  const user = await parseAuthHeader(request.headers.authorization);
  return { ...request, user /*, fcm*/ };
};

const server = new GraphQLServer({
  schema,
  context
});

server.start(() => {
  console.log("Server is running on http://localhost:4000");
});
