import { Resolvers } from "src/types/resolvers";

const resolvers: Resolvers = {
  Query: {
    me: async () => {
      return await User;
    }
  }
};

export default resolvers;
