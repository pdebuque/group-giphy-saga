const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/:keyword', (req, res) => {
	const searchTerm = req.params.keyword;
	console.log('received search request with keyword', req.params.keyword, 'and key', process.env.GIPHY_API_KEY);

	axios
		.get(
			`http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${searchTerm}&limit=5`
		)
		.then(response => {
			res.send(response.data);
            console.log(response.data);
		})
		.catch(error => {
			res.sendStatus(500);
		});
});

module.exports = router;
