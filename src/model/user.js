const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
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
    },
    password: {
        type: String,
        trim: true,
    }
},{
    timestamps: true
});

userSchema.virtual('Book', {
    ref: 'Book',
    localField: '_id',
    foreignField: 'owner'
})

const User = mongoose.model('User', userSchema);
module.exports = User;