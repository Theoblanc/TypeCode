import { Resolvers } from "src/types/resolvers";
import {
  createMyRoomResponse,
  CreateMyRoomMutationArgs
} from "src/types/graph";

const resolvers: Resolvers = {
  Query: {
    fetchMyRooms: async (_, __, ctx): Promise<any> => {
      const userId = ctx.user.id;
      console.log("userId", userId);

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
      console.log("id", ctx.user);
      const userId = ctx.user.id;
      const { roomName } = args;

      if (!userId) {
        console.log("user가 없어요");
      }

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
