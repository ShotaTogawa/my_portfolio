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
    },
    password: {
        type: String,
        trim: true,
        // validate(value) {
        //     console.log(value)
        //     if(value >= 6) {
        //         throw new Error('Password must be greater than 6')
        //     }
        // }
    },
},{
    timestamps: true
});

const User = mongoose.model('User', userSchema);
module.exports = User;