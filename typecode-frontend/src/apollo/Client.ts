import ApolloClient, { InMemoryCache } from "apollo-boost";
import jwtDecode from "jwt-decode";

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

const getToken = async () => {
  const refresh_token = await localStorage.getItem("refresh_token");

  if (refresh_token) {
    const access_token = await localStorage.getItem("access_token");

    if (access_token) {
      try {
        const { exp } = jwtDecode(access_token);

        if (Date.now() < (exp - 600) * 1000) {
          return access_token;
        }
      } catch (e) {}
    }

    return refresh_token;
  }
  return null;
};

const cache = new InMemoryCache();

const client = new ApolloClient({
  cache,
  uri: "http://localhost:4000/graphql ",
  clientState: {
    resolvers,
    defaults
  },
  request: async operation => {
    let token: String | null;
    try {
      token = await getToken();
      console.log(token);
    } catch (e) {}
    operation.setContext({
      headers: {
        authorization: `Bearer ${localStorage.getItem("refresh_token")}`
      }
    });
  },
  fetchOptions: {
    credentials: "include"
  }
});
export default client;
