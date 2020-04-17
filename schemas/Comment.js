const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    user:Object,
    content:String,
    likes:Number,
    dislikes:Number,
    comments:Array
})

module.exports = mongoose.model('Comment', schema)