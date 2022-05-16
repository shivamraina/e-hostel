const express = require('express')
const router = express.Router()
const {Complaint} = require('../models/complaint')

router.post('/', async(req, res) => {
    try{
        const user = new Complaint({
            name: req.body.name,
            mobile: req.body.mobile,
            complaint: req.body.complaint,
            status: 'Pending'
        })

        await user.save();
        res.send('Complaint Registered')
    }
    catch(ex) {
        res.status(400).send(ex.message)
    }
});

router.get('/', async(req, res) => {
    try{
        const complaints = await Complaint.find();

        res.send(complaints)
    }
    catch(ex) {
        res.status(400).send(ex.message)
    }
});

module.exports = router;