import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRouter from "./routes/authRouter.js";
import cartRouter from "./routes/cartRouter.js"

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();


app.use(authRouter);
app.use(cartRouter);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Servidor online na porta:", process.env.PORT)
})

