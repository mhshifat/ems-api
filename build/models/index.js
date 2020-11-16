"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.TaskModel = exports.CommentModel = void 0;
var comment_1 = require("./comment");
Object.defineProperty(exports, "CommentModel", { enumerable: true, get: function () { return __importDefault(comment_1).default; } });
var task_1 = require("./task");
Object.defineProperty(exports, "TaskModel", { enumerable: true, get: function () { return __importDefault(task_1).default; } });
var user_1 = require("./user");
Object.defineProperty(exports, "UserModel", { enumerable: true, get: function () { return __importDefault(user_1).default; } });
