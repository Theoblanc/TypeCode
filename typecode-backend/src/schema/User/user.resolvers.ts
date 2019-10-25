import { Resolvers } from "src/types/resolvers";
import { User } from "src/entities/MongoDB/User/User.mongo";

const resolvers: Resolvers = {
  Query: {
    me: async () => {
      return await User;
    }
  }
};

export default resolvers;
