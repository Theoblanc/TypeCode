import { Resolvers } from "src/types/resolvers";
import bcrypt from "bcryptjs";
import { createAccessToken, createRefreshToken } from "../../utils/createJWT";
import { TokenModel } from "src/types/graph";

const resolvers: Resolvers = {
  Query: {
    me: async (_, __, ctx): Promise<any> => {
      if (!ctx.user) {
        throw Error("로그인이 안되어 있습니다.");
      }

      const userId = await ctx.user.id;

      const user = await ctx.prisma.user({
        id: userId
      });

      const friends = await ctx.prisma
        .user({
          id: userId
        })
        .friends();

      return { user, friends };
    },
    fetchUsers: async (_, __, ctx): Promise<any> => {
      if (!ctx.user) {
        throw Error("로그인이 안되어 있습니다.");
      }

      const userId = await ctx.user.id;

      try {
        return await ctx.prisma.user({
          id: userId
        });
      } catch (e) {
        console.log(e);
      }
    }
  },

  Mutation: {
    login: async (_, args, ctx): Promise<TokenModel> => {
      const { email, password } = args;

      const user = await ctx.prisma.user({ email });

      if (!user) throw new Error("아이디가 없습니다.");
      // if (!user.verified) throw new Error("핸드폰 인증이 안되어 있습니다.");
      const isCorrectPassword = await bcrypt.compareSync(
        password,
        user.password
      );
      console.log(isCorrectPassword);
      if (isCorrectPassword) {
        const { refresh_token } = await createRefreshToken(
          { aud: "" },
          { id: user.id }
        );
        if (!refresh_token) throw new Error("FAILURE_CREATING_TOKEN");

        const token = await createAccessToken(refresh_token);

        return { ...token, refresh_token };
      } else {
        throw new Error("PASSWORD_INCORRECT");
      }
    },
    signup: async (_, args, ctx): Promise<Boolean> => {
      const { name, email, password } = args;
      const emailVertify = await ctx.prisma.user({ email });
      if (emailVertify) {
        throw new Error("이미 아이디가 존재합니다");
      }
      const user = await ctx.prisma.createUser({
        name,
        email,
        password: await bcrypt.hashSync(password, 10)
      });
      if (!user) throw new Error("아이디를 생성할수 없습니다.");
      return true;
    },
    follow: async (_, args, ctx): Promise<any> => {
      const userId = ctx.user.id;
      const { id } = args;

      try {
        await ctx.prisma.updateUser({
          where: { id: userId },
          data: {
            friends: {
              connect: {
                id
              }
            }
          }
        });
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    }
  }
};

export default resolvers;
