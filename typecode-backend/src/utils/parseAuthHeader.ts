import jwt from "jsonwebtoken";
import fs from "fs";

const PUBLIC_KEY = fs.readFileSync("../certs/publickey.pem");

export const parseAuthHeader = async (authHeader = "") => {
  try {
    const token = authHeader.replace(/Bearer /i, "");
    const jwtObj = await jwt.verify(token, PUBLIC_KEY);
    if (jwtObj.sub === "access_token") return jwtObj;
  } catch (e) {}
  return null;
};
