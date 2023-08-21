import { ObjectId } from "mongodb";
import run from "../connection";

export default async function handler(req, res) { 
    const { productsDB } = await run()
    const { productId } = req.query
 
    let result;
    if (req.methor === 'POST') {
        result = await productsDB.insertOne(req.body)
    } else {
        result = await productsDB.findOne({ _id: new ObjectId(productId) })
    }
    res.status(200).json(result)
}
