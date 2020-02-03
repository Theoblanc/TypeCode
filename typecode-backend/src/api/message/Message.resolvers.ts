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
      const userId = await ctx.user.id;

      if (!userId) {
        console.log(ctx.user.id);
        console.log("로그인이 안되어있습니다.");
      }

      try {
        await ctx.prisma.createMessage({
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
        return { ok: true };
      } catch (e) {
        return { ok: false, error: e.message };
      }
    }
  }
};

export default resolvers;
