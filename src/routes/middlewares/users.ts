import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { ENV } from "../../config";
import { UserModel } from "../../models";

export const isLoggedIn = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.get("Authorization")?.replace("Bearer ", "");
  if (!token) throw new Error("Unauthorized!");
  try {
    const verifyToken: any = verify(token, ENV.JWT.SECRET);
    const existingUser = await UserModel.findOne({
      _id: verifyToken.uid,
      name: verifyToken.name,
      email: verifyToken.email,
      department: verifyToken.department,
      role: verifyToken.role,
    });
    if (!existingUser) throw new Error("Unauthorized!");
    // @ts-ignore
    req.user = existingUser;
    next();
  } catch (err) {
    throw new Error("Unauthorized!");
  }
};
