import jwt from "jsonwebtoken";
import fs from "fs";
import { prisma } from "../generated/prisma-client";
import { TokenModel } from "../types/graph";

const JWT_ISSUER = process.env.JWT_ISSUER || "";
const JWT_DEFAULT_AUDIENCE = process.env.JWT_DEFAULT_AUDIENCE || "";

const PRIVATE_KEY = fs.readFileSync("../certs/private.pem");
const PUBLIC_KEY = fs.readFileSync("../certs/public.pem");

const protectedSubject = [
  "access_token",
  "refresh_token",
  "authorization_code",
  "password",
  "client_credentials"
];

export const createToken = async (
  {
    sub: subject = "",
    aud: audience = JWT_DEFAULT_AUDIENCE,
    exp: expiresIn = 60 * 3 // 3m or 2h
  },
  data = {}
): Promise<TokenModel> => {
  if (subject in protectedSubject) {
    throw new Error("INVALID_SUBJECT");
  }

  const token = await jwt.sign(data, PRIVATE_KEY, {
    algorithm: "ES256",
    subject,
    audience,
    expiresIn,
    issuer: JWT_ISSUER
  });

  return {
    token,
    access_token: null,
    refresh_token: null,
    expires_in: expiresIn,
    token_type: "Bearer"
  };
};

export const createAccessToken = async (
  refreshToken: String
): Promise<TokenModel> => {
  const expiresIn = 60 * 60 * 2; // 2h

  const { id, aud: audience, jti } = await jwt.verify(refreshToken, PUBLIC_KEY);

  const userToken = await prisma.token({ id: jti });
  if (!userToken) throw new Error("INVALID_TOKEN");
  if (userToken.deleted) throw new Error("DELETED_TOKEN");

  const maxLife =
    new Date(`${userToken.accessedAt}`).getTime() + 1000 * 60 * 24 * 60; // 60d
  if (maxLife < new Date().getTime()) throw new Error("EXPIRED_TOKEN");

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
      verified: user.verified
    },
    PRIVATE_KEY,
    {
      algorithm: "ES256",
      subject: "access_token",
      audience,
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

export const createRefreshToken = async (
  { aud: audience = JWT_DEFAULT_AUDIENCE },
  { id }
): Promise<TokenModel> => {
  const token = await prisma.createToken({
    userId: id,
    accessedAt: new Date()
  });

  const jwtToken = await jwt.sign({ id }, PRIVATE_KEY, {
    jwtid: token.id,
    algorithm: "ES256",
    subject: "refresh_token",
    audience,
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
