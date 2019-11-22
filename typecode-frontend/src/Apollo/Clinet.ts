import ApolloClient from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://localhost:4000/"
});

export default client;
