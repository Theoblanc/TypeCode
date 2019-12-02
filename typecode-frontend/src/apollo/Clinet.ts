import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";

const LOCAL_HOST = "https://localhost:4000/graphql";

const link = createHttpLink({
  fetch,
  uri: LOCAL_HOST
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});

export default client;
