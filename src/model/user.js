const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        validate(value) {
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    }
},{
    timestamps: true
});

userSchema.virtual('Book', {
    ref: 'Book',
    localField: '_id',
    foreignField: 'owner'
})

userSchema.pre('remove', async function(next) {
    const user = this
    await Book.deleteMany({ owner: user._id})
    await Memo.deleteMany({ owner: user._id})
    next()
})

const User = mongoose.model('User', userSchema);
module.exports = User;