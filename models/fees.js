const mongoose = require('mongoose')

const feesSchema = new mongoose.Schema({
    hostel: String,
    hostellerType: String,
    roomType: String,
    cost: String
});

const Fees = mongoose.model("Fees", feesSchema)

module.exports.Fees = Fees
module.exports.feesSchema = feesSchema