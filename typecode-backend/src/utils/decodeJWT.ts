import jwt from "jsonwebtoken";
import { prisma, User } from "src/generated/prisma-client";

const decodeJWT = async (token: string): Promise<User | null> => {
  try {
    const decoded: any = jwt.verify(token, process.env.JWT_TOKEN || "");
    const { id } = decoded;
    const user = await prisma.user({ id });
    return user;
  } catch (error) {
    return null;
  }
};

export default decodeJWT;
