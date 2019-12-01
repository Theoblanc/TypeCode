import jwt from "jsonwebtoken";
import fs from "fs";
import { prisma } from "../generated/prisma-client";

const PUBLIC_KEY = fs.readFileSync("../certs/public.pem");
interface IGetAccessTokenFromHeader {
  (header: any): string;
}

const getAccessTokenFromHeader: IGetAccessTokenFromHeader = (headers) => {
  if (!headers.authorization) {
    headers.authorization = ""
  }
  return headers["authorization"].replace(/Bearer /i, "");
};

interface IGetUserFromAccessToken {
  (accessToken: string): Promise<any | null>;
}

const getUserFromAccessToken: IGetUserFromAccessToken = async (
  accessToken: string
) => {
  try {
    const JWT: any = await jwt.verify(accessToken, PUBLIC_KEY);
    if (JWT.sub === "access_token") {
      return JWT
    };
  } catch (e) { } // 비회원의 경우, try-catch 없이 jwt.verify에서 실패하면 시스템 중단
  return null;
};


export const context = async ({ req }: any) => {
  const accessToken = getAccessTokenFromHeader(req.headers);
  const user = await getUserFromAccessToken(accessToken);
  return { ...req, user, prisma };
};