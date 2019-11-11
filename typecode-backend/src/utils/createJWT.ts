import jwt from "jsonwebtoken";

const createJWT = (id: number): string => {
  const JWT_DEFAULT_AUDIENCE = process.env.JWT_DEFAULT_AUDIENCE || "";

  const token = jwt.sign(
    {
      id
    },
    process.env.JWT_TOKEN || "",
    {
      sub: "",
      aud: JWT_DEFAULT_AUDIENCE,
      exp: 60 * 3 // 3m or 2h
    }
  );
  return token;
};

export default createJWT;
