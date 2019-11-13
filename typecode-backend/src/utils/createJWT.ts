import jwt from "jsonwebtoken";
import fs from "fs";

const PRIVATE_KEY = fs.readFileSync("../../certs/primarykey.pem");

const createJWT = (id: number, password: string): string => {
  const JWT_DEFAULT_AUDIENCE = process.env.JWT_DEFAULT_AUDIENCE || "";

  const token = jwt.sign(
    {
      id
    },
    PRIVATE_KEY || "",
    {
      algorithm: "ES256",
      sub: "TypeCode",
      aud: JWT_DEFAULT_AUDIENCE,
      exp: 60 * 3 // 3m or 2h,
    }
  );
  return token;
};

export default createJWT;
