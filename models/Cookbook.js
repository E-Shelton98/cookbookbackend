//import connection
const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

// Create Cookbook as new schema
const cookbookSchema = new Schema({
	title: String,
	yearPublished: Number,
});
const Cookbook = mongoose.model('Cookbook', cookbookSchema);

//export model
module.exports = Cookbook;
