import { prisma } from "../../generated/prisma-client";
export default {
  User: {
    friends: ({ id }) => prisma.user({ id }).friends(),
    rooms: ({ id }) => prisma.user({ id }).rooms()
  }
};
