const mongoose = require("mongoose");
const Memo = require('./memo');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    author: {
        type: String,
    },
    imageUrl: {
        type: String
    },
    page_nums: {
        type: Number
    },
    ScheduledStartDate: {
        type: Date,
    },
    ScheduledEndDate: {
        type: Date
    },
    StartDate: {
        type: Date,
    },
    EndDate: {
        type: Date
    },
    owner: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        default: 0
    },
    evaluation: {
        type: Number,
        default: 0
    }
},{
    timestamps: true
})

bookSchema.virtual('Memo', {
    ref: 'Memo',
    localField: '_id',
    foreignField: 'book_id'
})

bookSchema.pre('remove', async function(next) {
    const book = this
    await Memo.deleteMany({ owner: book._id})
    next()
})

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;
