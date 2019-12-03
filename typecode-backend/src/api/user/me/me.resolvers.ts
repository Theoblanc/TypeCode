import { Resolvers } from "src/types/resolvers";

const resolvers: Resolvers = {
  Query: {
    me: async (_, args, ctx): Promise<any> => {
      if (!ctx.user) {
        throw Error("로그인이 안되어 있습니다.");
      }

      const user = ctx.user.id;

      return user;
    }
  }
};

export default resolvers;
