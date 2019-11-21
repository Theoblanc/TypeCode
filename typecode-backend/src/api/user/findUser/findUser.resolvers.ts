import { Resolvers } from "src/types/resolvers";

const resolvers: Resolvers = {
  Query: {
    findUser: async (_, args, ctx): Promise<any> => {
      const { email } = args;
      console.log(email);

      const user = ctx.prisma.user({
        email
      });

      return user;
    }
  }
};

export default resolvers;
