const mongoose = require('mongoose')

const model = mongoose.model
const Schema = mongoose.Schema

const ProductsSchema = new Schema({
    name: { type: String, required: true },
    type: [ String ],
    image_href: String,
    price: Number
})

const ProductsModel = model("Product", ProductsSchema)

module.exports = ProductsModel