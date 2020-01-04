import { Resolvers } from "src/types/resolvers";
import { SendMessageQueryArgs } from "src/types/graph";

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
  }
};

export default resolvers;
