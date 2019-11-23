import bcrypt from "bcrypt";
import { Context } from "src/utils";
import { Resolvers } from "src/types/resolvers";

const resolvers: Resolvers = {
  Mutation: {
    signup: async (_, args, ctx: Context): Promise<Boolean> => {
      // console.log(args);
      const { name, email, password } = args;
      console.log(ctx);
      const emailVertify = await ctx.prisma.user({ email });
      // console.log(emailVertify);
      if (emailVertify) {
        throw new Error("이미 아이디가 존재합니다");
      }
      const user = await ctx.prisma.createUser({
        name,
        email,
        password: await bcrypt.hash(password, 10)
      });
      if (!user) throw new Error("아이디를 생성할수 없습니다.");
      return true;
    }
  }
};

export default resolvers;
