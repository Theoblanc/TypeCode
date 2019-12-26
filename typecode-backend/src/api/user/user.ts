<<<<<<< HEAD
import { prisma } from "../../generated/prisma-client";
export default {
  User: {
    friends: ({ id }) => prisma.user({ id }).friends(),
    rooms: ({ id }) => prisma.user({ id }).rooms()
  }
};
=======
const resolvers = (_, __, ctx) => {
  User: {
    following: ({ id }) => ctx.prisma.user({ id }).following();
  }
};

export default resolvers;
>>>>>>> f411c3957f43ec1e22e83d4116a0c6ed26319abd
