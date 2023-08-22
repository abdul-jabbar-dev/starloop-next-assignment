const { MongoClient } = require("mongodb")


const con = new MongoClient(process.env.DB_URL)
const run = async () => {
    const connect = await con.connect()

    const db = await connect.db('starloop')
    const productsDB = await db.collection('products')
    return {
        productsDB
    }
}
export default run
