import { Request, Response } from "express";
import { sendFailure500Response, sendSuccess200Response } from "../helpers";
import { UsersService } from "../services";
import {
  loginFormValuesValidation,
  registerFormValuesValidation,
} from "../validators/auth";

export interface RegisterBody {
  name: string;
  email: string;
  password: string;
  department: string;
  role: string;
}

export interface LoginBody {
  email: string;
  password: string;
}

export interface UpdateUserBody {
  name: string;
  email: string;
  department: string;
  role: string;
}

export default {
  async register(req: Request, res: Response) {
    try {
      const body = req.body as RegisterBody;
      await registerFormValuesValidation.validateAsync(body, {
        abortEarly: false,
      });
      const data = await UsersService().registerUser(body);
      return sendSuccess200Response(res, data);
    } catch (err) {
      return sendFailure500Response(res, err);
    }
  },
  async login(req: Request, res: Response) {
    try {
      const body = req.body as LoginBody;
      await loginFormValuesValidation.validateAsync(body, {
        abortEarly: false,
      });
      const data = await UsersService().loginUser(body);
      return sendSuccess200Response(res, data);
    } catch (err) {
      return sendFailure500Response(res, err);
    }
  },
  async getUsers(req: Request, res: Response) {
    try {
      const data = await UsersService().getUsers();
      return sendSuccess200Response(res, data);
    } catch (err) {
      return sendFailure500Response(res, err);
    }
  },
  async getUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = await UsersService().getUser(id);
      return sendSuccess200Response(res, data);
    } catch (err) {
      return sendFailure500Response(res, err);
    }
  },
  async updateUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const body = req.body as UpdateUserBody;
      const data = await UsersService().updateUser(id, body);
      return sendSuccess200Response(res, data);
    } catch (err) {
      return sendFailure500Response(res, err);
    }
  },
  async deleteUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = await UsersService().deleteUser(id);
      return sendSuccess200Response(res, data);
    } catch (err) {
      return sendFailure500Response(res, err);
    }
  },
};
