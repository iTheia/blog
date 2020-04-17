const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    name:String,
    owner:Object,
    content:String,
    coments:Array,
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('Post', schema)