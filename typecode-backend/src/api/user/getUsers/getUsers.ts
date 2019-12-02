import { Resolvers } from "src/types/resolvers";

const resolvers: Resolvers = {
  Query: {
    getUser: async (_, args, ctx): Promise<any> => {
      if (!ctx.user) {
        throw Error("로그인이 안되어 있습니다.");
      }

      const userId = ctx.user.id;

      const user = ctx.prisma.user({
        id: userId
      });

      return user.friends;
    }
  }
};

export default resolvers;
