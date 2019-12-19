import { Resolvers } from "src/types/resolvers";

const resolvers: Resolvers = {
  Query: {
    findMyrooms: async (_, __, ctx): Promise<any> => {
      // const userId = ctx.user;
      console.log("ctx", ctx.user);

      try {
        return await ctx.prisma.rooms({
          where: {
            participants_some: {
              // id: userId.id
            }
          }
        });
      } catch (e) {
        return new Error(e);
      }
    }
  }
};

export default resolvers;
