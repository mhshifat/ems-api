"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var controllers_1 = require("../../controllers");
var users_1 = require("../middlewares/users");
var router = express_1.default.Router();
router.post("/register", controllers_1.UsersController.register);
router.post("/login", controllers_1.UsersController.login);
router.get("/", users_1.isLoggedIn, controllers_1.UsersController.getUsers);
router.get("/:id", users_1.isLoggedIn, controllers_1.UsersController.getUser);
router.post("/:id", users_1.isLoggedIn, controllers_1.UsersController.updateUser);
router.delete("/:id", users_1.isLoggedIn, controllers_1.UsersController.deleteUser);
exports.default = router;
