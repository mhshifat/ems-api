"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var controllers_1 = require("../../controllers");
var users_1 = require("../middlewares/users");
var router = express_1.default.Router();
router.get("/", users_1.isLoggedIn, controllers_1.TasksController.getTasks);
router.post("/", users_1.isLoggedIn, controllers_1.TasksController.createTask);
router.get("/:id", users_1.isLoggedIn, controllers_1.TasksController.getTask);
router.post("/comment/:id", users_1.isLoggedIn, controllers_1.TasksController.commentOnTask);
router.get("/comments/:id", users_1.isLoggedIn, controllers_1.TasksController.getCommentFromTask);
exports.default = router;
