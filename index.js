require('dotenv').config()
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const mongoose = require('mongoose')
const axios = require('axios')
const PORT = process.env.PORT || 5050;

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

/////////////////////////
///  api end points  ///
///////////////////////

const productRouter = require('./routes/products')

app.use('/products', productRouter)



app.listen(PORT, () => { console.log(`Listening on port ${PORT}`) })