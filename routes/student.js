const express = require('express')
const router = express.Router()
const {Student} = require('../models/student')

router.post('/login', async(req, res) => {
    try{
        let user = await Student.findOne({email: req.body.email});
        if(!user) {
            return res.status(400).send('User Not Registered')
        }

        if(user.password !== req.body.password) {
            return res.status(400).send('Wrong Password')
        }
        res.send(user)
    }
    catch(ex) {
        res.status(400).send(ex.message)
    }
});

router.post('/reg', async(req, res) => {
    try{
       
        const user = new Student({
            studentType: req.body.studentType,
            name: req.body.name,
            password: req.body.password,
            email: req.body.email,
            sid: req.body.sid,
            branch: req.body.branch,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            pincode: req.body.pincode,
            fatherName: req.body.fatherName,
            motherName: req.body.motherName,
            dob: req.body.dob,
            jee: req.body.jee,
            percent12: req.body.percent12,
            percent10: req.body.percent10,
            mobile: req.body.mobile,
            bookHostel: 'false'
        })

        await user.save();
        res.send('User Registered')
    }
    catch(ex) {
        res.send(ex.message)
    }
});

module.exports = router;