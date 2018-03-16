const express = require('express');
const router = express.Router();

const dbController = require('./../../database/controller');



router.get('/business/:name', (req, res) => {
	let name = req.params.name;

	dbController.getSimilarRestaurants(name, 3)
	.then((data) => {
		res.send(data);
	})
	.catch((err) => {
		res.status(500).send(err);
	});
});

router.get('/city/:name', (req, res) => {
	let name = req.params.name;

	dbController.getSimilarCities(name, 3)
	.then((data) => {
		res.send(data);
	})
	.catch((err) => {
		res.status(500).send(err);
	});
});

module.exports = router;