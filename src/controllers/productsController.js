import db from "../database/mongo.js"

export async function getProducts(req, res){
    try{
        console.log("oie")
        await db.collection("products").insertOne({
            imageUrl:"https://images-americanas.b2w.io/produtos/6983188/imagens/livro-codigo-limpo-habilidades-praticas-do-agile-software/6983188_1_xlarge.jpg",
            name: "Código Limpo",
            price: "R$ 80,00"
        })
        return res.sendStatus(201)
    }catch{

    }
}