import { Resolvers } from "src/types/resolvers";
import { SendMessageMutationArgs } from "src/types/graph";

const resolvers: Resolvers = {
  Mutation: {
    sendMessage: async (_, args: SendMessageMutationArgs, ctx) => {
      const { user } = ctx.user.id;
      const { roomId, message, toId } = args;
      let room;
      if (roomId === undefined) {
        if (user.id !== toId) {
          room = await ctx.prisma.createRoom({
            participants: {
              connect: [{ id: toId }, { id: user.id }]
            }
          });
        }
      } else {
        room = await ctx.prisma.room({ id: roomId });
      }
      if (!room) {
        throw Error("Room not found");
      }
      const participants = await ctx.prisma
        .room({ id: room.id })
        .participants();
      const getTo = participants.filter(
        participant => participant.id !== user.id
      )[0];
      return ctx.prisma.createMessage({
        text: message,
        from: {
          connect: { id: user.id }
        },
        to: {
          connect: {
            id: roomId ? getTo.id : toId
          }
        },
        room: {
          connect: {
            id: room.id
          }
        }
      });
    }
  }
};

export default resolvers;
