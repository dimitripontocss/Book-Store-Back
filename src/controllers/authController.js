import { v4 as uuid } from "uuid"
import bcrypt from "bcrypt";

import db from "../database/mongo.js"
import { signupSchema, loginSchema } from "../joiSchemas/authSchema.js";

import ApiError from "../utils/apiError.js"
import handleError from "../utils/handleError.js"


export async function signup(req,res){
	try{
		const {name, email, password, passwordConfirmation} = req.body;

		
		const { error } = signupSchema.validate(req.body);
		if(error){
			throw new ApiError("Prencha todos os campos corretamente.",422);
		}

		const alreadyExist = await db.collection("users").findOne({ email: email});
		if(alreadyExist){
			throw new ApiError("Este email já entá cadastrado!",400);
		}

		if(password !== passwordConfirmation){
			throw new ApiError("As senhas devem ser iguais!",400);
		}
		const cryptedPassword = bcrypt.hashSync(password, 10);

		await db.collection("users").insertOne({
			name: name,
			email: email,
			password: cryptedPassword
		});
		return res.status(201).send("Usuário registrado com sucesso!");
	}
	catch(error){
		console.log(error);
		if(error instanceof ApiError){
			const {status ,message} = error;
			return handleError({status, message, res});
		}
		return handleError({status:500, msg:error.message, res})
	}
}


export async function login(req,res){
	try{
		const { email, password } = req.body;
		
		const check = loginSchema.validate(req.body);
		if(check.error){
			throw new ApiError("Prencha todos os campos corretamente.",422);
		}

		const possibleUser = await db.collection("users").findOne({ email });
		if(!possibleUser){
			throw new ApiError("Senha ou email incorretos!",401);
		}
		const passwordValidate = bcrypt.compareSync(password, possibleUser.password);
		if(passwordValidate){
			const token = uuid();
			await db.collection("sessions").insertOne({
				token,
				userId: possibleUser._id
			})
			return res.status(201).send(
				{
					token: token,
					name:possibleUser.name
				});
		}else{
			throw new ApiError("Senha ou email incorretos!",401);
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