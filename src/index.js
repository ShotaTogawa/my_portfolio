const express = require('express');
const config = require('config');
require('./db/mongoose');

const app = express();
const port = config.get('PORT');

app.use(express.json());

app.listen(port, () => {
    console.log(`Listening ${port}`);
})