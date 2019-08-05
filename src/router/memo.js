const express = require('express');

const Memo = require('../model/memo');
const router = new express.Router();

router.post('/book/:book_id/memo', async(req, res) => {
    const memo = new Memo({
        ...req.body
    })

    try {
        await memo.save();
        return res.status(201).send(memo);
    } catch (err) {
        res.send(err);
        res.status(400);
    }
})

router.get('/book/:book_id/memo', async(req, res) => {
    const book_id = req.params.book_id;
    try {
        const memo = await Memo.find({book_id}).sort({ createdBy: 1 });
        if (!memo) {
            return res.status(404).send();
        }
        res.send(memo);
    } catch (e) {
        return res.status(500).send(e);
    }
})


router.delete('/book/:book_id/:memo_id', async(req, res) => {
    const _id = req.params.memo_id;
    const book_id = req.params.book_id;
    try {
        const memo = await Memo.findOneAndDelete({book_id: book_id, _id: _id});
        res.send(memo);
    } catch (e) {
        return res.status(500).send(e);
    }
})



module.exports = router;
