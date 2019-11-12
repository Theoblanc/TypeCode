import { GraphQLServer } from "graphql-yoga";
import schema from "./schema";
import { authenticateJwt } from "./utils/passport";

const server = new GraphQLServer({
  schema,
  context: ({ request }) => ({ request })
});

server.express.use(authenticateJwt);

console.log(authenticateJwt);

server.start(() => console.log("Server is running on http://localhost:4000"));
