const mongoose = require("mongoose")
const carSchema = mongoose.Schema({
    carName: {type:String, length:7},
    carType: String,
    carCost: {type:Number,min:500,max:3000}
})
module.exports = mongoose.model("Car",
    carSchema)