import ApolloClient from "apollo-boost";

const resolvers = {
  Mutation: {
    logUserIn: (_, { token }, { cache }) => {
      localStorage.setItem("token", token);
      cache.writeData({
        data: {
          isLoggedIn: true
        }
      });

      return null;
    },

    logUserOut: (_, __, { cache }) => {
      localStorage.removeItem("token");
      window.location.href = "/login";
      return null;
    }
  }
};

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql ",
  clientState: {
    resolvers
  }
});
export default client;
