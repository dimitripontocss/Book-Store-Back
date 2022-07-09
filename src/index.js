import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRouter from "./routes/authRouter.js";
import productsRouter from "./routes/productsRouter.js";
import cartRouter from "./routes/cartRouter.js"
import checkoutRouter from "./routes/checkoutRouter.js"


const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();


app.use(authRouter);
app.use(productsRouter);
app.use(cartRouter);
app.use(checkoutRouter);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Servidor online na porta:", process.env.PORT)
})

