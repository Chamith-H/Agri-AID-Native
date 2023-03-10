const mongoose = require("mongoose");

const cartSchema = {
    id:Number,
    name:String,
    image:String,
    requirements:Object
}

const mongoCollection = mongoose.model("Crop", cartSchema)

module.exports = mongoCollection;