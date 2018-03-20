const express = require('express');
const router = express.Router();
const appConfig = require('./../config');
const { DatabasesEnum } = require('./../constants');

let dbContorller;

if (appConfig.database === DatabasesEnum.MYSQL) {
	dbController = require('./../../mysql/controller');
} else {
	dbController = require('./../../mongodb/controller');
}

router.get('/business/:city/:name', (req, res) => {
	let city = decodeURI(req.params.city);
	let name = decodeURI(req.params.name);

	dbController.getSimilarRestaurants(name, city, 3)
	.then((data) => {
		res.send(data);
	})
	.catch((err) => {
		res.status(500).send(err);
	});
});

router.get('/city/:name', (req, res) => {
	let name = decodeURI(req.params.name);

	dbController.getSimilarCities(name, 3)
	.then((data) => {
		res.send(data);
	})
	.catch((err) => {
		res.status(500).send(err);
	});
});

module.exports = router;