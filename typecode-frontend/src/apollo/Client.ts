import ApolloClient from "apollo-boost";

const defaults = {
  isLoggedIn: Boolean(localStorage.getItem("refresh_token")) || false
};

const resolvers = {
  Mutation: {
    logUserIn: (_, { refresh_token }, { cache }) => {
      localStorage.setItem("refresh_token", refresh_token);
      cache.writeData({
        data: {
          isLoggedIn: true
        }
      });

      return null;
    },

    logUserOut: (_, __, { cache }) => {
      localStorage.removeItem("refresh_token");
      window.location.href = "/";
      return null;
    }
  }
};

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql ",
  clientState: {
    resolvers,
    defaults
  },
  headers: {
    authorization: `Bearer ${localStorage.getItem("refresh_token")}`
  }
});
export default client;
