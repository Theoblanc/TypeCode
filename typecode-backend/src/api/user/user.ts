const resolvers = (_, __, ctx) => {
  User: {
    following: ({ id }) => ctx.prisma.user({ id }).following();
  }
};

export default resolvers;
