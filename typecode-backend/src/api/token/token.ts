import { Resolvers } from "src/types/resolvers";
import { createAccessToken } from "src/utils/createJWT";

const resolvers: Resolvers = {
  Mutation: {
    token: async (obj, { grant_type, refresh_token, scope }, ctx) => {
      if (grant_type === "refresh_token") {
        const token = await createAccessToken(refresh_token);
        return token;
      } else {
        throw new Error("INVALID_GRANT_TYPE");
      }
    }
  }
};

export default resolvers;
