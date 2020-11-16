"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = exports.TasksController = void 0;
var tasks_1 = require("./tasks");
Object.defineProperty(exports, "TasksController", { enumerable: true, get: function () { return __importDefault(tasks_1).default; } });
var users_1 = require("./users");
Object.defineProperty(exports, "UsersController", { enumerable: true, get: function () { return __importDefault(users_1).default; } });
