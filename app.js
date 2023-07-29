const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv/config');

//internal exports

const { productRouter } = require('./routers');

const app = express();
const api = process.env.API_URI;
const port = process.env.PORT;
const connectionString = process.env.CONNECTION_STRING;
// midlleware
app.use(bodyParser.json());
app.use(morgan('tiny'));

//router middleware
app.use(`${api}/product`, productRouter);

mongoose.connect(connectionString).then(() => {
    console.log('db connection succesfully');
});

app.listen(port, () => {
    console.log(`server is running http://localhost:${port}`);
});
