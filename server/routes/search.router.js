const express = require('express');
const router = express.Router();
require('dotenv').config();
const axios = require('axios');

router.get('api/search', (req, res) => {
	axios
		.get(
			`http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${keyword}&limit=5`
		)
		.then(response => {
			res.send(response.data);
		})
		.catch(error => {
			res.sendStatus(500);
		});
});

module.exports = router;
