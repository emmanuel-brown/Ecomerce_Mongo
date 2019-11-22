const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const model = mongoose.model
const Schema = mongoose.Schema

const UserSchema = Schema({
    name: String,
    email: {
        type: String,
        unique: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Emial is invalid')
            }
        }
    },
    password: {
        type: String,
        minlength: 3,
        trim: true,
        required: true,
        validate(value) {
            if(value.toLowerCase().includes('password')){
                throw new Error('password cannot contain "password"')
            }
        }
    }
})

//this is how you can create a custom methos for the schema
UserSchema.statics.findByCredentials = async (email, password) => { 
    const user = await UserModel.findOne({ email })

    if(!user) {
        throw new Error('Unable to login')
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch){
        throw new Error('Unable to login')
    }

    return user
}

// the plain text password before saving
//pre is before an event and post if after
UserSchema.pre('save', async function (next) { //must use ES5 function to use the "this" binding
    const user = this // "this" is in reverence to userSchema

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }

    next() // without next the function will hang and never save
})  

const UserModel = model("users", UserSchema)

module.exports = UserModel