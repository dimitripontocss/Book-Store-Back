import { Router } from "express";
import {  registerProduct, getProducts } from "../controllers/productsController.js";

const router = Router();

router.post("/home", registerProduct);
router.get ("/home", getProducts)


export default router;