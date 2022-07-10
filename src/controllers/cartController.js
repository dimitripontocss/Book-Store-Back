import { ObjectId } from "mongodb";
import db from "../database/mongo.js";

import { searchUserCart } from "../utils/searchUserCart.js";
import ApiError from "../utils/apiError.js"
import handleError from "../utils/handleError.js";

export async function getUserCart(req, res){
    const {userId} = res.locals.data;
    try{
        const userCart = await db.collection("carts").findOne({userId: userId});
        if(userCart){
            const {products,totalFixed} = await findProducts(userCart.selectedItems); 
            res.status(200).send({products,totalFixed});
        }
        else{
            throw new ApiError("Não foi possivel achar um carrinho,",404);
        }
    }catch(error){
		console.log(error);
		if(error instanceof ApiError){
			const {status ,message} = error;
			return handleError({status, message, res});
		}
		return handleError({status:500, msg:error.message, res})
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
        const {selectedItems} = await db.collection("carts").findOne({userId: userId});
        if(selectedItems){
            selectedItems.splice(selectedItems.indexOf(id),1);
            await db.collection("carts").updateOne({ userId },{
            $set:{selectedItems:selectedItems}
        });
        res.sendStatus(200);
        }
        else{
            throw new ApiError("Não foi possivel achar um carrinho,",404);
        }
        
    }catch(error){
		console.log(error);
		if(error instanceof ApiError){
			const {status ,message} = error;
			return handleError({status, message, res});
		}
		return handleError({status:500, msg:error.message, res})
	}
}

export async function postProduct(req,res){
    const {userId} = res.locals.data;
    const productId = req.body.productId;
    try{
        const userCart = await db.collection("carts").findOne({userId: userId});
        if(userCart){
            await db.collection("carts").updateOne({ userId },{
                $push: {selectedItems: productId}
            });
            res.sendStatus(200);
        }
        else{
            await db.collection("carts").insertOne({
                userId,
                selectedItems:[productId]
            })
            res.sendStatus(200);
        }
    }catch(error){
        console.log(error);
    }
}
