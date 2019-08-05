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
        type: String,
        default: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-e7b33.appspot.com/o/books%2Fimages%2Fdefault%2Fimage.png?alt=media&token=76580ae4-2f31-45ac-96bc-bd141697e049"
    },
    page_nums: {
        type: Number
    },
    read_pages: {
        type: Number
    },
    startDate: {
        type: Date,
    },
    endDate: {
        type: Date
    },
    owner: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "beforeReading"
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
