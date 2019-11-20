import { Resolvers } from "src/types/resolvers";

const resolvers: Resolvers = {
  Query: {
    findMyrooms: async (_, __, ctx): Promise<any> => {
      const { userId } = ctx.prisma.user.id;
      console.log(userId);

      const rooms = ctx.prisma.rooms({ where: { userId } });
      if (!rooms) return null;

      return rooms;
    }
  }
};

export default resolvers;
