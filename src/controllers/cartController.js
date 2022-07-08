import { ObjectId } from "mongodb";

import db from "../database/mongo.js";

import { searchUserCart } from "../utils/searchUserCart.js"



export async function getUserCart(req,res){
    const {userId} = res.locals.data;
    try{
        const userCart = await searchUserCart(userId,res);
        const {products,totalFixed} = await findProducts(userCart.selectedItems); 
        res.status(200).send({products,totalFixed});
    }catch(error){
        console.log(error);
    }
    
}

async function findProducts(selectedItems){
    let products = [];
    let total = 0;
    for(let i=0; i<selectedItems.length;i++){
        const product = await db.collection("products").findOne({_id: new ObjectId(selectedItems[i])});
        const value = product.price?.replace("R$ ", "").replace(",",".");
        total += parseFloat(value);
        products.push(product);
    }
    const totalFixed = total.toFixed(2);
    return {products,totalFixed};
}

export async function deleteProduct(req,res){
    const {userId} = res.locals.data;
    const id = req.params.productID;
    try{
        const {selectedItems} = await db.collection("carts").findOne({ userId });
        selectedItems.splice(selectedItems.indexOf(id),1);
        await db.collection("carts").updateOne({ userId },{
            $set:{selectedItems:selectedItems}
        });
    }catch(error){
        console.log(error)
    }
    console.log(id)
}