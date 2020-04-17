const mongoose = require('mongoose')

const schema = {
    name:{
        type:String,
        required:[true, 'Please enter a user name']
    },
    email:{
        type:String,
        required:[true, 'Please enter your email'],
        trim:true
    },
    password:{
        type:String,
        required:[true, 'Please enter Password'],
        min: 6
    },
    photoURL: {
        type:String
    },
    post:{
        type:Array,
        default:[]
    }
}

const userSchema = new mongoose.Schema(schema, {timestamps:true})

module.exports = mongoose.model('User', userSchema)