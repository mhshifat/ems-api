import { sign } from "jsonwebtoken";
import { ENV } from "../config";
import { UserModelType } from "../models/user";

export const createToken = (user: UserModelType): string => {
  const payload = {
    uid: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    department: user.department,
  };
  const token = sign(payload, ENV.JWT.SECRET, { expiresIn: 24 * 60 * 60 });
  return token;
};
