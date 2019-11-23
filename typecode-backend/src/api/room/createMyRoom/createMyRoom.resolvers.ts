import { Resolvers } from "src/types/resolvers";

const resolvers: Resolvers = {
  Mutation: {
    createMyRoom: async (_, args, ctx): Promise<Boolean> => {
      console.log(ctx.prisma);
      const { userId } = args;

      const room = await ctx.prisma.createRoom({
        userId
      });
      if (!room) false;
      return true;
    }
  }
};

export default resolvers;

//검증 완료
