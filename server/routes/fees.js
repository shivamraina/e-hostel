const express = require('express')
const router = express.Router()
const {Fees} = require('../models/fees')

router.post('/', async(req, res) => {
    try{
        const user = new Fees({
            hostel: req.body.hostel,
            hostellerType: req.body.hostellerType,
            roomType: req.body.roomType,
            cost: req.body.cost
        })

        await user.save();
        res.send('Fees Set')
    }
    catch(ex) {
        res.status(400).send(ex.message)
    }
});

router.get('/', async(req, res) => {
    try{
        const fees = await Fees.findOne();
        res.send(fees);
    }
    catch(ex) {
        res.status(400).send(ex.message)
    }
});

module.exports = router;