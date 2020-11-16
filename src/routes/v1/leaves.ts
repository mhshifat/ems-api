import express from "express";
import { LeavesController } from "../../controllers";
import { isLoggedIn } from "../middlewares/users";

const router = express.Router();
router.get("/admin", isLoggedIn, LeavesController.getAdminLeaves);
router.get("/", isLoggedIn, LeavesController.getLeaves);
router.post("/", isLoggedIn, LeavesController.createLeave);

export default router;
