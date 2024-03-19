let mongoose = require("mongoose")
let {Schema} =  mongoose

let userscheme = new Schema({
    Serial :Number,
    Order_id : String,
    Product_name : String,
    Address: String,
    Date:String,
    Price:Number,
    Status:String

})
module.exports = mongoose.model("order", userscheme)

