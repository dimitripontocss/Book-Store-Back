import { Router } from "express";
import { getUserCart } from "../controllers/cartController.js";
import { jtwAuth } from "../middlewares/jwtAuthMidd.js";

const router = Router();
router.get("/cart",jtwAuth, getUserCart);

export default router;