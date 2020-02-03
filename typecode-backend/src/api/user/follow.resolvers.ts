import { Resolvers } from "src/types/resolvers";

const resolvers: Resolvers = {
  Mutation: {
    follow: async (_, args, ctx): Promise<any> => {
      const userId = ctx.user.id;
      const { id } = args;

      try {
        await ctx.prisma.updateUser({
          where: { id: userId },
          data: {
            friends: {
              connect: {
                id
              }
            }
          }
        });
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    }
  }
};

export default resolvers;
