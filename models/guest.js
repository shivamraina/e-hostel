const mongoose = require('mongoose')

const guestSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50,
        trim: true
      },
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
      },
      date: {
        type: Date,
        default: Date.now
      },
      applications: {
          type: [mongoose.Types.ObjectId]
      }
});

const Guest = mongoose.model("Guest", guestSchema)

module.exports.Guest = Guest
module.exports.guestSchema = guestSchema