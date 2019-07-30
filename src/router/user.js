const express = require('express');

const User = require('../model/user');
const router = new express.Router();

router.post('/user', async(req, res) => {
    const user = new User(req.body);

    try {
        await user.save();
        res.status(201).send({user});
    } catch (e) {
        console.error(e);
        res.status(400).send(e);
    }
});

router.get('/user/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const user = await User.findById(_id);
        if(!user) {
            res.status(404).send();
        }
        res.send(user);
    } catch (e) {
        res.status(500).send();
    }
})

module.exports = router;

