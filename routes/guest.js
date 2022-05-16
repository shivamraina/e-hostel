const express = require('express')
const router = express.Router()
const {Guest} = require('../models/guest')

router.post('/login', async(req, res) => {
    try{
        let user = await Guest.findOne({email: req.body.email});
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
        const user = new Guest({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email,
        })
        await user.save();
        res.send('User Registered')
    }
    catch(ex) {
        res.send(ex.message)
    }
});

module.exports = router;