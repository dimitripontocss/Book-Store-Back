import { Router } from "express";
import { login, signup } from "../controllers/authController.js";

const router = Router();
router.post("/login", login);
router.post("/sign-up", signup);

export default router;