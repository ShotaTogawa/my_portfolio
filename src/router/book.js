const express = require('express');

const Book = require('../model/books');
const router = new express.Router();

router.post('/user/:id/book', async(req, res) => {
    console.log(req)
    const book = new Book({
        ...req.body,
        owner: req.params.id
    })

    try {
        await book.save();
        return res.status(201).send(book);
    } catch (err) {
        res.send(err);
        res.status(400);
    }
})

router.get('/user/:id/book/:book_id', async(req, res) => {
    const _id = req.params.book_id;
    console.log(req.params.book_id);
    try {
        const book = await Book.findById(_id);
        console.log(book)
        if (!book) {
            return res.status(404).send();
        }
        res.send(book);
    } catch (e) {
        return res.status(500).send(e);
    }
})

router.delete('/user/:id/book/:book_id', async(req, res) => {
    const _id = req.params.book_id;

    try {
        const book = await Book.findByIdAndDelete(_id);
        await book.save();
        res.send(book);
    } catch (e) {
        return res.status(500).send(e);
    }
})

router.patch('/user/:id/book/:book_id', async(req, res) => {
    const updates = Object.keys(req.body);
    const allowUpdates = ['title', 'genre', 'imageUrl', 'page_nums', 'ScheduledStartDate', 'ScheduledEndDate'];
    const isValidOperation = updates.every(update => allowUpdates.includes(update));
    const _id = req.params.book_id;

    if (!isValidOperation) {
        return res.status(400).send({'error': 'Invalid updates'})
    }

    try {
        const book = await Book.findById(_id);
        updates.forEach((update) => book[update]= req.body[update]);
        await book.save();
        res.send(book);
    } catch (err) {
        res.status(400).send(e);
    }
})



module.exports = router;
