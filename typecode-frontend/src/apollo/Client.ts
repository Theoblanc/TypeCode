import ApolloClient, { InMemoryCache } from "apollo-boost";
import jwtDecode from "jwt-decode";

const defaults = {
  isLoggedIn: Boolean(localStorage.getItem("access_token")) || false
};

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

  if (refresh_token) {
    const access_token = await localStorage.getItem("access_token");

    if (access_token) {
      try {
        const { exp } = jwtDecode(access_token);

        console.log(exp);
        //토큰이 만료기간 안끝나면
        if (Date.now() < (exp - 600) * 1000) {
          return access_token;
        } else {
          localStorage.removeItem("access_token");
        }
      } catch (e) {}
    }

    //acess_token 이 없으면

    const res = await fetch("http://localhost:4000/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        operationName: "token",
        query: `
          mutation token(
            $token: String!
          ) {
            token(
              grant_type: "refresh_token",
              refresh_token: $token
            ) {
              access_token
            }
          }
        `,
        variables: {
          token: refresh_token
        }
      })
    });

    const { data } = await res.json();
    const token = data.token.access_token;
    console.log("token", token);
    await localStorage.setItem("access_token", token);
    return token;
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
      //accsstoke
      console.log(token);

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
