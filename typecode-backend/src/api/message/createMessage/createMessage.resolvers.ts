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
      const { userId } = await ctx.user.id;

      try {
        return await ctx.prisma.createMessage({
          text,
          from: {
            connect: {
              id: userId
            }
          },
          room: {
            connect: {
              id: roomId
            }
          }
        });
      } catch (e) {
        return { ok: false, error: e.message };
      }
    }
  }
};

export default resolvers;
