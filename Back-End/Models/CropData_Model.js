const mongoose = require("mongoose");

const cartSchema = {
    id:Number,
    name:String,
    image:String,
    period:Number,
    requirements:Object,
    actions:Object,
    cultivation:Array,
    growth:Array,
    disease:Array,
    harvest:Object
}

const mongoCollection = mongoose.model("Crop", cartSchema)

module.exports = mongoCollection;