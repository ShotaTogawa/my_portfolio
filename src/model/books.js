const mongoose = require("mongodb");
const validator = require('validator');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    page_num: {
        type: Number
    },
    ScheduledStartDate: {
        type: Date
    },
    ScheduledEndDate: {
        type: Date,
        validate(value) {
            if(ScheduledStartDate >= value) {
                throw new Error('Scheduled end date must be greater than Scheduled Start Date')
            }
        }
    }
},{
    timestamps: true
})


const Book = mongoose.model('Book', bookSchema);
module.exports = Book;
