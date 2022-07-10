import { Router } from "express";
import { getUserCart,deleteProduct } from "../controllers/cartController.js";
import { jtwAuth } from "../middlewares/jwtAuthMidd.js";

const router = Router();
router.get("/cart",jtwAuth, getUserCart);
router.delete("/cart/:productID",jtwAuth, deleteProduct);
export default router;