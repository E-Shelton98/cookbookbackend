//import express
const express = require('express');
//create app
const app = express();
//create logger from morgan
const logger = require('morgan');

// Add the middleware code needed to accept incoming data and add it to req.body
app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const cookbookRouter = require('./controllers/cookbookRoutes');
app.use('/api/cookbooks/', cookbookRouter);

const authorRouter = require('./controllers/authorRoutes');
app.use('/api/authors/', authorRouter);

app.listen(4000, () => console.log('Server running on port 4000!'));
