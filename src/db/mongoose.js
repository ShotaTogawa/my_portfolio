const mongoose = require("mongoose");
const config = require('config');
const MONGODB_URL = config.get('MONGODB_URL');

mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true
});

module.exports = mongoose;