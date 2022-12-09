const express = require('express');
const router = express.Router();
require('dotenv').config();
const axios = require('axios');
// import { useSelector } from 'react-redux';

router.get('/:keyword', (req, res) => {
	const searchTerm = req.params.keyword;
	console.log('received search request with keyword ', req.params.keyword);

	axios
		.get(
			`http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${searchTerm}&limit=5`
		)
		.then(response => {
			res.send(response.rows);
		})
		.catch(error => {
			res.sendStatus(500);
		});
});

module.exports = router;
