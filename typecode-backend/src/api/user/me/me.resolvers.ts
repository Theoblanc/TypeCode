const resolvers = {
  Query: {
    me: async (_, args) => {
      console.log("getMe", args);
      return "1234";
    }
  }
};

export default resolvers;
