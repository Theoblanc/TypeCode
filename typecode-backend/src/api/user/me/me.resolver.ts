const resolvers = {
  Query: {
    user: (_, args, context, info) => {
      console.log("1234");
    }
  }
};

export default resolvers;
