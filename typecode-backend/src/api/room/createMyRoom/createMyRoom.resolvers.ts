import { Resolvers } from "src/types/resolvers";
import {
  createMyRoomResponse,
  CreateMyRoomMutationArgs
} from "src/types/graph";

const resolvers: Resolvers = {
  Mutation: {
    createMyRoom: async (
      _,
      args: CreateMyRoomMutationArgs,
      ctx
    ): Promise<createMyRoomResponse> => {
      const userId = ctx.user.id;
      const { roomName } = args;

      try {
        await ctx.prisma.createRoom({
          userId,
          roomName
        });
      } catch (error) {
        return { ok: false, error: error.message };
      }

      return { ok: true, error: null };
    }
  }
};

export default resolvers;
