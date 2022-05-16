const mongoose = require('mongoose')

const attendantSchema = new mongoose.Schema({
      email: {
        type: String,
        required: true,
        unique: true,
        minlength: 5,
        maxlength: 255,
        trim: true
      },  
      password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
      }
});

const Attendant = mongoose.model("Attendant", attendantSchema)

module.exports.Attendant = Attendant
module.exports.attendantSchema = attendantSchema