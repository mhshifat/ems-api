import Joi, { StringSchema } from "joi";
import { LoginBody, RegisterBody } from "../controllers/users";

export const registerFormValues: Record<keyof RegisterBody, StringSchema> = {
  name: Joi.string().required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().required(),
  department: Joi.string().required(),
  role: Joi.string().required(),
};

export const registerFormValuesValidation = Joi.object<RegisterBody>(
  registerFormValues
);

export const loginFormValues: Record<keyof LoginBody, StringSchema> = {
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().required(),
};

export const loginFormValuesValidation = Joi.object<LoginBody>(loginFormValues);
