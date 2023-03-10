const mongoose = require("mongoose");

const userSchema = {
    id: String,
    name: String,
    designation: String,
    workplace: String,
    email: String,
    password: String,
    role: String,
    rating: Number,
    status:String,
    date:String
}
const mongoCollection = mongoose.model("User", userSchema)

module.exports = mongoCollection;