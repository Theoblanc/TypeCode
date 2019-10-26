import { prisma } from "../../../generated/prisma-client";

const resolvers = {
  Query: {
    me: async () => {
      return await prisma.user;
    }
  }
};

export default resolvers;
