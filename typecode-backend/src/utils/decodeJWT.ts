import jwt from "jsonwebtoken";
import { prisma, User } from "src/generated/prisma-client";
import fs from "fs";

const PUBLIC_KEY = fs.readFileSync("../../certs/publickey.pem");

const decodeJWT = async (token: string): Promise<User | null> => {
  try {
    const decoded: any = jwt.verify(token, PUBLIC_KEY);
    const { id } = decoded;
    const user = await prisma.user({ id });
    return user;
  } catch (error) {
    return null;
  }
};

export default decodeJWT;
