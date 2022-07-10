import db from "../database/mongo.js";
import handleError from "./handleError.js"

export async function searchUserCart(userId,res){
    const userCart = await db.collection("carts").findOne({userId: userId});
    if(userCart === null){
        handleError(404,"Não existem carrinhos desse usuário.",res)
        return null;
    }else{
        return userCart;
    }
    
}