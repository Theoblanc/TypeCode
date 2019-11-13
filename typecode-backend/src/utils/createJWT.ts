import jwt from "jsonwebtoken";
import { TokenModel } from "src/types/graph";
import fs from "fs";
import { prisma } from "src/generated/prisma-client";

const PUBLIC_KEY = fs.readFileSync("../certs/publickey.pem");
const PRIVATE_KEY = fs.readFileSync("./certs/private.pem");

const JWT_ISSUER = process.env.JWT_ISSUER || "";
const JWT_DEFAULT_AUDIENCE = process.env.JWT_DEFAULT_AUDIENCE || "";

const protectedSubject = [
  "access_token",
  "refresh_token",
  "authorization_code",
  "password",
  "client_credentials"
];

export const createJWT = async ({ id, sub }): Promise<TokenModel> => {
  if (sub in protectedSubject) {
    throw new Error("INVALID_SUBJECT");
  }

  console.log("sub", sub);
  const token = await jwt.sign(
    {
      id //payload
    },
    process.env.JWT_TOKEN || "",
    {
      algorithm: "ES256",
      sub,
      aud: JWT_DEFAULT_AUDIENCE,
      exp: 60 * 3, // 3m or 2h
      iss: JWT_ISSUER
    },
    (err, token) => {
      console.log(token);
    }
  ); //토큰 생성
  return token;
};

export const assessJWT = async (refreshToken: String): Promise<TokenModel> => {
  const expiresIn = 60 * 60 * 2; // 2h

  const { id, aud, jti } = await jwt.verify(refreshToken, PUBLIC_KEY);

  const userToken = await prisma.token({ id: jti });
  if (!userToken) throw new Error("INVALID_TOKEN");
  if (userToken.deleted) throw new Error("DELETED_TOKEN");

  const maxLife =
    new Date(`${userToken.accessedAt}`).getTime() + 1000 * 60 * 24 * 60; // 60d
  if (maxLife < new Date().getTime()) throw new Error("EXPIRED_TOKEN");

  console.log(maxLife);
  console.log(typeof maxLife);

  await prisma.updateToken({
    where: { id: jti },
    data: { accessedAt: new Date() }
  });

  const user = await prisma.user({ id });
  if (!user) throw new Error("INVALID_USER");

  const token = await jwt.sign(
    {
      id,
      name: user.name,
      email: user.email,
      phoneNumber: user.phoneNumber,
      phoneNumberVerified: user.phoneNumberVerified
    },
    PRIVATE_KEY,
    {
      algorithm: "ES256",
      sub: "access_token",
      aud,
      expiresIn,
      issuer: JWT_ISSUER
    }
  );

  return {
    token,
    access_token: token,
    refresh_token: null,
    expires_in: expiresIn,
    token_type: "Bearer"
  };
};

export const refreshJWT = async ({ id, aud }): Promise<TokenModel> => {
  const token = await prisma.createToken({
    userId: id,
    accessedAt: new Date()
  });

  const jwtToken = await jwt.sign({ id }, PRIVATE_KEY, {
    jwtid: token.id,
    algorithm: "ES256",
    subject: "refresh_token",
    aud,
    issuer: JWT_ISSUER
  });

  return {
    token: jwtToken,
    access_token: null,
    refresh_token: jwtToken,
    expires_in: null,
    token_type: "Bearer"
  };
};
