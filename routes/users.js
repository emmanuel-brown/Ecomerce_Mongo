const Router = require('express').Router()
const User = require('../models/user.model')
const auth = require('../middleware/auth')


Router.post('/newUser', async (req, res) =>{
    const user = new User(req.body)
    try{
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token })
    } catch (e) {
        res.status(201).send(e)
    }
})

Router.post('/login', async (req, res)=>{
    try{
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({user, token})
    } catch (e) {
        res.status(400).send()
    }
})

Router.post('/logout', auth, async (req, res) => {
    try{
        req.user.tokens = req.user.tokens.filter(token => token.token !== req.token)
        await req.user.save()
        res.send()
    } catch (e) {
        res.status.send()
    }
})

Router.get('/me', auth, async (req, res) =>{
    res.send(req.user)
})

module.exports = Router