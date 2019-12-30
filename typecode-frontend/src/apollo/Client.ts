import ApolloClient, { InMemoryCache } from "apollo-boost";
import jwtDecode from "jwt-decode";

const defaults = {
  isLoggedIn: Boolean(localStorage.getItem("refresh_token")) || false
};

///여기가 잘못되었음 왜냐하면 refresh_token으로 판단함

const resolvers = {
  Mutation: {
    logUserIn: (_, { access_token }, { cache }) => {
      localStorage.setItem("access_token", access_token);
      cache.writeData({
        data: {
          isLoggedIn: true
        }
      });
      console.log("로그인 하였습니다.");

      return null;
    },

    logUserOut: (_, __, { cache }) => {
      localStorage.removeItem("access_token");
      window.location.href = "/";
      cache.writeData({
        data: {
          isLoggedIn: false
        }
      });
      console.log("로그아웃 하셨습니다.");
      return null;
    }
  }
};

const getToken = async () => {
  const refresh_token = await localStorage.getItem("refresh_token");
  console.log("123", refresh_token);

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

    //여기 부터 추가해야함 refresh token

    return refresh_token;
  }
  return null;
};

const cache = new InMemoryCache();

const client = new ApolloClient({
  cache,
  uri: "http://localhost:4000/graphql",
  clientState: {
    resolvers,
    defaults
  },
  request: async operation => {
    let token: String | null;
    try {
      token = await getToken();
      console.log("access_ token111", token);

      //만약 기간이 만료되어 refresh token이 넘어온다면 여기서 처리 해야 할듯
      //createRefreshToken 호출하면 될려나?
    } catch (e) {}
    operation.setContext({
      headers: {
        authorization: `Bearer ${localStorage.getItem("access_token")}`
      }
    });
  },
  fetchOptions: {
    credentials: "include"
  }
});
export default client;
