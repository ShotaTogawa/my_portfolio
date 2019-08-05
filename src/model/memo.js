const mongoose = require('mongoose');

const memoSchema = new mongoose.Schema({
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