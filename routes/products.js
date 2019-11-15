const router = require('express').Router()
const Products = require('../models/products.model')

router.get('/', (req, res) =>{
    Products.find({}, (err, doc) =>{
        if(err) console.log("Failed to retrieve all products")
        console.log("Successfully to retrieve all products")
        res.send(doc)
    })
})

module.exports = router