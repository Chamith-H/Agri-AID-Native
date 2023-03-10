const mongoose = require("mongoose");

const cartSchema = {
    name:String,
    current:Object,
    Quarter:Array
}

const mongoCollection = mongoose.model("MarketCondition", cartSchema)

module.exports = mongoCollection;