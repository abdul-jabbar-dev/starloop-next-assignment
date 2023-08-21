import run from "../connection";

export default async function handler(req, res) {
    const { productsDB } = await run()
    let result;
    if (req.methor === 'POST') {
        result = await productsDB.insertOne(req.body)
    } else {
        const category = req?.query?.categoryName
        if (category) {
            result = await productsDB.find({ category: { $regex: category, $options: 'i' } }).toArray()
        } else {

            async function shuffleArray(array) {
                for (let i = array.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [array[i], array[j]] = [array[j], array[i]];
                }
            }

            result = await productsDB.find().toArray();
            await shuffleArray(result)

        }
    }
    res.status(200).json(result)
}
