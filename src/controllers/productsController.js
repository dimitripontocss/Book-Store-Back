import db from "../database/mongo.js"

export async function registerProduct(req, res){
    try{
        console.log("oie")
        await db.collection("products").insertMany([{
            imageUrl:"https://images-americanas.b2w.io/produtos/6983188/imagens/livro-codigo-limpo-habilidades-praticas-do-agile-software/6983188_1_xlarge.jpg",
            name: "Código Limpo",
            price: "R$ 80,00"
        },
        {
            imageUrl:"https://images-americanas.b2w.io/produtos/111949251/imagens/livro-o-poder-do-habito/111949251_1_xlarge.jpg",
            name:"O Poder do Hábito",
            price:"R$ 47,30"
        }])
        return res.sendStatus(201)
    }catch(error){
        return res.status(500).send(error.message)
    }
}

export async function getProducts(req, res){
    try {
        const products = await db.collection("products").find().toArray()
        return res.send(products)

    } catch (error) {
        return res.status(500).send(error.message)
    }
}