import { prisma } from "src/generated/prisma-client";

const resolvers = {
  Query: {
    me: async (_, args, ctx) => {
      const userId = ctx.user.id;
      const getMe = await prisma.user({ id: userId });
      console.log("getMe", getMe);
    }
  }
};

export default resolvers;
