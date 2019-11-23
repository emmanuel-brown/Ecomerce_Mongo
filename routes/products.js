const router = require('express').Router()
const Products = require('../models/products.model')

router.get('/', (req, res) =>{
    Products.find({}, (err, doc) =>{
        if(err) console.log("Failed to retrieve all products")
        console.log("Successfully to retrieve all products")
        res.send(doc)
    })
})

router.get('/:type/:filterBy/:direction', async (req, res) =>{
    const { type, filterBy, direction } = req.params
    const typed = type === null ? {} : { type }

    try{
        const prods = await Products.find(typed)
        switch (filterBy) {
            case "alpha":
                prods.sort((a,b) => a.name - b.name)
                break;
            case "price":
                prods.sort((a,b) => a.price - b.price)
                break;
            default:
                break;
        }
        direction === "decsend" && prods.reverse()
        res.send(prods)
    } catch (e){
        console.log(e)
    }
})

module.exports = router