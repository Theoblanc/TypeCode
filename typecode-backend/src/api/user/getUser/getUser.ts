import { Resolvers } from "src/types/resolvers";

const resolvers: Resolvers = {
  Query: {
    getUser: async (_, args, ctx): Promise<any> => {
      if (!ctx.user) {
        throw Error("You need to log in to perform this action");
      }

      const user = ctx.user.id

      return user;
    }
  }
};

export default resolvers;
