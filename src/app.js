const express = require('express');
require('./db/mongoose');

const userRouter = require('./router/user');
const bookRouter = require('./router/book');
const memoRouter = require('./router/memo');

const app = express();

app.use(express.json());
app.use(userRouter);
app.use(bookRouter);
app.use(memoRouter);

module.exports = app;