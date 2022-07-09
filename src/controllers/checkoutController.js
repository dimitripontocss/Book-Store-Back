import db from "../database/mongo.js";
import dayjs from "dayjs";

export async function checkout(req,res){
    const {userId} = res.locals.data;
    const { username, products, total} = req.body;
    try{
        await db.collection("sales").insertOne({
            userId,
            username,
            products,
            total,
            date: dayjs().format('DD/MM/YYYY:HH:mm:ss')
        });
        await db.collection("carts").deleteOne({ userId });
        res.sendStatus(201);
    }catch(error){
        console.log(error);
    }
}