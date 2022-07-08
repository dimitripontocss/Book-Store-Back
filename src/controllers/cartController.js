import db from "../database/mongo.js";
import { ObjectId } from "mongodb";

export async function getUserCart(req,res){
    const {userId} = res.locals.data;
    try{
        const userCart = await searchUserCart(userId,res);
        const {products,total} = await findProducts(userCart.selectedItems); 
        res.status(200).send({products,total});
    }catch(error){
        console.log(error);
    }
    
}

async function searchUserCart(userId,res){
    const userCart = await db.collection("carts").findOne({userId: userId});
    if(userCart.error){
        handleError(404,"Não existem carrinhos desse usuário.",res)
    }
    return userCart;
}

async function findProducts(selectedItems){
    let products = [];
    let total = 0;
    for(let i=0; i<selectedItems.length;i++){
        const product = await db.collection("products").findOne({_id: new ObjectId(selectedItems[i])});
        const value = product.price?.replace("R$ ", "");
        total += parseFloat(value);
        console.log(total)
        products.push(product);
    }
    return {products,total};
}