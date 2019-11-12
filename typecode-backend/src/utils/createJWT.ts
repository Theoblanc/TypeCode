import jwt from "jsonwebtoken";

const createJWT = (id: number): string => {
  const JWT_DEFAULT_AUDIENCE = process.env.JWT_DEFAULT_AUDIENCE || "";

  const token = jwt.sign(
    {
      id,
      name,
      sub: "TypeCode",
      aud: JWT_DEFAULT_AUDIENCE,
      exp: 60 * 3 // 3m or 2h,
    },
    process.env.JWT_TOKEN || ""
  );
  return token;
};

export default createJWT;
