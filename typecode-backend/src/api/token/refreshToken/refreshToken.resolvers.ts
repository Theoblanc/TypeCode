import { Resolvers } from "src/types/resolvers";

const resolvers: Resolvers = {
  Mutation: {
    createRefreshoken: async (_, args, ctx): Promise<any> => {
      const { id, accessToken } = args;

      const userId = ctx.user.id;

      if (accessToken.exp == )
    }
  }
};

export default resolvers;
