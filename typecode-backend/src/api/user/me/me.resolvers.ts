import { Resolvers } from "src/types/resolvers";

const resolvers: Resolvers = {
  Query: {
    me: async (_, __, ctx): Promise<any> => {
      if (!ctx.user) {
        throw Error("로그인이 안되어 있습니다.");
      }

      const userId = await ctx.user.id;

      const user = await ctx.prisma.user({
        id: userId
      });

      const friends = await ctx.prisma
        .user({
          id: userId
        })
        .friends();

      return { user, friends };
    }
  }
};

export default resolvers;
