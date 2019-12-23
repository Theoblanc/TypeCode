import { Resolvers } from "src/types/resolvers";

const resolvers: Resolvers = {
  Query: {
    getUsers: async (_, __, ctx): Promise<any> => {
      if (!ctx.user) {
        throw Error("로그인이 안되어 있습니다.");
      }

      const userId = await ctx.user.id;

      try {
        return await ctx.prisma.user({
          id: userId
        });
      } catch (e) {
        console.log(e);
      }
    }
  }
};

export default resolvers;
