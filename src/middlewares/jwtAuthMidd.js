import jwt from "jsonwebtoken";

import handleError from "../utils/handleError";

export async function jtwAuth(req,res){
    try{
        const key = process.env.SENHA_JWT;
        const { authorization } = req.headers;
		const token = authorization?.replace("Bearer ", "");
        const data = jwt.verify(token, key);
        res.locals.data = data;
    }catch(error){
		return handleError({status:500, msg:error.message, res})
    }
}