import { Resolvers } from "src/types/resolvers";
import { CreateMessageMutationArgs } from "src/types/graph";

const resolvers: Resolvers = {
  Mutation: {
    createMessage: async (
      _,
      args: CreateMessageMutationArgs,
      ctx
    ): Promise<any> => {
      const { roomId, text } = args;
      const { userId } = ctx.userId;

      const room = await ctx.prisma
        .rooms({
          where: {
            id: roomId
          }
        })
        .user({
          userId
        });

      if (!room) return new Error("방이 없어용");

      const message = await ctx.prisma.createMessage({ text, from: userId });

      return message;
    }
  }
};

export default resolvers;
