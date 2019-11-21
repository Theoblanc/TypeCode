const resolvers = {
  Query: {
    me: async (_, __, ctx) => {
      const { userId } = ctx.prisma.user.id;
      const user = await ctx.prisma.user({ userId });

      return user;
    }
  }
};

export default resolvers;
