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
    imageUrl: {
        type: String
    },
    page_nums: {
        type: Number
    },
    ScheduledStartDate: {
        type: Date,
        validate(value) {
            if (today <= value) {
                throw new Error('Scheduled start date must be greater than equal today')
            }
        }
    },
    ScheduledEndDate: {
        type: Date
    },
    owner: {
        type: String,
        required: true
    }
},{
    timestamps: true
})


const Book = mongoose.model('Book', bookSchema);
module.exports = Book;
