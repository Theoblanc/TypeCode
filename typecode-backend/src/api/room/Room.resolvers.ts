import { Resolvers } from "src/types/resolvers";
import {
  createMyRoomResponse,
  CreateMyRoomMutationArgs
} from "src/types/graph";

const resolvers: Resolvers = {
  Query: {
    fetchMyrooms: async (_, __, ctx): Promise<any> => {
      const userId = ctx.user;

      try {
        return await ctx.prisma.rooms({
          where: {
            participants_some: {
              id: userId.id
            }
          }
        });
      } catch (e) {
        return new Error(e);
      }
    }
  },
  Mutation: {
    createMyRoom: async (
      _,
      args: CreateMyRoomMutationArgs,
      ctx
    ): Promise<createMyRoomResponse> => {
      const userId = ctx.user.id;
      const { roomName } = args;

      // const roomExist = await ctx.prisma.$exists.room({
      //   userId: { id: userId },
      //   roomName: { id: roomName }
      // });

      // if (!roomExist) {
      //   console.log("방이름이 존재합니다.");
      // }

      try {
        await ctx.prisma.createRoom({
          userId,
          roomName,
          participants: {
            connect: {
              id: userId
            }
          }
        });
      } catch (error) {
        return { ok: false, error: error.message };
      }

      return { ok: true, error: null };
    }
  }
};

export default resolvers;
