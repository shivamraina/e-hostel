const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    studentType: String,
    name: String,
    email: String,
    password: String,
    sid: String,
    branch: String,
    address: String,
    city: String,
    state: String,
    pincode: String,
    fatherName: String,
    motherName: String, 
    dob: String, 
    jee: String,
    percent12: String,
    percent10: String,
    mobile: String,
    bookHostel: String,
});

const Student = mongoose.model("Student", studentSchema)

module.exports.Student = Student
module.exports.studentSchema = studentSchema