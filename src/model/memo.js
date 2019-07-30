const mongoose = require('mongoose');

const memoSchema = new mongoose.Schema({
    // owner: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true,
    //     ref: "User"
    // },
    // book_id: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true,
    //     ref: "Book"
    // },
    owner: {
        type: String,
        required: true
    },
    book_id: {
        type: String,
        required: true
    },
    memo: {
        type: String,
        required: true,
    },
},{
    timestamps: true
});

const Memo = mongoose.model('Memo', memoSchema);
module.exports = Memo;