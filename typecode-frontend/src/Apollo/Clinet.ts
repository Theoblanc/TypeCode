import ApolloClient from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";

const cache = new InMemoryCache();

const client = new ApolloClient({
  cache,
  uri: "https://localhost:4000/",
  fetchOptions: {
    credentials: "include"
  }
});

export default client;
