const mongoose = require("mongoose");

const today = new Date();

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


const Book = mongoose.model('Book', bookSchema);
module.exports = Book;
