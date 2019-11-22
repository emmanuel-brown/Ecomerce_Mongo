const Router = require('express').Router()
const User = require('../models/user.model')

Router.post('/newUser', async (req, res) =>{
    const user = new User(req.body)
    user.save().then(() =>{
        res.send(user)
    }).catch(e => {
        res.send(e)
    })
})

Router.post('/login', async (req, res)=>{
    try{
        const user = await User.findByCredentials(req.body.email, req.body.password)
        User.tryThis()
        res.send(user)
    } catch (e) {
        res.status(400).send()
    }
})

module.exports = Router