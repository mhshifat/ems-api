import { compare, hash } from "bcryptjs";
import { LoginBody, RegisterBody, UpdateUserBody } from "../controllers/users";
import { createToken } from "../helpers/auth";
import { UserModel } from "../models";
import { UserDocumentType, UserModelType } from "../models/user";

export default () => {
  return {
    async findUser(query: Object): Promise<UserModelType> {
      const existingUser = await UserModel.findOne(query).select("-password");
      if (!existingUser) {
        throw new Error("404:Not found!");
      }
      return existingUser;
    },
    async registerUser(body: RegisterBody): Promise<UserDocumentType> {
      const existingUser = await UserModel.findOne({ email: body.email });
      if (existingUser) {
        throw new Error("400:User already exist!");
      }
      body.password = await hash(body.password, 10);
      const createdUser = await UserModel.create(body);
      return createdUser;
    },
    async loginUser(
      body: LoginBody
    ): Promise<{ token: string; user: UserDocumentType }> {
      const existingUser = await this.findUser({ email: body.email });
      const isPwdValid = await compare(
        existingUser?.password || "",
        body.password
      );
      if (isPwdValid) {
        throw new Error("400:Wrong credentials!");
      }
      const token = createToken(existingUser);
      existingUser.password = undefined;
      return { token, user: existingUser };
    },
    async getUsers(): Promise<UserDocumentType[]> {
      const allUsers = await UserModel.find({}).select("-password");
      return allUsers;
    },
    async getUser(id: string): Promise<UserDocumentType> {
      const existingUser = await this.findUser({ _id: id });
      return existingUser;
    },
    async updateUser(
      id: string,
      body: UpdateUserBody
    ): Promise<UserDocumentType> {
      const existingUser = await this.findUser({ _id: id });
      existingUser.set(body);
      await existingUser.save();
      return existingUser;
    },
    async deleteUser(id: string): Promise<UserDocumentType> {
      const existingUser = await this.findUser({ _id: id });
      await existingUser.remove();
      return existingUser;
    },
  };
};
