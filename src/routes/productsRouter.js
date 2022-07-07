import { Router } from "express";
import {  getProducts } from "../controllers/productsController.js";

const router = Router();

router.post("/home", getProducts);


export default router;