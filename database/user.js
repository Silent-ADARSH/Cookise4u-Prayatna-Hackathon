let mongoose = require("mongoose")
let {Schema} =  mongoose

let userscheme = new Schema({
    username:String,
    password : String
})
module.exports = mongoose.model("user", userscheme)

