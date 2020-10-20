//Import connection
const mongoose = require('../db/connection');
//set Schema from mongoose
const Schema = mongoose.Schema;

// Create Author as new schema
const authorSchema = new Schema({
	firstName: String,
	lastName: String,
	cookbooks: [{ type: Schema.Types.ObjectId, ref: 'Cookbook' }],
});
const Author = mongoose.model('Author', authorSchema);

// Export model named "Author"
module.exports = Author;
