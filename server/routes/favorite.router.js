const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
	const queryText = 'SELECT * FROM favorites';
	pool
		.query(queryText)
		.then(response => res.send(response.rows))
		.catch(err => console.log('could not get favorites!', err));
});

// add a new favorite
router.post('/', (req, res) => {
	console.log('posting');
	const queryText = `INSERT INTO favorites (url)
                        VALUES ($1)`;
	pool
		.query(queryText, [req.body])
		.then(() => res.sendStatus(200))
		.catch(err => console.log('could not post', err));
});

// update given favorite with a category id
router.put('/:id', (req, res) => {
	const queryText = `UPDATE favorites SET category_id=$1
                        WHERE id = $2`;
	pool
		.query(queryText, [req.body.category_id, req.params.id])
		.then(() => res.sendStatus(201))
		.catch(err => console.log('could not update category', err));

	// req.body should contain a category_id to add to this favorite image
});

// delete a favorite
router.delete('/:id', (req, res) => {
	const queryText = `DELETE FROM favorites
                        WHERE id = $1`;
	pool
		.query(queryText, [req.params.id])
		.then(() => res.sendStatus(202))
		.catch(err => console.log('could not delete favorite', err));
	res.sendStatus(200);
});

module.exports = router;
