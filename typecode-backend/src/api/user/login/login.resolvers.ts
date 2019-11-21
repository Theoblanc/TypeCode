import bcrypt from "bcrypt";
import {
  createAccessToken,
  createRefreshToken
} from "../../../utils/createJWT";
import { Resolvers } from "src/types/resolvers";
import { TokenModel } from "src/types/graph";

const resolvers: Resolvers = {
  Mutation: {
    login: async (_, args, ctx): Promise<TokenModel> => {
      const { email, password } = args;

      const user = await ctx.prisma.user({ email });

      if (!user) throw new Error("아이디가 없습니다.");
      if (!user.phoneNumberVerified)
        throw new Error("핸드폰 인증이 안되어 있습니다.");

      const isCorrectPassword = await bcrypt.compare(password, user.password);
      if (isCorrectPassword) {
        const { refresh_token } = await createRefreshToken(
          { aud: "" },
          { id: user.id }
        );
        if (!refresh_token) throw new Error("FAILURE_CREATING_TOKEN");

        const token = await createAccessToken(refresh_token);
        console.log("token", token);

        return { ...token, refresh_token };
      } else {
        throw new Error("PASSWORD_INCORRECT");
      }
    }
  }
};

export default resolvers;
