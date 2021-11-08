const mongoose = require("mongoose")
const carSchema = mongoose.Schema({
    carName: String,
    carType: String,
    carCost: Number
})
module.exports = mongoose.model("Car",
    carSchema)