require('dotenv').config()
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const mongoose = require('mongoose')
const axios = require('axios')
const PORT = process.env.PORT || 5050;

const Products = require('./models/products.model')

const app = express()
app.use(cors()) //enable connection to react app even though they're seperate
app.use(morgan('tiny'))
app.use(helmet())

client = mongoose.connect(process.env.ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) {    
        console.log(err) 
        return
    }   
    console.log("Connected successfully to server") 
});

app.get('/', (req,res) =>{
    axios.get('http://localhost:5000/api/products')
        .then(p => {
            let products = p.data
            
            products.map(prod => prod.type = prod.description.split(" "))
            Products.insertMany(products, (err, doc) =>{
                if(err) console.log("was not able to send products")
                console.log("send was successful")
                res.send(doc)
            })
        })
        .catch(() => res.send("could not retrieve"))
    
})


app.listen(PORT, () => { console.log(`Listening on port ${PORT}`) })