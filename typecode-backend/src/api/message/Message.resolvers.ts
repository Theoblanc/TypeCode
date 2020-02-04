import { Resolvers } from "src/types/resolvers";
import {
  CreateMessageMutationArgs,
  SendMessageQueryArgs
} from "src/types/graph";

const resolvers: Resolvers = {
  Query: {
    sendMessage: async (_, args: SendMessageQueryArgs, ctx) => {
      const { roomId } = args;
      const userId = await ctx.user.id;

      if (!userId) {
        console.log("로그인이 안돼어 있습니다.");
      }

      try {
        return await ctx.prisma.messages({
          where: {
            room: {
              id: roomId
            }
          }
        });
      } catch (e) {
        console.log(e.messages);
      }
    }
  },

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
