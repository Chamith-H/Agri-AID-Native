const mongoose = require("mongoose");

const messageSchema = {
    f_ID:String,
    f_Name:String,
    a_ID:String,
    a_Name:String,
    type:String,
    msg:String,
    time: String
}

const mongoCollection = mongoose.model("Message", messageSchema)

module.exports = mongoCollection;