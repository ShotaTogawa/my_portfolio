const express = require('express');

const Book = require('../model/books');
const router = new express.Router();

router.post('/book', async(req, res) => {
    const book = new Book({
        ...req.body
    })

    try {
        await book.save();
        return res.status(201).send(book);
    } catch (err) {
        res.send(err);
        res.status(400);
    }
})

router.get('/book/:book_id', async(req, res) => {
    const _id = req.params.book_id;
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



router.get('/books', async(req, res) => {
    try {
        const books = await Book.find();
        res.send(books);
    } catch (e) {
        return res.status(500).send(e);
    }
})

router.delete('/book/:book_id', async(req, res) => {
    const _id = req.params.book_id;

    try {
        const book = await Book.findByIdAndDelete(_id);
        await book.save();
        res.send(book);
    } catch (e) {
        return res.status(500).send(e);
    }
})

router.patch('/book/:book_id', async(req, res) => {
    console.log(req.body)
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
});

router.patch('/book/:book_id/evaluation', async(req, res) => {
    console.log(req)
    const updates = Object.keys(req.body);
    const allowUpdates = ['evaluation'];
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
        res.status(400).send(err);
    }

})

router.patch('/book/:book_id/evaluation', async(req, res) => {
    console.log(req)
    const updates = Object.keys(req.body);
    const allowUpdates = ['evaluation'];
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
        res.status(400).send(err);
    }

})

router.patch('/book/:book_id/startdate', async(req, res) => {
    console.log(req)
    const updates = Object.keys(req.body);
    const allowUpdates = ['startDate', 'status'];
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
        res.status(400).send(err);
    }

})


router.patch('/book/:book_id/enddate', async(req, res) => {
    console.log(req)
    const updates = Object.keys(req.body);
    const allowUpdates = ['endDate', 'status'];
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
        res.status(400).send(err);
    }

})

router.patch('/book/:book_id/read_pages', async(req, res) => {
    console.log(req)
    const updates = Object.keys(req.body);
    const allowUpdates = ['read_pages'];
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
        res.status(400).send(err);
    }

})


module.exports = router;
