require('dotenv').config()
const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const mongoose = require('mongoose')
const compression = require('compression')
const PORT = process.env.PORT || 5050

const app = express()

app.use(compression()) //enable connection to react app even though they're seperate
app.use(morgan('tiny'))
app.use(helmet())
app.use(express.urlencoded())
app.use(express.json())

if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
	uri = process.env.ATLAS_URI  // connection string for Atlas here  
} else {
	uri = process.env.ATLAS_URI   // connection string for localhost mongo here  
}

client = mongoose.connect(process.env.ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, (err, client) => {
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
const usersRouter = require('./routes/users')

app.use('/products', productRouter)
app.use('/users', usersRouter)

const jwt = require('jsonwebtoken')


app.listen(PORT, () => { console.log(`Listening on port ${PORT}`) })