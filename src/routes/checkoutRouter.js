import { Router } from "express";
import { checkout } from "../controllers/checkoutController.js";
import { jtwAuth } from "../middlewares/jwtAuthMidd.js";

const router = Router();
router.post("/checkout", jtwAuth, checkout);
export default router;