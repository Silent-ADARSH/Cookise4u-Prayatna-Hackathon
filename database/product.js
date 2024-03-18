let mongoose = require("mongoose")
let {Schema} =  mongoose

let userscheme = new Schema({
    username:String,
    price : Number
})
module.exports = mongoose.model("product", userscheme)

