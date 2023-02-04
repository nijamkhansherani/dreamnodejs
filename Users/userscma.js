const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    passward:String,
    MoNumber:String
})
module.exports = new mongoose.model('person',userSchema)
