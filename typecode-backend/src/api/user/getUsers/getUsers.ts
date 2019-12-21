import { Resolvers } from "src/types/resolvers";

const resolvers: Resolvers = {
  Query: {
    getUsers: async (_, __, ctx): Promise<any> => {
      const userId = ctx.user;
      console.log(userId);

      if (!userId) {
        throw Error("로그인이 안되어 있습니다.");
      }

      const user = ctx.prisma.users({
        id: userId
      });

      console.log(user);

      return user;
    }
  }
};

export default resolvers;
