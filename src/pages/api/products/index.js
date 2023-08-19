import run from "../connection";

export default async function handler(req, res) {
    const { productsDB } = await run()
    let result;
    if (req.methor === 'POST') {
        result = await productsDB.insertOne(req.body)
    } else {
        result = await productsDB.find().toArray()
    }
    res.status(200).json(result)
}
