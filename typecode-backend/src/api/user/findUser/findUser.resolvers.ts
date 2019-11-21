import { Resolvers } from "src/types/resolvers";

const resolvers: Resolvers = {
  Query: {
    findUser: async (_, __, ctx): Promise<any> => {
      const { userId } = ctx.prisma.user.id;
      console.log(userId);

      const users = ctx.prisma.users({
        where: {
          user_in: {
            id: userId
          }
        }
      });

      return users;
    }
  }
};

export default resolvers;
