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
        const memo = await Memo.find({book_id});
        console.log(memo)
        if (!memo) {
            return res.status(404).send();
        }
        res.send(memo);
    } catch (e) {
        return res.status(500).send(e);
    }
})



// router.get('/books', async(req, res) => {
//     try {
//         const books = await Book.find();
//         res.send(books);
//     } catch (e) {
//         return res.status(500).send(e);
//     }
// })

// router.delete('/book/:book_id/:memo_id', async(req, res) => {
//     const _id = req.params.memo_id;

//     try {
//         const memo = await Memo.findByIdAndDelete(_id);
//         await memo.save();
//         res.send(memo);
//     } catch (e) {
//         return res.status(500).send(e);
//     }
// })

// router.patch('/book/:book_id/:memo_id', async(req, res) => {
//     const updates = Object.keys(req.body);
//     const allowUpdates = ['memo'];
//     const isValidOperation = updates.every(update => allowUpdates.includes(update));
//     const _id = req.params.book_id;

//     if (!isValidOperation) {
//         return res.status(400).send({'error': 'Invalid updates'})
//     }

//     try {
//         const book = await Book.findById(_id);
//         updates.forEach((update) => book[update]= req.body[update]);
//         await book.save();
//         res.send(book);
//     } catch (err) {
//         res.status(400).send(e);
//     }
// })



module.exports = router;
