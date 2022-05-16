const mongoose = require('mongoose')

const complaintSchema = new mongoose.Schema({
      name: String,
      mobile: String,
      complaint: String,
      status: String,
});

const Complaint = mongoose.model("Complaint", complaintSchema)

module.exports.complaintSchema = complaintSchema
module.exports.Complaint = Complaint