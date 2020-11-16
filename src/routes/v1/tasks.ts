import express from "express";
import { TasksController } from "../../controllers";
import { isLoggedIn } from "../middlewares/users";

const router = express.Router();
router.get("/", isLoggedIn, TasksController.getTasks);
router.get("/admin", isLoggedIn, TasksController.getAdminTasks);
router.post("/", isLoggedIn, TasksController.createTask);
router.get("/:id", isLoggedIn, TasksController.getTask);
router.post("/comment/:id", isLoggedIn, TasksController.commentOnTask);
router.get("/comments/:id", isLoggedIn, TasksController.getCommentFromTask);

export default router;
