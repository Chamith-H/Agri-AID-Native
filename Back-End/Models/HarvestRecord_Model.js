const mongoose = require("mongoose");

const harvestSchema = {
    farmer:String,
    crop:String,
    start:String,
    harvested:String,
    quantity:Number,
    quality:String
}

const mongoCollection = mongoose.model("Record", harvestSchema)

module.exports = mongoCollection;