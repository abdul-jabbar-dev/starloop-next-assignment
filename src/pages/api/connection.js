const { MongoClient } = require("mongodb")

const uri = 'mongodb+srv://abdullah1532002:abdullah1532002@cluster0.b1mqdif.mongodb.net/?retryWrites=true&w=majority'

const con = new MongoClient(uri)
const run = async () => {
    const connect = await con.connect()
    const db = await connect.db('starloop')
    const productsDB = await db.collection('products')
    return {
        productsDB
    }
}
export default run
