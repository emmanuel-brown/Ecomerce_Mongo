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
    try{
        const { type, filterBy, direction } = req.params
        prods = await Products.find(type !== "default" ? {type} : {})
        switch (filterBy) {
            case "alpha":
                prods.sort((a,b) => a.name - b.name)
                break;
            case "price":
                prods.sort((a,b) => a.price - b.price)
                break;
            default:
                return prods;
        }
        direction === "decsend" && prods.reverse()
        res.send(prods)
    } catch (e){
        res.status(400).send()
    }
})

module.exports = router