"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginFormValuesValidation = exports.loginFormValues = exports.registerFormValuesValidation = exports.registerFormValues = void 0;
var joi_1 = __importDefault(require("joi"));
exports.registerFormValues = {
    name: joi_1.default.string().required(),
    email: joi_1.default.string()
        .email({ tlds: { allow: false } })
        .required(),
    password: joi_1.default.string().required(),
    department: joi_1.default.string().required(),
    role: joi_1.default.string().required(),
};
exports.registerFormValuesValidation = joi_1.default.object(exports.registerFormValues);
exports.loginFormValues = {
    email: joi_1.default.string()
        .email({ tlds: { allow: false } })
        .required(),
    password: joi_1.default.string().required(),
};
exports.loginFormValuesValidation = joi_1.default.object(exports.loginFormValues);
