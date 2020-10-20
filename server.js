//Environmental Variables
require('dotenv').config();
const { PORT = 4000, NODE_ENV = 'development' } = process.env;

//mongo connection
const mongoose = require('./db/connection');

//cors
const cors = require('cors');
const corsOptions = require('./configs/cors.js');

//import express
const express = require('express');
//create app
const app = express();
//create logger from morgan
const logger = require('morgan');

// Add the middleware code needed to accept incoming data and add it to req.body
NODE_ENV === "production" ? app.use(cors(corsOptions)) : app.use(cors())
app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Route for testing that server is working
app.get('/', (req, res) => {
	res.json({ hello: 'Hello World!' });
});

const cookbookRouter = require('./controllers/cookbookRoutes');
app.use('/api/cookbooks/', cookbookRouter);

const authorRouter = require('./controllers/authorRoutes');
app.use('/api/authors/', authorRouter);

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
