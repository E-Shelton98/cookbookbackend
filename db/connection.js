require('dotenv').config()

const { MONGODBURI } = process.env
const mongoose = require('mongoose');

mongoose.connect(MONGODBURI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const DB = mongoose.connection

DB.on('open', () => console.log('You are connected to Mongo'))
	.on('close', () => console.log('You are disconnected to Mongo'))
	.on('error', (err) => console.log(err));

module.exports = mongoose;
