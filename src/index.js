const express = require('express');
const config = require('config');
const cors = require('cors');
require('./db/mongoose');

const userRouter = require('./router/user');
const bookRouter = require('./router/book');
const memoRouter = require('./router/memo');

const app = express();
const port = config.get('PORT');

app.use(express.json());
app.use(cors());
app.use(userRouter);
app.use(bookRouter);
app.use(memoRouter);

app.listen(port, () => {
    console.log(`Listening ${port}`);
})