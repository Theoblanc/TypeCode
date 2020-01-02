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
      const { userId } = ctx.user;

      console.log(roomId);
      console.log(text);
      console.log(userId);

      try {
        return await ctx.prisma.createMessage({
          text: text,
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
        console.log(e);
      }
    }
  }
};

export default resolvers;
