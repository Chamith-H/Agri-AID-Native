const mongoose = require("mongoose");

const cartSchema = {
    id:Number,
    name:String,
    image:String,
    period:Number,
    yield : Number,
    requirements:Object,
    actions:Object,
    stages:Object,
    cultivation:Array,
    growth:Array,
    disease:Object,
    harvest:Object
}

const mongoCollection = mongoose.model("Crop", cartSchema)

module.exports = mongoCollection;