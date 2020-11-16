import express from "express";
import { UsersController } from "../../controllers";
import { isLoggedIn } from "../middlewares/users";

const router = express.Router();
router.post("/register", UsersController.register);
router.post("/login", UsersController.login);

router.get("/", isLoggedIn, UsersController.getUsers);
router.get("/:id", isLoggedIn, UsersController.getUser);
router.post("/:id", isLoggedIn, UsersController.updateUser);
router.delete("/:id", isLoggedIn, UsersController.deleteUser);

export default router;
