// server/utils/tokenUtils.js
import jwt from "jsonwebtoken";

export const generateToken = (user) => {
  return jwt.sign({ username: user.username }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};

export const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};
