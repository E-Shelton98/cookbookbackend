const express = require('express');
const router = express.Router();
const Author = require('../models/Author');

// Write the route to list all authors
router.get('/', async (req, res) => {
	let authors = await Author.find({});
	res.json({ status: 200, data: authors });
});

// Write the route to get authors by firstname
router.get('/:firstName', async (req, res) => {
	let author = await Author.find({ firstName: req.params.firstName });
	res.json({ status: 200, data: author });
});

// Write the route to create an author:
router.post('/', async (req, res) => {
	let author = await Author.create(req.body);
	res.json({ status: 200, msg: 'author added', data: author });
});

// Write the route to update an author
router.put('/:lastName', async (req, res) => {
	let author = await Author.findOneAndUpdate(
		{ lastName: req.params.lastName },
		req.body,
		{ new: true }
	);
	res.json({ status: 200, msg: "Author's last name updated", data: author });
});
// Update the cookbook using Postman.

// Bonus: Write the route to delete cookbooks by author name. (hint: There are a couple on different ways to do this and you may have to change/add code in other files)

module.exports = router;
