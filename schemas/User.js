const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    name:String,
    email:String,
    password:String,
    post:{
        type:Array,
        default:[]
    }
})

module.exports = mongoose.model('User', schema)