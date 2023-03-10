const mongoose = require("mongoose");

const cartSchema = {
    farmer:String,
    crop:String,
    dateAdd:String,
    dateEnd:String
}

const mongoCollection = mongoose.model("Cultivation", cartSchema)

module.exports = mongoCollection;