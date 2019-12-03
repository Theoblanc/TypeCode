import { Resolvers } from "src/types/resolvers";

const resolvers: Resolvers = {
  Query: {
    findMyrooms: async (_, __, ctx): Promise<any> => {
      const userId = ctx.user.id

      const rooms = await ctx.prisma.rooms({
        where: {
          participants_some: {
            id: userId.id
          }
        }
      })

      if (!rooms) {
        console.log("123")
      }

      console.log(rooms)

      return rooms;
    }
  }
};

export default resolvers;
